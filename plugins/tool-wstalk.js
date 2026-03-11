const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "wstalk",
    alias: ["channelstalk", "chinfo"],
    desc: "Get WhatsApp channel information",
    category: "utility",
    react: "🔍",
    filename: __filename
},
async (conn, mek, m, { from, reply, args }) => {
    try {
        // Check if URL is provided
        if (!args) return reply("❌ Please provide a WhatsApp channel URL\nExample: .wstalk https://whatsapp.com/channel/0029VavP4nX0G0XggHzhVg0R");

        // Extract channel ID from URL
        const channelId = args.match(/channel\/([0-9A-Za-z]+)/i)?.[1];
        if (!channelId) return reply("❌ Invalid WhatsApp channel URL");

        // API endpoint
        const apiUrl = `https://itzpire.com/stalk/whatsapp-channel?url=https://whatsapp.com/channel/${channelId}`;

        // Fetch channel info
        const response = await axios.get(apiUrl);
        const data = response.data.data;

        // Format the information
        const channelInfo = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         📢  𝐂𝐇𝐀𝐍𝐍𝐄𝐋  𝐈𝐍𝐅𝐎  📢
👑 ╚══════════  👑  ══════════╝ 👑

📊 *𝐂𝐇𝐀𝐍𝐍𝐄𝐋  𝐒𝐓𝐀𝐓𝐒*
┃ ◈ 📢 *𝐓𝐢𝐭𝐥𝐞:* ${data.title}
┃ ◈ 👥 *𝐅𝐨𝐥𝐥𝐨𝐰𝐞𝐫𝐬:* ${data.followers}
┗━━━━━━━━━━━━━━━━━━━━━━━

📝 *𝐃𝐄𝐒𝐂𝐑𝐈𝐏𝐓𝐈𝐎𝐍*
┏━━━━━━━━━━━━━━━━━━━━━━━
┃ ${data.description.replace(/\n/g, '\n┃ ')}
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        // Send message with channel image
        await conn.sendMessage(from, {
            image: { url: data.img },
            caption: channelInfo,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in wstalk command:", e);
        reply(`❌ Error: ${e.response?.data?.message || e.message}`);
    }
});
