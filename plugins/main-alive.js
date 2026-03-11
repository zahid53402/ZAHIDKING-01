const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
    pattern: "alive",
    alias: ["status", "online", "a"],
    desc: "Check bot is alive or not",
    category: "main",
    react: "👻",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {

        const aliveMsg = `
*╭👑 ╔════════  👑  ════════╗ 👑
       ✨ 𝐒𝐘𝐒𝐓𝐄𝐌 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 ✨
👑 ╚════════  👑  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🏰 *KING'S EMPIRE STATUS*
   ┃ 
   ┃ 🤖 *𝐁𝐨𝐭 𝐒𝐭𝐚𝐭𝐮𝐬:* Online ✅
   ┃ 👑 *𝐎𝐰𝐧𝐞𝐫:* ${config.OWNER_NAME}
   ┃ ⚙️ *𝐌𝐨𝐝𝐞:* ${config.MODE}
   ┃ 🔣 *𝐏𝐫𝐞𝐟𝐢𝐱:* ${config.PREFIX}
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚡ *TECHNICAL DOMINANCE*
   ┃ 
   ┃ 💻 *𝐇𝐨𝐬𝐭:* ${os.hostname()}
   ┃ 💾 *𝐑𝐀𝐌:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
   ┃ ⏱️ *𝐔𝐩𝐭𝐢𝐦𝐞:* ${runtime(process.uptime())}
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(from, {
            image: { url: config.MENU_IMAGE_URL },
            caption: aliveMsg,
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

    } catch (err) {
        console.error("ALIVE ERROR:", err);

        const errorMsg = `
👑 ╔════════  👑  ════════╗ 👑
       ⚖️  𝐒𝐘𝐒𝐓𝐄𝐌  𝐏𝐀𝐔𝐒𝐄𝐃  ⚖️
👑 ╚════════  👑  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *KING'S SILENCE*
   ┃ 
   ┃ ❌ *Error:* Alive Command Failed
   ┃ 🛡️ *Status:* Under Maintenance
   ┃ ⏳ *Action:* Try Again Later
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Ghabrane Ki Baat Nahi...*
   ┃ 👑 King Is Ruling Behind The Scenes!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await reply(errorMsg);
    }
});

