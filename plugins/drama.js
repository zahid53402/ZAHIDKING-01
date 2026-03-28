const config = require('../config')
const { cmd } = require('../command')
const yts = require('yt-search')

cmd({
    pattern: "drama",
    desc: "Get drama episode as file link",
    category: "download",
    react: "📂",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Example:\n.drama Ertugrul 1")

        let args = text.split(" ")
        let ep = parseInt(args[args.length - 1])
        let name = args.slice(0, -1).join(" ")

        if (!name || !ep) {
            return reply("❌ Format:\n.drama name episode")
        }

        // 🔍 search
        let search = await yts(`${name} episode ${ep}`)
        let video = search.videos[0]

        if (!video) return reply("❌ Episode nahi mila")

        let fakeFile = {
            url: video.url
        }

        await conn.sendMessage(
            from,
            {
                document: fakeFile,
                mimetype: "video/mp4",
                fileName: `${name}-EP${ep}.mp4`,
                caption: `🎬 ${video.title}\n\n📥 Click to download`,
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

    } catch (e) {

        console.log(e)
        reply("❌ Error bhai")

    }

})
