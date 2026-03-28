const config = require('../config')
const { cmd } = require('../command')
const fetch = require('node-fetch')

cmd({
    pattern: "drama",
    desc: "Search drama info",
    category: "search",
    react: "🎬",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Drama ka naam likho bhai!\nExample: .drama Ertugrul")

        // API Request (No YouTube ❌)
        let res = await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`)
        let data = await res.json()

        if (!data || !data.title) return reply("❌ Drama nahi mila 😢")

        let dec = `╭━━━〔 *DRAMA INFO* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🎬 *Title:* ${data.title}
┃★│ ⭐ *Rating:* ${data.rating}
┃★│ 📅 *Year:* ${data.year}
┃★│ ⏱ *Runtime:* ${data.runtime}
┃★╰──────────────
┃★╭──────────────
┃★│ 📝 *Plot:*
┃★│ ${data.plot}
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝙕𝘼𝙃𝙄𝘿 𝙆𝙄𝙉𝙂* ❣️
> ${config.DESCRIPTION}`

        await conn.sendMessage(
            from,
            {
                image: { url: data.poster },
                caption: dec,
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
        reply("❌ Drama fetch error")

    }

})
