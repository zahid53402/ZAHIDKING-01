const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "👑", 
    desc: "Get bot owner contact",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER;
        const ownerName = config.OWNER_NAME || "Zᴀʜɪᴅ Kɪɴɢ";

        // vCard
        const vcard = 
`BEGIN:VCARD
VERSION:3.0
FN:${ownerName}
ORG: ZAHID-KING;
TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}
END:VCARD`;

        // Styled caption message
        const caption = `
🛡️▬▬▬▬▬  ⚜️  ▬▬▬▬▬🛡️
      ♛ 𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆 ♛
 🛡️▬▬▬▬▬  ⚜️  ▬▬▬▬▬🛡️

  👤 𝐎𝐰𝐧𝐞𝐫 : ${ownerName}
  📞 𝐂𝐨𝐧𝐭𝐚𝐜𝐭: ${ownerNumber}

  ✨ ────────────────── ✨
      𝓚𝓲𝓷𝓰 𝓞𝓯 𝓗𝓲𝓼 𝓦𝓸𝓻𝓵𝓭

> Zᴀʜɪᴅ Kɪɴɢ
`;

        // Send styled text
        await conn.sendMessage(from, {
            text: caption
        }, { quoted: mek });

        // Send contact card (ONLY contact, no extra data)
        await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("OWNER CMD ERROR:", error);
        await conn.sendMessage(from, {
            text: "❌ Owner command error, please try again later."
        }, { quoted: mek });
    }
});

