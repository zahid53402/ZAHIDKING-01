const { cmd } = require("../command");
const os = require("os");

cmd({
    pattern: "zahid",
    alias: ["king"],
    desc: "zahid king full introduction",
    category: "info",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from }) => {
    try {

        const uptime = process.uptime();
        const h = Math.floor(uptime / 3600);
        const min = Math.floor((uptime % 3600) / 60);
        const sec = Math.floor(uptime % 60);

        const text = `
👑 ╔════════  👑  ════════╗ 👑
       ✨ 𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆 ✨
👑 ╚════════  👑  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 👑 *KING'S IDENTITY*
   ┃ 📜 𝐍𝐚𝐦𝐞  : ᴢᴀʜɪᴅ ᴋɪɴɢ
   ┃ 🎭 𝐍𝐢𝐜𝐤  : ᴢᴀʜɪᴅ s
   ┃ 🎂 𝐀𝐠𝐞   : 18
   ┃ 🧬 𝐂𝐚𝐬𝐭𝐞 : ᴀᴇʀɪ
   ┃ 🌍 𝐋𝐨𝐜   : ᴘᴀᴋɪsᴛᴀɴ (ᴅ.ᴍ.ᴊ)
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *BOT EMPIRE DETAILS*
   ┃ 🤖 𝐁𝐨𝐭   : ᴢᴀʜɪᴅ ᴋɪɴɢ
   ┃ 👤 𝐎𝐰𝐧𝐞𝐫 : ᴢᴀʜɪᴅ ᴋɪɴɢ
   ┃ 📞 𝐂𝐚𝐥𝐥  : +923044154575
   ┃ ⚙️ 𝐌𝐨𝐝𝐞  : ᴘᴜʙʟɪᴄ
   ┃ 🔌 𝐓𝐲𝐩𝐞  : ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

🛡️ ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚡ *SYSTEM STATUS*
   ┃ ⏳ 𝐔𝐩𝐭𝐢𝐦𝐞  : ${h}h ${min}m ${sec}s
   ┃ 💻 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: ${os.platform()}
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(from, {
            text,
            contextInfo: {
                mentionedJid: [m.sender]
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
    }
});

