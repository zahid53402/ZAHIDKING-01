const { cmd } = require('../command');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { runtime } = require('../lib/functions');
const config = require('../config');

/* =======================
   FULL SYSTEM PING
   Command: .ping
======================= */
cmd({
    pattern: "ping",
    react: "🌈",
    desc: "Check system speed & full report",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const speed = Date.now() - m.messageTimestamp * 1000;

        const caption = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│⚡ 𝐒𝐘𝐒𝐓𝐄𝐌 𝐑𝐄𝐏𝐎𝐑𝐓*
*│*
*│🚀 𝐒𝐩𝐞𝐞𝐝:* ${speed}ms
*│🧠 𝐔𝐩𝐭𝐢𝐦𝐞:* ${runtime(process.uptime())}
*│💾 𝐑𝐀𝐌:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
*│🔥 𝐂𝐏𝐔:* ${os.cpus()[0].model}
*│📦 𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* v${config.VERSION || "5.0.0"}
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> 📌 ᴘᴏᴡᴇʀ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ
`;

        await conn.sendMessage(from, {
            text: caption,
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

        // 🔊 Audio
        const audioPath = path.join(__dirname, '../assets/ping.m4a');
        if (fs.existsSync(audioPath)) {
            await conn.sendMessage(from, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: true
            }, { quoted: mek });
        }

    } catch (e) {
        console.error("PING ERROR:", e);
        reply("❌ Ping command failed");
    }
});


/* =======================
   QUICK PING
   Command: .ping2
======================= */
cmd({
    pattern: "ping2",
    react: "🚀",
    desc: "Quick ping check",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const start = Date.now();
        const temp = await conn.sendMessage(from, { text: "⏳ *Checking speed...*" }, { quoted: mek });
        const speed = Date.now() - start;

        const msg = `
*╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*
*│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ  ⊱┈─̇─̣╌*
*│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣*
*│⚡ 𝐐𝐔𝐈𝐂𝐊 𝐏𝐈𝐍𝐆*
*│*
*│🚀 𝐒𝐩𝐞𝐞𝐝:* ${speed}ms
*│🟢 𝐒𝐭𝐚𝐭𝐮𝐬:* Online
*│📦 𝐕𝐞𝐫𝐬𝐢𝐨𝐧:* v${config.VERSION || "5.0.0"}
*╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭*

> 📌 ᴘᴏᴡᴇʀ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ
`;

        await conn.sendMessage(from, {
            text: msg,
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
        }, { quoted: temp });

    } catch (e) {
        console.error("PING2 ERROR:", e);
        reply("❌ Ping2 failed");
    }
});
