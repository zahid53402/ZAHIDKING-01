const config = require('../config')
const { cmd } = require('../command')
const fetch = require('node-fetch')

cmd({
    pattern: "play",
    desc: "Spotify style song download",
    category: "download",
    react: "🎧",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Song name do\nExample: .play Pasoori")

        // 🔍 Step 1: Spotify search (fake API)
        let sp = await fetch(`https://api.popcat.xyz/spotify?q=${encodeURIComponent(text)}`)
        let spdata = await sp.json()

        if (!spdata.title) return reply("❌ Song nahi mila")

        let query = spdata.title + " " + spdata.artist

        // 🔍 Step 2: YouTube search
        let yt = await fetch(`https://ytsearch.guruapi.tech/search?q=${encodeURIComponent(query)}`)
        let ytdata = await yt.json()

        let video = ytdata.results[0]

        // 🎧 Step 3: MP3 download
        let dl = await fetch(`https://api.guruapi.tech/ytdl?url=${video.url}`)
        let ddata = await dl.json()

        let caption = `╭━━━〔 *SPOTIFY SONG* 〕━━━┈⊷
┃★ 🎧 ${spdata.title}
┃★ 👤 ${spdata.artist}
╰━━━━━━━━━━━━━━━┈⊷

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝙕𝘼𝙃𝙄𝘿 𝙆𝙄𝙉𝙂* ❣️
> ${config.DESCRIPTION}`

        await conn.sendMessage(
            from,
            {
                audio: { url: ddata.audio },
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
            { quoted: mek }
        )

    } catch (e) {

        console.log(e)
        reply("❌ Spotify play error")

    }

})
