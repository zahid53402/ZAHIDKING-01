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

        const aliveMsg = `亗 𝙱𝙷𝙰𝙸 𝙰𝙱𝙷𝙸 𝚃𝙰𝙺 𝚉𝙸𝙽𝙳𝙰 𝙷𝙾 🤫 亗
~ 𝒫𝑜𝓌𝑒𝓇𝑒𝒹 𝒷𝓎 𝒵𝒜𝐻𝐼𝒟 𝒦𝐼𝒩𝒢 ~`;

        await conn.sendMessage(from, {
            image: { url: config. },
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

        const errorMsg = `亗 𝙱𝙷𝙰𝙸 𝙰𝙱𝙸 𝙸𝙽𝚃𝙺𝙰𝙻 𝙺𝚁 𝙶𝚈𝙰 𝙷𝙾 ⚰️ 亗
~ 𝒫𝑜𝓌𝑒𝓇𝑒𝒹 𝒷𝓎 𝒵𝒜𝐻𝐼𝒟 𝒦𝐼𝒩𝒢 ~`;

        await reply(errorMsg);
    }
});

