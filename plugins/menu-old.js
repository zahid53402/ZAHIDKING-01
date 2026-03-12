const config = require('../config');
const { cmd } = require('../command');
const { runtime } = require('../lib/functions');
const os = require("os");
const path = require('path');
const axios = require('axios');
const fs = require('fs');

cmd({
    pattern: "menu3",
    desc: "menu the bot",
    category: "menu3",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from, sender, pushname, reply }) => {
    try {
        const dec = `
👑 ╔══════════  👑  ══════════╗ 👑
          ✨ 𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆 ✨
         🛡️ 𝐎𝐋𝐃  𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️
👑 ╚══════════  👑  ══════════╝ 👑

🏰 *𝐄𝐌𝐏𝐈𝐑𝐄  𝐒𝐓𝐀𝐓𝐒*
┃ 👑 *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Mode:* ${config.MODE}
┃ 📡 *Platform:* Heroku
┃ 🧠 *Type:* NodeJs (Multi Device)
┃ ⌨️ *Prefix:* ${config.PREFIX}
┃ 🧾 *Version:* 3.0.0 Beta
┗━━━━━━━━━━━━━━━━━━━━━━━

📖 *𝐐𝐔𝐑𝐀𝐍  𝐌𝐄𝐍𝐔*
┃ 🕋 Prayertime
┃ 📖 Quranmenu
┗━━━━━━━━━━━━━━━━━━━━━━━

🤖 *𝐀𝐈  &  𝐀𝐍𝐈𝐌𝐄*
┃ 🧠 Aimenu
┃ 🎭 Animemenu
┃ 🎎 Animegirl
┗━━━━━━━━━━━━━━━━━━━━━━━

📥 *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃  𝐙𝐎𝐍𝐄*
┃ ⬇️ Dlmenu
┃ 📦 Repo
┃ 🌐 Url / G-Drive
┗━━━━━━━━━━━━━━━━━━━━━━━

👥 *𝐒𝐎𝐂𝐈𝐀𝐋  &  𝐆𝐑𝐎𝐔𝐏*
┃ 👥 Groupmenu
┃ 🎭 Reactions
┃ 🎉 Funmenu
┃ 😹 Reactions
┗━━━━━━━━━━━━━━━━━━━━━━━

🛠️ *𝐒𝐘𝐒𝐓𝐄𝐌  𝐓𝐎𝐎𝐋𝐒*
┃ 🏠 Mainmenu
┃ 👑 Ownermenu
┃ 🔁 Convertmenu
┃ 🖌️ Logo Maker
┃ 🧩 Othermenu
┃ ⚒️ Listcmd
┃ 📜 Allmenu
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️

> ${config.DESCRIPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: 'Zᴀʜɪᴅ Kɪɴɢ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send local audio from assets/menu.m4a

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: false,
}, { quoted: mek });

    } catch (e) {
        console.error(e);
        reply(`❌ Error:\n${e}`);
    }
});

cmd({
    pattern: "logo",
    alias: ["logomenu"],
    desc: "menu the bot",
    category: "menu",
    react: "🧃",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
👑 ╔══════════  👑  ══════════╗ 👑
          ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🎨 𝐋𝐎𝐆𝐎  𝐌𝐀𝐒𝐓𝐄𝐑 🎨
👑 ╚══════════  👑  ══════════╝ 👑

┃ ◈ .logo neonlight
┃ ◈ .logo blackpink
┃ ◈ .logo dragonsball
┃ ◈ .logo 3dcomic
┃ ◈ .logo america
┃ ◈ .logo naruto
┃ ◈ .logo sadgirl
┃ ◈ .logo clouds
┃ ◈ .logo futuristic
┃ ◈ .logo 3dpaper
┃ ◈ .logo eraser
┃ ◈ .logo sunset
┃ ◈ .logo leaf
┃ ◈ .logo galaxy
┃ ◈ .logo sans
┃ ◈ .logo boom
┃ ◈ .logo hacker
┃ ◈ .logo devilwings
┃ ◈ .logo nigeria
┃ ◈ .logo bulb
┃ ◈ .logo angelwings
┃ ◈ .logo zodiac
┃ ◈ .logo luxury
┃ ◈ .logo paint
┃ ◈ .logo frozen
┃ ◈ .logo castle
┃ ◈ .logo tatoo
┃ ◈ .logo valorant
┃ ◈ .logo bear
┃ ◈ .logo typography
┃ ◈ .logo birthday
┗━━━━━━━━━━━━━━━━━━━━━━━
🧠 Example: .logo neonlight Zahid

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
`;

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
                        newsletterName: "Zᴀʜɪᴅ Kɪɴɢ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

cmd({
    pattern: "reactions",
    desc: "Shows the reaction commands",
    category: "menu",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🎭 𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𝐙𝐎𝐍𝐄 🎭
👑 ╚══════════  👑  ══════════╝ 👑

✨ *𝐄𝐌𝐎𝐓𝐈𝐎𝐍𝐀𝐋  𝐄𝐗𝐏𝐑𝐄𝐒𝐒𝐈𝐎𝐍𝐒*
┃ ◈ 👊 bully @tag
┃ ◈ 🤗 cuddle @tag
┃ ◈ 😢 cry @tag
┃ ◈ 🤗 hug @tag
┃ ◈ 🐺 awoo @tag
┃ ◈ 💋 kiss @tag
┃ ◈ 👅 lick @tag
┃ ◈ 🖐️ pat @tag
┃ ◈ 😏 smug @tag
┃ ◈ 🔨 bonk @tag
┃ ◈ 🚀 yeet @tag
┃ ◈ 😊 blush @tag
┃ ◈ 😄 smile @tag
┃ ◈ 👋 wave @tag
┃ ◈ ✋ highfive @tag
┃ ◈ 🤝 handhold @tag
┃ ◈ 🍜 nom @tag
┃ ◈ 🦷 bite @tag
┃ ◈ 🤗 glomp @tag
┃ ◈ 👋 slap @tag
┃ ◈ 💀 kill @tag
┃ ◈ 😊 happy @tag
┃ ◈ 😉 wink @tag
┃ ◈ 👉 poke @tag
┃ ◈ 💃 dance @tag
┃ ◈ 😬 cringe
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
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
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         📥 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃  𝐇𝐔𝐁 📥
👑 ╚══════════  👑  ══════════╝ 👑

🌍 *𝐒𝐎𝐂𝐈𝐀𝐋  𝐌𝐄𝐃𝐈𝐀*
┃ ◈ 🟦 facebook / fb2
┃ ◈ 📷 insta / pins
┃ ◈ 🎵 tiktok / tiks / tt2
┃ ◈ 🐦 twitter
┃ ◈ 📍 pinterest
┗━━━━━━━━━━━━━━━━━━━━━━━

🎵 *𝐀𝐔𝐃𝐈𝐎  &  𝐌𝐔𝐒𝐈𝐂*
┃ ◈ 🎶 song / audio
┃ ◈ 🎧 play (1 to 10)
┃ ◈ 🎵 ytmp3 / spotify
┗━━━━━━━━━━━━━━━━━━━━━━━

🎬 *𝐕𝐈𝐃𝐄𝐎  &  𝐌𝐎𝐕𝐈𝐄𝐒*
┃ ◈ 📹 video (1 to 10)
┃ ◈ 📹 ytmp4
┃ ◈ 🎬 darama
┗━━━━━━━━━━━━━━━━━━━━━━━

📂 *𝐅𝐈𝐋𝐄𝐒  &  𝐓𝐎𝐎𝐋𝐒*
┃ ◈ 📦 apk / apk2
┃ ◈ 📁 mediafire
┃ ◈ ☁️ gdrive
┃ ◈ 🖼️ img
┃ ◈ 🌐 ssweb
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🛡️ 𝐆𝐑𝐎𝐔𝐏  𝐂𝐎𝐍𝐓𝐑𝐎𝐋 🛡️
👑 ╚══════════  👑  ══════════╝ 👑

⚔️ *𝐄𝐋𝐈𝐓𝐄  𝐌𝐀𝐍𝐀𝐆𝐄𝐌𝐄𝐍𝐓*
┃ ◈ ⬆️ promote / demote
┃ ◈ 🚮 dismiss / revoke
┃ ◈ 🔇 mute / unmute
┃ ◈ 🔒 lockgc / unlockgc
┃ ◈ ✏️ updategname
┃ ◈ 📝 updategdesc
┗━━━━━━━━━━━━━━━━━━━━━━━

🚫 *𝐄𝐍𝐅𝐎𝐑𝐂𝐄𝐌𝐄𝐍𝐓*
┃ ◈ 👢 kick / remove / nikal
┃ ◈ 🚪 kickall / kickall2 / 3
┃ ◈ 🗑️ delete (remove sms)
┗━━━━━━━━━━━━━━━━━━━━━━━

📢 *𝐀𝐍𝐍𝐎𝐔𝐍𝐂𝐄𝐌𝐄𝐍𝐓𝐒*
┃ ◈ @️⃣ tagall / tagadmins
┃ ◈ #️⃣ tag / hidetag
┃ ◈ 👋 setwelcome / setgoodbye
┗━━━━━━━━━━━━━━━━━━━━━━━

📥 *𝐀𝐂𝐂𝐄𝐒𝐒  &  𝐈𝐍𝐅𝐎*
┃ ◈ 🔗 grouplink / invite
┃ ◈ 📩 joinrequests / allreq
┃ ◈ ℹ️ ginfo / getpic
┃ ◈ 📨 senddm
┗━━━━━━━━━━━━━━━━━━━━━━━

⏳ *𝐒𝐘𝐒𝐓𝐄𝐌  𝐒𝐄𝐓𝐓𝐈𝐍𝐆𝐒*
┃ ◈ ⏳ disappear (on/off)
┃ ◈ ⏳ disappear 7D, 24H
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🎮  𝐅𝐔𝐍  &  𝐆𝐀𝐌𝐄𝐒  🎮
👑 ╚══════════  👑  ══════════╝ 👑

🤪 *𝐌𝐀𝐒𝐓𝐈  𝐌𝐀𝐙𝐀𝐐*
┃ ◈ 🤪 shapar
┃ ◈ ⭐ rate
┃ ◈ 🤬 insult
┃ ◈ 💻 hack (prank)
┃ ◈ 💘 ship
┃ ◈ 🎭 character
┃ ◈ 💌 pickup 
┃ ◈ 😆 joke
┗━━━━━━━━━━━━━━━━━━━━━━━

❤️ *𝐄𝐌𝐎𝐓𝐈𝐎𝐍𝐒*
┃ ◈ ❤️ hrt / hpy
┃ ◈ 😔 syd / anger
┃ ◈ 😳 shy / mon
┃ ◈ 😕 cunfuzed
┗━━━━━━━━━━━━━━━━━━━━━━━

🤝 *𝐈𝐍𝐓𝐄𝐑𝐀𝐂𝐓𝐈𝐎𝐍𝐒*
┃ ◈ 💋 kiss / hug
┃ ◈ 🤲 hold / hand
┃ ◈ 🖐️ hifi / poke
┃ ◈ 🖼️ setpp
┃ ◈ 🏃 nikal
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘ᴇʀᴇᴅ 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• timenow
┃◈┃• date
┃◈┃• count
┃◈┃• calculate
┃◈┃• countx
┃◈┃• flip
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• pair
┃◈┃• pair2
┃◈┃• pair3
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• insult
┃◈┃• save
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈┃• yts
┃◈┃• ytv
┃◈└───────────┈⊷
╰──────────────┈⊷
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🧩  𝐎𝐓𝐇𝐄𝐑  𝐓𝐎𝐎𝐋𝐒  🧩
👑 ╚══════════  👑  ══════════╝ 👑

⏰ *𝐓𝐈𝐌𝐄  &  𝐃𝐀𝐓𝐄*
┃ ◈ 🕒 timenow
┃ ◈ 📅 date
┃ ◈ 🔢 count / countx
┗━━━━━━━━━━━━━━━━━━━━━━━

🎲 *𝐆𝐀𝐌𝐄𝐒  &  𝐋𝐔𝐂𝐊*
┃ ◈ 🎲 roll / rw
┃ ◈ 🪙 flip / coinflip
┃ ◈ 🎨 rcolor
┃ ◈ 💑 pair / pair2 / pair3
┗━━━━━━━━━━━━━━━━━━━━━━━

🔍 *𝐒𝐄𝐀𝐑𝐂𝐇  &  𝐈𝐍𝐅𝐎*
┃ ◈ 🌐 wikipedia
┃ ◈ 📖 define
┃ ◈ 📰 news
┃ ◈ 🎬 movie
┃ ◈ ☀️ weather
┃ ◈ 👤 githubstalk
┃ ◈ 🔍 yts / ytv
┗━━━━━━━━━━━━━━━━━━━━━━━

✨ *𝐄𝐗𝐓𝐑𝐀  𝐒𝐓𝐔𝐅𝐅*
┃ ◈ 🧮 calculate
┃ ◈ ℹ️ fact
┃ ◈ 💻 cpp
┃ ◈ ✨ fancy
┃ ◈ 🎨 logo <text>
┃ ◈ 💾 save
┃ ◈ 🔑 gpass
┃ ◈ 📦 srepo
┃ ◈ 🤬 insult
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🔄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓  𝐙𝐎𝐍𝐄 🔄
👑 ╚══════════  👑  ══════════╝ 👑

🎨 *𝐌𝐄𝐃𝐈𝐀  𝐌𝐀𝐆𝐈𝐂*
┃ ◈ 🏷️ sticker / sticker2
┃ ◈ 😀 emojimix
┃ ◈ 🖼️ take (metadata)
┃ ◈ 🎵 tomp3 / tts
┗━━━━━━━━━━━━━━━━━━━━━━━

✍️ *𝐓𝐄𝐗𝐓  &  𝐒𝐓𝐘𝐋𝐄*
┃ ◈ ✨ fancy
┃ ◈ 🌐 trt (translate)
┃ ◈ 🔁 repeat
┃ ◈ ❓ ask (AI)
┃ ◈ 📖 readmore
┗━━━━━━━━━━━━━━━━━━━━━━━

🔐 *𝐄𝐍𝐂𝐎𝐃𝐄  &  𝐋𝐈𝐍𝐊𝐒*
┃ ◈ 🔢 base64 / unbase64
┃ ◈ 🔢 binary / dbinary
┃ ◈ 🔗 tinyurl / url
┃ ◈ 🌐 urlencode / urldecode
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆ᴅ 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
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

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🎎  𝐀𝐍𝐈𝐌𝐄  𝐖𝐎𝐑𝐋𝐃  🎎
👑 ╚══════════  👑  ══════════╝ 👑

🌸 *𝐀𝐍𝐈𝐌𝐄  𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑𝐒*
┃ ◈ 👰 waifu
┃ ◈ 🐱 neko / foxgirl
┃ ◈ 👗 maid / loli
┃ ◈ 👧 garl / animegirl (1-5)
┃ ◈ 🧙 megnumin
┃ ◈ 🍥 naruto
┗━━━━━━━━━━━━━━━━━━━━━━━

🎬 *𝐀𝐍𝐈𝐌𝐄  𝐌𝐄𝐃𝐈𝐀*
┃ ◈ 🎬 anime (1 to 5)
┃ ◈ 📰 animenews
┃ ◈ 🐺 awoo / dog
┃ ◈ 🤬 fack
┗━━━━━━━━━━━━━━━━━━━━━━━

💎 *𝐄𝐗𝐂𝐋𝐔𝐒𝐈𝐕𝐄  𝐒𝐄𝐋𝐄𝐂𝐓𝐈𝐎𝐍*
┃ ◈ 🎎 animegirl1
┃ ◈ 🎎 animegirl2
┃ ◈ 🎎 animegirl3
┃ ◈ 🎎 animegirl4
┃ ◈ 🎎 animegirl5
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
    
