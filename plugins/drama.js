const config = require('../config')
const { cmd } = require('../command')
const yts = require('yt-search')
const ytdl = require('@distube/ytdl-core')

cmd({
    pattern: "drama",
    desc: "Pakistani drama episode",
    category: "download",
    react: "🎬",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Example:\n.drama ishqiya 1")

        let args = text.split(" ")
        let ep = args.pop()
        let name = args.join(" ")

        if (!name || !ep) {
            return reply("❌ Format:\n.drama drama_name episode")
        }

        reply("⏳ Searching full episode...")

        // 🔍 Better search (IMPORTANT 🔥)
        let search = await yts(`${name} episode ${ep} full ary digital`)
        let video = search.videos.find(v => v.duration.seconds > 1200) // >20 min

        if (!video) return reply("❌ Full episode nahi mila")

        reply("⏳ Sending episode...")

        let stream = ytdl(video.url, {
            quality: "18"
        })

        await conn.sendMessage(
            from,
            {
                video: stream,
                mimetype: "video/mp4",
                caption: `🎬 ${video.title}`
            },
            { quoted: mek }
        )

    } catch (e) {

        console.log(e)
        reply("❌ Drama error bhai")

    }

})
