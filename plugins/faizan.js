const { cmd } = require("../command");
const os = require("os");

cmd({
    pattern: "adeel",
    alias: ["mafia"],
    desc: "Adeel full introduction",
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
╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 👤 *Name:* ᴢᴀʜɪᴅ ᴋɪɴɢ
│❀ 🧑‍💼 *Nick:* ᴢᴀʜɪᴅ s
│❀ 🎂 *Age:* 18
│❀ 🧬 *Caste:* ᴀᴇʀɪ
│❀ 🌍 *Country:* ᴘᴀᴋɪsᴛᴀɴ
│❀ 🏙️ *City:* (ᴅ.ᴍ.ᴊ)
│
│❀ 🤖 *Bot Name:* ᴢᴀʜɪᴅ ᴋɪɴɢ
│❀ 👑 *Owner:* ᴢᴀʜɪᴅ ᴋɪɴɢ
│❀ 📞 *Owner No:* +923044154575
│❀ 🔣 *Prefix:* .
│❀ ⚙️ *Mode:* ᴘᴜʙʟɪᴄ
│❀ 🔌 *Baileys:* ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
│
│❀ ⏳ *Uptime:* ${h}h ${min}m ${sec}s
│❀ 💻 *Platform:* ${os.platform()}
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> 📌 ᴘᴏᴡᴇʀ ʙʏ *ᴢᴀʜɪᴅ ᴋɪɴɢ*
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
