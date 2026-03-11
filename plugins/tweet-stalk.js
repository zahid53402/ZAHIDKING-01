const { cmd } = require('../command');
const axios = require('axios');

cmd({
  pattern: "xstalk",
  alias: ["twitterstalk", "twtstalk"],
  desc: "Get details about a Twitter/X user",
  react: "🔍",
  category: "search",
  filename: __filename
}, async (conn, m, store, { from, q, reply }) => {
  try {
    if (!q) {
      return reply(`
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🚫  𝐗  𝐒𝐂𝐀𝐍  𝐄𝐑𝐑𝐎𝐑  🚫
👑 ╚══════════  👑  ══════════╝ 👑

❌ *𝐈𝐍𝐕𝐀𝐋𝐈𝐃  𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄*
┃ ◈ 🛡️ *𝐒𝐭𝐚𝐭𝐮𝐬:* User Not Found
┃ ◈ 💡 *𝐇𝐢𝐧𝐭:* Provide a valid X/Twitter handle
┗━━━━━━━━━━━━━━━━━━━━━━━

📌 *𝐄𝐗𝐀𝐌𝐏𝐋𝐄  𝐂𝐎𝐌𝐌𝐀𝐍𝐃*
┏━━━━━━━━━━━━━━━━━━━━━━━
┃ 🐦 .xstalk elonmusk
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
    }

    // ⏳ reaction
    await conn.sendMessage(from, {
      react: { text: "⏳", key: m.key }
    });

    const apiUrl = `https://delirius-apiofc.vercel.app/tools/xstalk?username=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data || !data.status || !data.data) {
      return reply(`
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🛠️  𝐒𝐘𝐒𝐓𝐄𝐌  𝐀𝐋𝐄𝐑𝐓  🛠️
👑 ╚══════════  👑  ══════════╝ 👑

⚠️ *𝐅𝐄𝐓𝐂𝐇  𝐅𝐀𝐈𝐋𝐄𝐃*
┃ ◈ 🛡️ *𝐄𝐫𝐫𝐨𝐫:* Connection Timeout
┃ ◈ 🐦 *𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦:* Twitter/X Server
┃ ◈ ⏳ *𝐒𝐭𝐚𝐭𝐮𝐬:* Retrying in a moment...
┗━━━━━━━━━━━━━━━━━━━━━━━

💡 *𝐖𝐇𝐀𝐓  𝐓𝐎  𝐃𝐎?*
┏━━━━━━━━━━━━━━━━━━━━━━━
┃ Please wait a few seconds and 
┃ try the command again, King!
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
    }

    const user = data.data;
    const verified = user.verified ? "Yes ✅" : "No ❌";

    const caption = `
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🐦  𝐗  𝐏𝐑𝐎𝐅𝐈𝐋𝐄  𝐒𝐂𝐀𝐍  🐦
👑 ╚══════════  👑  ══════════╝ 👑

👤 *𝐔𝐒𝐄𝐑  𝐃𝐄𝐓𝐀𝐈𝐋𝐒*
┃ ◈ 📝 *Name:* ${user.name}
┃ ◈ 🆔 *User:* @${user.username}
┃ ◈ ✔️ *Verified:* ${verified}
┃ ◈ 📅 *Joined:* ${user.created}
┗━━━━━━━━━━━━━━━━━━━━━━━

📊 *𝐄𝐍𝐆𝐀𝐆𝐄𝐌𝐄𝐍𝐓  𝐒𝐓𝐀𝐓𝐒*
┃ ◈ 👥 *Followers:* ${user.followers_count.toLocaleString()}
┃ ◈ 👤 *Following:* ${user.following_count.toLocaleString()}
┃ ◈ 📜 *Total Tweets:* ${user.tweets_count.toLocaleString()}
┗━━━━━━━━━━━━━━━━━━━━━━━

🌐 *𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋  𝐋𝐈𝐍𝐊*
┃ ◈ 🔗 ${user.url}
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
`;

    await conn.sendMessage(from, {
      image: { url: user.avatar },
      caption
    }, { quoted: m });

  } catch (error) {
    console.error("XSTALK ERROR:", error);
    reply(`
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🚨  𝐒𝐓𝐀𝐋𝐊  𝐄𝐑𝐑𝐎𝐑  🚨
👑 ╚══════════  👑  ══════════╝ 👑

❌ *𝐐𝐔𝐄𝐑𝐘  𝐈𝐍𝐓𝐄𝐑𝐑𝐔𝐏𝐓𝐄𝐃*
┃ ◈ 🛡️ *𝐄𝐫𝐫𝐨𝐫:* Data Stream Broken
┃ ◈ 🐦 *𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦:* Twitter/X API
┃ ◈ ⏳ *𝐒𝐭𝐚𝐭𝐮𝐬:* Connection Failed
┗━━━━━━━━━━━━━━━━━━━━━━━

🛰️ *𝐒𝐘𝐒𝐓𝐄𝐌  𝐋𝐎𝐆*
┏━━━━━━━━━━━━━━━━━━━━━━━
┃ High traffic or server rate limit.
┃ Please try again after a few 
┃ moments, King! 🛡️
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
  }
});

