const axios = require("axios");
const { cmd } = require("../command");

cmd({
    pattern: "tiktokstalk",
    alias: ["tstalk", "ttstalk"],
    react: "❤️‍🔥",
    desc: "Get TikTok user profile details",
    category: "search",
    filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q) {
            return reply(
`❌ Please provide a TikTok username.

Example:
.tiktokstalk khaby.lame`
            );
        }

        const apiUrl = `https://api.siputzx.my.id/api/stalk/tiktok?username=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl, { timeout: 60000 });

        if (!data.status) {
            return reply("❌ User not found. Please check the username and try again.");
        }

        const user = data.data.user;
        const stats = data.data.stats;

        const caption = `
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         📱  𝐓𝐈𝐊𝐓𝐎𝐊  𝐒𝐓𝐀𝐓𝐒  📱
👑 ╚══════════  👑  ══════════╝ 👑

👤 *𝐔𝐒𝐄𝐑  𝐈𝐃𝐄𝐍𝐓𝐈𝐓𝐘*
┃ ◈ 🆔 *User:* @${user.uniqueId}
┃ ◈ 📛 *Name:* ${user.nickname}
┃ ◈ ✅ *Verified:* ${user.verified ? "Yes" : "No"}
┃ ◈ 🌍 *Region:* ${user.region || "Unknown"}
┗━━━━━━━━━━━━━━━━━━━━━━━

📊 *𝐈𝐍𝐅𝐋𝐔𝐄𝐍𝐂𝐄  𝐒𝐓𝐀𝐓𝐒*
┃ ◈ 👥 *Followers:* ${stats.followerCount.toLocaleString()}
┃ ◈ 👤 *Following:* ${stats.followingCount.toLocaleString()}
┃ ◈ ❤️ *Likes:* ${stats.heartCount.toLocaleString()}
┃ ◈ 🎥 *Videos:* ${stats.videoCount.toLocaleString()}
┗━━━━━━━━━━━━━━━━━━━━━━━

📝 *𝐀𝐃𝐃𝐈𝐓𝐈𝐎𝐍𝐀𝐋  𝐈𝐍𝐅𝐎*
┃ ◈ 📜 *Bio:* ${user.signature || "No bio available"}
┃ ◈ 🔗 *Link:* ${user.bioLink?.link || "No link"}
┃ ◈ 📅 *Joined:* ${new Date(user.createTime * 1000).toLocaleDateString()}
┗━━━━━━━━━━━━━━━━━━━━━━━

🌐 *𝐏𝐑𝐎𝐅𝐈𝐋𝐄  𝐋𝐈𝐍𝐊*
┃ ◈ 🔗 https://www.tiktok.com/@${user.uniqueId}
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(
            from,
            {
                image: { url: user.avatarLarger },
                caption
            },
            { quoted: mek }
        );

    } catch (err) {
        console.error("TIKTOK STALK ERROR:", err);
        reply("❌ Failed to fetch TikTok profile details. Please try again later.");
    }
});

