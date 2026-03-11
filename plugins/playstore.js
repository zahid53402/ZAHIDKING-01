const axios = require("axios");
const { cmd } = require("../command");

cmd({
    pattern: "playstore",
    desc: "Search apps from PlayStore",
    category: "search",
    react: "📱",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {

        if (!q) {
            return reply("❌ *App name likho*\n\nExample:\n.playstore whatsapp");
        }

        // 🔎 API (same – no change)
        const api = `https://api.princetechn.com/api/search/playstore?apikey=prince&query=${q}`;
        const res = await axios.get(api);
        const data = res.data.results;

        if (!data || data.length === 0) {
            return reply("❌ *Koi app nahi mila*");
        }

        const app = data[0];

        // 🎨 ZAHID KING STYLE (ONLY STYLE CHANGED)
        const msg = `👑 *𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆  𝐀𝐏𝐏𝐒* 📱
🛰️ ━━━━━━━━━━━━━━━━━━━━ 🛰️

📱 *𝐀𝐩𝐩:* ${app.name}
👨‍💻 *𝐃𝐞𝐯:* ${app.developer}
⭐ *𝐑𝐚𝐭𝐢𝐧𝐠:* ${app.rating}
📥 *𝐈𝐧𝐬𝐭𝐚𝐥𝐥𝐬:* ${app.installs}
💰 *𝐏𝐫𝐢𝐜𝐞:* ${app.price}

📝 *𝐀𝐛𝐨𝐮𝐭:* ${app.summary}

🔗 *𝐋𝐢𝐧𝐤:* ${app.link}

🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️
  *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*

`;

        await conn.sendMessage(from, {
            image: { url: app.img },
            caption: msg
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("❌ PlayStore search error, please try again later");
    }
});
