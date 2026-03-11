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
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         ⚡ 𝐒𝐘𝐒𝐓𝐄𝐌  𝐄𝐍𝐆𝐈𝐍𝐄 ⚡
👑 ╚══════════  👑  ══════════╝ 👑

🚀 *𝐏𝐄𝐑𝐅𝐎𝐑𝐌𝐀𝐍𝐂𝐄  𝐒𝐓𝐀𝐓𝐒*
┃ ◈ ⚡ *Speed:* ${speed}ms
┃ ◈ 🧠 *Uptime:* ${runtime(process.uptime())}
┃ ◈ 📦 *Version:* v${config.VERSION || "5.0.0"}
┗━━━━━━━━━━━━━━━━━━━━━━━

📟 *𝐇𝐀𝐑𝐃𝐖𝐀𝐑𝐄  𝐈𝐍𝐅𝐎*
┃ ◈ 💾 *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
┃ ◈ 🔥 *CPU:* ${os.cpus()[0].model}
┃ ◈ ⚙️ *Platform:* ${os.platform()}
┗━━━━━━━━━━━━━━━━━━━━━━━

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Sultanat-e-Zahid Is Running Smooth!*
   ┃ 👑 King's Machine Is Unstoppable!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(from, {
            text: caption,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363424512151830@newsletter',
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
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         ⚡ 𝐐𝐔𝐈𝐂𝐊  𝐏𝐈𝐍𝐆  ⚡
👑 ╚══════════  👑  ══════════╝ 👑

🚀 *𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐎𝐍  𝐒𝐏𝐄𝐄𝐃*
┃ ◈ ⚡ *Response:* ${speed}ms
┃ ◈ 🟢 *Status:* Online & Active
┃ ◈ 📦 *Version:* v${config.VERSION || "5.0.0"}
┗━━━━━━━━━━━━━━━━━━━━━━━

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *King's Reflexes Are Sharp!*
   ┃ 👑 Sultanat-e-Zahid Is Lightning Fast!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(from, {
            text: msg,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363424512151830@newsletter',
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

