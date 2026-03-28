const config = require('../config')
const { cmd } = require('../command')
const axios = require('axios')
const cheerio = require('cheerio')
const ytdl = require('@distube/ytdl-core')

cmd({
    pattern: "drama",
    desc: "ARY Digital drama scraper",
    category: "download",
    react: "📺",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Example:\n.drama ishqiya episode 1")

        let query = text.toLowerCase().replace(/ /g, "-")

        reply("⏳ Searching ARY Digital...")

        // 🔍 Search page (simple method)
        let searchUrl = `https://arydigital.tv/?s=${query}`
        let res = await axios.get(searchUrl)
        let $ = cheerio.load(res.data)

        let post = $('article a').attr('href')
        if (!post) return reply("❌ Drama nahi mila")

        // 📺 open episode page
        let epPage = await axios.get(post)
        let $$ = cheerio.load(epPage.data)

        let iframe = $$('iframe').attr('src')
        if (!iframe) return reply("❌ Video nahi mila")

        // 🎬 extract YouTube ID
        let ytMatch = iframe.match(/embed\/(.*?)\?/)

        if (!ytMatch) return reply("❌ YouTube link nahi mila")

        let ytUrl = `https://www.youtube.com/watch?v=${ytMatch[1]}`

        reply("⏳ Download ho raha hai...")

        // 📥 download video (low quality safe)
        let stream = ytdl(ytUrl, {
            quality: "18"
        })

        await conn.sendMessage(
            from,
            {
                video: stream,
                mimetype: "video/mp4",
                caption: `🎬 ARY Drama\n\n${text}`
            },
            { quoted: mek }
        )

    } catch (e) {

        console.log(e)
        reply("❌ ARY scraper error")

    }

})
