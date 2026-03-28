const config = require('../config')
const { cmd } = require('../command')
const yts = require('yt-search')
const ytdl = require('@distube/ytdl-core')
const fs = require('fs')
const path = require('path')

cmd({
    pattern: "drama",
    desc: "Download drama episode as document",
    category: "download",
    react: "📂",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Use:\n.drama Ertugrul 1")

        let args = text.split(" ")
        let ep = parseInt(args[args.length - 1])
        let name = args.slice(0, -1).join(" ")

        if (!name || !ep) {
            return reply("❌ Example:\n.drama Ertugrul 1")
        }

        // 🔍 search episode
        let search = await yts(`${name} episode ${ep}`)
        let video = search.videos[0]

        if (!video) return reply("❌ Episode nahi mila")

        let filePath = path.join(__dirname, `../temp/${Date.now()}.mp4`)

        reply("⏳ Download ho raha hai... thoda wait karo")

        // 📥 download full video
        const stream = ytdl(video.url, {
            filter: "audioandvideo",
            quality: "highest"
        })

        const writeStream = fs.createWriteStream(filePath)

        stream.pipe(writeStream)

        writeStream.on("finish", async () => {

            let stats = fs.statSync(filePath)
            let sizeMB = (stats.size / (1024 * 1024)).toFixed(2)

            await conn.sendMessage(
                from,
                {
                    document: fs.readFileSync(filePath),
                    mimetype: "video/mp4",
                    fileName: `${name}-EP${ep}.mp4`,
                    caption: `🎬 ${name} Episode ${ep}\n📦 Size: ${sizeMB} MB`,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: "120363424512151830@newsletter",
                            newsletterName: "Zᴀʜɪᴅ Kɪɴɢ",
                            serverMessageId: 143
                        }
                    }
                },
                { quoted: mek }
            )

            // 🧹 delete file after send
            fs.unlinkSync(filePath)

        })

    } catch (e) {

        console.log(e)
        reply("❌ Download error bhai")

    }

})
