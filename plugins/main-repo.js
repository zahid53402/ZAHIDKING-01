const fs = require('fs');
const path = require('path');
const { cmd } = require('../command');

// Safe fetch for all Node versions
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch information about bot GitHub repository",
    react: "🩷",
    category: "info",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {

    const githubRepoURL = 'https://github.com';

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Invalid GitHub repository URL");

        const username = match[1];
        const repoName = match[2];

        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        if (!response.ok) throw new Error(`GitHub API Error: ${response.status}`);

        const repoData = await response.json();

        const caption = `
👑 ╔══════════  👑  ══════════╗ 👑
       ✨ 𝐑𝐎𝐘𝐀𝐋  𝐀𝐑𝐂𝐇𝐈𝐕𝐄𝐒 ✨
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🏰 *KING'S SOURCE CODE*
   ┃ 
   ┃ 🤖 *𝐁𝐨𝐭 𝐍𝐚𝐦𝐞:* ${repoData.name}
   ┃ 👑 *𝐎𝐰𝐧𝐞𝐫:* ${repoData.owner.login}
   ┃ ⭐ *𝐒𝐭𝐚𝐫𝐬:* ${repoData.stargazers_count}
   ┃ 🍴 *𝐅𝐨𝐫𝐤𝐬:* ${repoData.forks_count}
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 📜 *DESCRIPTION:*
   ┃ ${repoData.description || "No description found in the royal library."}
   ┃
   ┃ 🔗 *𝐆𝐢𝐭𝐇𝐮𝐛 𝐋𝐢𝐧𝐤:*
   ┃ ${repoData.html_url}
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

🛡️ ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *𝐒𝐭𝐚𝐫 & 𝐅𝐨𝐫𝐤 𝐓𝐡𝐞 𝐄𝐦𝐩𝐢𝐫𝐞* ┃ Support The King's Creation!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`;

        await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/TxSCwf8B/temp.jpg' },
            caption,
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

        // Optional voice
        const audioPath = path.join(__dirname, '../assets/menu.m4a');
        if (fs.existsSync(audioPath)) {
            await conn.sendMessage(from, {
                audio: fs.readFileSync(audioPath),
                mimetype: 'audio/mp4',
                ptt: false
            }, { quoted: mek });
        }

    } catch (err) {
        console.error("REPO ERROR:", err);
        reply(`
👑 ╔══════════  👑  ══════════╗ 👑
       🌑  𝐀𝐑𝐂𝐇𝐈𝐕𝐄 𝐋𝐎𝐂𝐊𝐄𝐃  🌑
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *KING'S DATA BARRIER*
   ┃ 
   ┃ ❌ *𝐄𝐫𝐫𝐨𝐫:* Repo Fetch Failed
   ┃ 🛡️ *𝐒𝐭𝐚𝐭𝐮𝐬:* Connection Denied
   ┃ ⏳ *𝐀𝐜𝐭𝐢𝐨𝐧:* Try Again Later
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Sultanat-e-Zahid News...*
   ┃ 👑 King Is Investigating The Issue!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
    }
});

