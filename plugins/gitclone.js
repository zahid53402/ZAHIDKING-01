const { cmd } = require("../command");
const fetch = require("node-fetch");

cmd({
  pattern: "gitclone",
  alias: ["git"],
  desc: "Download GitHub repository as zip",
  react: "📦",
  category: "downloader",
  filename: __filename
}, async (conn, m, store, { from, args, reply }) => {
  try {
    if (!args[0]) {
      return reply(`
👑 ╔════════  🔱  ════════╗ 👑
       ⚠️  𝐊𝐈𝐍𝐆'𝐒 𝐄𝐑𝐑𝐎𝐑  ⚠️
👑 ╚════════  🔱  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🛑 *SYSTEM HALTED*
   ┃ 
   ┃ ❌ *GitHub Link Missing!*
   ┃ 🛡️ *Status:* Entry Denied
   ┃
   ┃ 📝 *CORRECT METHOD:*
   ┃ .gitclone https://github.com/user/repo
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Follow The King's Rule*
   ┃ 🔗 Provide A Valid Repository
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
    }

    if (!/github\.com\/.+\/.+/.test(args[0])) {
      return reply("❌ Invalid GitHub repository link");
    }

    const match = args[0].match(/github\.com\/([^\/]+)\/([^\/]+)/i);
    if (!match) return reply("❌ Unable to parse repository link");

    const username = match[1];
    const repo = match[2].replace(".git", "");
    const zipUrl = `https://api.github.com/repos/${username}/${repo}/zipball`;

    // Check repo exists
    const head = await fetch(zipUrl, { method: "HEAD" });
    if (!head.ok) return reply("❌ Repository not found");

    const fileName = `${repo}.zip`;

    await reply(`
👑 ╔════════  🔱  ════════╗ 👑
       ✨ 𝐊𝐈𝐍𝐆'𝐒 𝐀𝐂𝐂𝐄𝐒𝐒 ✨
👑 ╚════════  🔱  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🏰 *DOMINATING GITHUB*
   ┃ 
   ┃ 📦 *Repository:* ${username}/${repo}
   ┃ ⚡ *Status:* Downloading ZIP...
   ┃ 🛡️ *Security:* King Protected
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⏳ *Hukm Ki Tameel Ho Rahi Hai...*
   ┃ 🚀 Progressing At Maximum Power
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`);

    await conn.sendMessage(from, {
      document: { url: zipUrl },
      fileName: fileName,
      mimetype: "application/zip",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363424512151830@newsletter",
          newsletterName: "Zᴀʜɪᴅ Kɪɴɢ",
          serverMessageId: 143
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error("GITCLONE ERROR:", err);
    reply(`
👑 ╔════════  🔱  ════════╗ 👑
       🌑  𝐒𝐘𝐒𝐓𝐄𝐌 𝐏𝐀𝐔𝐒𝐄𝐃  🌑
👑 ╚════════  🔱  ════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *KING'S COMMAND HALTED*
   ┃ 
   ┃ ❌ *Error:* GitClone Failed
   ┃ ⏳ *Status:* System Cool-down
   ┃ 🛡️ *Action:* Try Again Later
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Sabr Rakhein...*
   ┃ 👑 King Is Sorting Out The Glitch!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
  }
});

