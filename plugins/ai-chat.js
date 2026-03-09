const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "ai",
    alias: ["bot", "dj", "gpt", "gpt4", "bing"],
    desc: "Chat with an AI model",
    category: "ai",
    filename: __filename
},
async (conn, mek, m, { from, args, q, reply }) => {
    try {

        await conn.sendMessage(from, {
            react: { text: "🤖", key: mek.key }
        });

        if (!q) return reply("Please provide a message.\nExample: `.ai Hello`");

        const apiUrl = `https://lance-frank-asta.onrender.com/api/gpt?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);

        if (!data || !data.message) {
            await conn.sendMessage(from, {
                react: { text: "❌", key: mek.key }
            });
            return reply("AI failed to respond. Try again later.");
        }

        await reply(`🤖 *AI Response:*\n\n${data.message}\n\n> Powered By Zᴀʜɪᴅ Kɪɴɢ`);

        await conn.sendMessage(from, {
            react: { text: "✅", key: mek.key }
        });

    } catch (e) {
        console.error(e);

        await conn.sendMessage(from, {
            react: { text: "❌", key: mek.key }
        });

        reply("Error while communicating with AI.");
    }
});
