const config = require('../config')
const { cmd } = require('../command')
const yts = require('yt-search')
const ytdl = require('ytdl-core')

cmd({
    pattern: "play",
    desc: "Download song (MP3)",
    category: "download",
    react: "🎧",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Song name do\nExample: .play Pasoori")

        // 🔍 Search YouTube (no API)
        const search = await yts(text)
        const video = search.videos[0]

        if (!video) return reply("❌ Song nahi mila")

        // 🎧 Get audio stream
        const url = video.url

        let caption = `╭━━━〔 *SONG DOWNLOADED* 〕━━━┈⊷
┃★ 🎧 ${video.title}
┃★ ⏱ ${video.timestamp}
┃★ 👀 ${video.views}
╰━━━━━━━━━━━━━━━┈⊷

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝙕𝘼𝙃𝙄𝘿 𝙆𝙄𝙉𝙂* ❣️
> ${config.DESCRIPTION}`

        await conn.sendMessage(
            from,
            {
                audio: { url: url },
                mimetype: "audio/mpeg",
                ptt: false,
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
