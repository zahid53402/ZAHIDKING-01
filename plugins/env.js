const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const path = require('path');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "env",
    desc: "menu the bot",
    category: "menu3",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `👑 ╭━━━〔 *${config.BOT_NAME}* 〕━━━╮ 👑
┃ ┏━━━━━━━━━━━━━━━━━━━━┓ ┃
┃ ┃  👤 *OWNER:* ${config.OWNER_NAME}
┃ ┃  🛡️ *MODE:* ${config.MODE}
┃ ┃  ⚙️ *PREFIX:* ${config.PREFIX}
┃ ┃  📡 *HOST:* Heroku
┃ ┃  💎 *VER:* 5.0.0
┃ ┗━━━━━━━━━━━━━━━━━━━━┛ ┃
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

  🔥 ╔════〔 *KING MENU* ════╗ 🔥

  ◈ ╭─────────〔 👑 〕──────────๏
  ◈ ┃ » 🛠️ *ADMIN EVENTS*
  ◈ ┃ » 👋 *WELCOME*
  ◈ ┃ » ⌨️ *SETPREFIX*
  ◈ ┃ » ⚙️ *MODE*
  ◈ ├──────────────────────────๏
  ◈ ┃ » ✍️ *AUTO_TYPING*
  ◈ ┃ » 📡 *ALWAYS_ONLINE*
  ◈ ┃ » 🎙️ *AUTO_RECORDING*
  ◈ ┃ » 👁️ *STATUS_VIEW* ◈ ┃ » ❤️ *STATUS_REACT*
  ◈ ┃ » ✅ *READ_MESSAGE*
  ◈ ┃ » 🖼️ *AUTO_STICKER*
  ◈ ├──────────────────────────๏
  ◈ ┃ » 🚫 *ANTI_BAD*
  ◈ ┃ » 💬 *AUTO_REPLY*
  ◈ ┃ » 🎵 *AUTO_VOICE*
  ◈ ┃ » 🎭 *CUSTOM_REACTS*
  ◈ ┃ » ✨ *AUTO_REACT*
  ◈ ┃ » 🔗 *ANTI_LINK* ◈ ┃ » 📝 *STATUS_REPLY*
  ◈ ╰─────────〔 👑 〕──────────๏

  ╚═══════〔 𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆 〕═══════╝

> ${config.DESCRIPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
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
            },
            { quoted: mek }
        );

        // Send local audio from assets/menu.m4a

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: false,
}, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});

