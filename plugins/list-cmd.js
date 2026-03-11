const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "list",
    alias: ["listcmd","commands"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `👑 ╔══════════  🔱  ══════════╗ 👑
        ✨ 𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆 𝐄𝐌𝐏𝐈𝐑𝐄 ✨
👑 ╚══════════  🔱  ══════════╝ 👑

📥 ╔════〔 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .play  ┃ ❕ YT Audio
┃▸ 👑 .song  ┃ ❕ YT Song
┃▸ 👑 .apk   ┃ ❕ PlayStore
┃▸ 👑 .video ┃ ❕ YT Video
┃▸ 👑 .fb    ┃ ❕ Facebook
┃▸ 👑 .tk    ┃ ❕ TikTok
┃▸ 👑 .ig    ┃ ❕ Instagram
┃▸ 👑 .gdrive┃ ❕ G-Drive
┃▸ 👑 .img   ┃ ❕ Images
┃▸ 👑 .darama┃ ❕ Full Ep
┃▸ 👑 .mfire ┃ ❕ MediaFire
╚════════════════════════════╝

🎭 ╔════〔 𝐀𝐍𝐈𝐌𝐄 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .yts      ┃ ❕ YT Search
┃▸ 👑 .king     ┃ ❕ King Bio
┃▸ 👑 .dog      ┃ ❕ Dog Pics
┃▸ 👑 .anime    ┃ ❕ Anime Pics
┃▸ 👑 .animegirl┃ ❕ Girl Pics
╚═══════════════════════════╝

ℹ️ ╔════〔 𝐈𝐍𝐅𝐎 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .alive  ┃ ❕ Status
┃▸ 👑 .ping   ┃ ❕ Speed
┃▸ 👑 .menu   ┃ ❕ Main Menu
┃▸ 👑 .ai     ┃ ❕ AI Bot
┃▸ 👑 .system ┃ ❕ Sys Check
┃▸ 👑 .owner  ┃ ❕ Owner Info
┃▸ 👑 .status ┃ ❕ Runtime
┃▸ 👑 .script ┃ ❕ Repo Link
╚══════════════════════════╝

🧩 ╔════〔 𝐎𝐓𝐇𝐄𝐑 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .joke    ┃ ❕ Random Joke
┃▸ 👑 .fact    ┃ ❕ Random Fact
┃▸ 👑 .gpass   ┃ ❕ Strong Pass
┃▸ 👑 .hack    ┃ ❕ Prank Tool
┃▸ 👑 .define  ┃ ❕ Dictionary
╚══════════════════════════╝

🛡️ ╔════〔 𝐆𝐑𝐎𝐔𝐏 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .mute    ┃ 👑 .unmute
┃▸ 👑 .kick    ┃ 👑 .add
┃▸ 👑 .promote ┃ 👑 .demote
┃▸ 👑 .tagall  ┃ 👑 .hidetag
┃▸ 👑 .lockgc  ┃ 👑 .unlockgc
┃▸ 👑 .invite  ┃ 👑 .revoke
┃▸ 👑 .ginfo   ┃ 👑 .jid
╚══════════════════════════╝

👑 ╔════〔 𝐎𝐖𝐍𝐄𝐑 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .update   ┃ ❕ Bot Update
┃▸ 👑 .restart  ┃ ❕ Bot Reboot
┃▸ 👑 .settings ┃ ❕ Config
┃▸ 👑 .block    ┃ ❕ Block User
┃▸ 👑 .setpp    ┃ ❕ Update DP
┃▸ 👑 .shutdown ┃ ❕ Logout
╚══════════════════════════╝

✨ ╔════〔 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐂𝐌𝐃 〕════╗
┃▸ 👑 .sticker ┃ ❕ Photo > Sticker
┃▸ 👑 .tts     ┃ ❕ Text > Voice
┃▸ 👑 .trt     ┃ ❕ Translator
╚═══════════════════════════╝

    🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/TxSCwf8B/temp.jpg` },
                caption: dec,
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
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/5kkxwz.mpeg' },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

