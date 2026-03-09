const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "tt",
    alias: ["tiktok", "ttdl"],
    react: "🎵",
    desc: "Download TikTok video without watermark",
    category: "download",
    use: ".tt <tiktok url>",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.includes("tiktok")) {
            return reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❌ 𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐓𝐢𝐤𝐓𝐨𝐤 𝐋𝐢𝐧𝐤*
*│📌 Example:*
*│ .tt https://vm.tiktok.com/xxxx*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ
`);
        }

        await reply("⏳ *Zᴀʜɪᴅ Kɪɴɢ is downloading TikTok…*");

        const apiUrl = `https://arslanmd-api.vercel.app/api/ttdl?url=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data.status || !data.result?.video) {
            return reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❌ 𝐓𝐢𝐤𝐓𝐨𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐚𝐢𝐥𝐞𝐝*
*│🔒 Video may be private or expired*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ
`);
        }

        const caption = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│🎵 𝐓𝐢𝐤𝐓𝐨𝐤 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐝*
*│👤 𝐀𝐮𝐭𝐡𝐨𝐫:* ${data.result.author || "Unknown"}
*│💧 𝐍𝐨 𝐖𝐚𝐭𝐞𝐫𝐦𝐚𝐫𝐤*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ
`;

        await conn.sendMessage(from, {
            video: { url: data.result.video },
            mimetype: "video/mp4",
            caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '',
                    newsletterName: 'Zᴀʜɪᴅ Kɪɴɢ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("TIKTOK ERROR:", e);

        reply(`
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ  ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│❌ 𝐓𝐢𝐤𝐓𝐨𝐤 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐄𝐫𝐫𝐨𝐫*
*│⏳ Please try again later*
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ
`);
    }
});
