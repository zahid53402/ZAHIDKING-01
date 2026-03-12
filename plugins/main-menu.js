const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path'); 
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: ["allmenu","fullmenu"],
    use: '.menu2',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
👑 ╔══════════  👑  ══════════╗ 👑
          ✨ 𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆 ✨
         🛡️ 𝐓𝐇𝐄 𝐔𝐋𝐓𝐈𝐌𝐀𝐓𝐄 🛡️
👑 ╚══════════  👑  ══════════╝ 👑

🏰 *𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎*
┃ 👑 *Owner:* ${config.OWNER_NAME}
┃ ⚙️ *Prefix:* [ ${config.PREFIX} ]
┃ 🌐 *Platform:* Heroku
┃ 📦 *Version:* 4.0.0
┃ ⚡ *Runtime:* ${runtime(process.uptime())}
┗━━━━━━━━━━━━━━━━━━━━━━━

📥 *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔*
┃ ◈ 🟦 facebook
┃ ◈ 📁 mediafire
┃ ◈ 🎵 tiktok
┃ ◈ 🐦 twitter
┃ ◈ 📷 insta
┃ ◈ 📦 apk
┃ ◈ 🖼️ img
┃ ◈ ▶️ tt2
┃ ◈ 📌 pins
┃ ◈ 🔄 apk2
┃ ◈ 🔵 fb2
┃ ◈ 📍 pinterest
┃ ◈ 🎶 spotify
┃ ◈ 🎧 play
┃ ◈ 🎧 play2
┃ ◈ 🔉 audio
┃ ◈ 🎬 video
┃ ◈ 📹 video2
┃ ◈ 🎵 ytmp3
┃ ◈ 📹 ytmp4
┃ ◈ 🎶 song
┃ ◈ 🎬 darama
┃ ◈ ☁️ gdrive
┃ ◈ 🌐 ssweb
┃ ◈ 🎵 tiks
┗━━━━━━━━━━━━━━━━━━━━━━━

👥 *𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔*
┃ ◈ 🔗 grouplink
┃ ◈ 🚪 kickall
┃ ◈ 🚷 kickall2
┃ ◈ 🚫 kickall3
┃ ◈ ➕ add
┃ ◈ ➖ remove
┃ ◈ 👢 kick
┃ ◈ ⬆️ promote
┃ ◈ ⬇️ demote
┃ ◈ 🚮 dismiss
┃ ◈ 🔄 revoke
┃ ◈ 👋 setgoodbye
┃ ◈ 🎉 setwelcome
┃ ◈ 🗑️ delete
┃ ◈ 🖼️ getpic
┃ ◈ ℹ️ ginfo
┃ ◈ ⏳ disappear on
┃ ◈ ⏳ disappear off
┃ ◈ ⏳ disappear 7D,24H
┃ ◈ 📝 allreq
┃ ◈ ✏️ updategname
┃ ◈ 📝 updategdesc
┃ ◈ 📩 joinrequests
┃ ◈ 📨 senddm
┃ ◈ 🏃 nikal
┃ ◈ 🔇 mute
┃ ◈ 🔊 unmute
┃ ◈ 🔒 lockgc
┃ ◈ 🔓 unlockgc
┃ ◈ 📩 invite
┃ ◈ #️⃣ tag
┃ ◈ 🏷️ hidetag
┃ ◈ @️⃣ tagall
┃ ◈ 👔 tagadmins
┗━━━━━━━━━━━━━━━━━━━━━━━

🎭 *𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍𝐒 𝐌𝐄𝐍𝐔*
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


👑 *𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔*
┃ ◈ 👑 owner
┃ ◈ 📜 menu
┃ ◈ 📜 menu2
┃ ◈ 📊 vv
┃ ◈ 📋 listcmd
┃ ◈ 📚 allmenu
┃ ◈ 📦 repo
┃ ◈ 🚫 block
┃ ◈ ✅ unblock
┃ ◈ 🖼️ fullpp
┃ ◈ 🖼️ setpp
┃ ◈ 🔄 restart
┃ ◈ ⏹️ shutdown
┃ ◈ 🔄 updatecmd
┃ ◈ 💚 alive
┃ ◈ 🏓 ping
┃ ◈ 🆔 gjid
┃ ◈ 🆔 jid
┗━━━​━━━━━━━━━━━━━━━━━━━━


🎨 𝐋𝐎𝐆𝐎  𝐌𝐀𝐊𝐄𝐑
​┃ ◈ .logo neonlight
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
​🧠 Example: .logo neonlight Zahid


🎉 *𝐅𝐔𝐍 𝐌𝐄𝐍𝐔*
┃ ◈ 🤪 shapar
┃ ◈ ⭐ rate
┃ ◈ 🤬 insult
┃ ◈ 💻 hack
┃ ◈ 💘 ship
┃ ◈ 🎭 character
┃ ◈ 💌 pickup
┃ ◈ 😆 joke
┃ ◈ ❤️ hrt
┃ ◈ 😊 hpy
┃ ◈ 😔 syd
┃ ◈ 😠 anger
┃ ◈ 😳 shy
┃ ◈ 💋 kiss
┃ ◈ 🧐 mon
┃ ◈ 😕 cunfuzed
┃ ◈ ✋ hand
┃ ◈ 🏃 nikal
┃ ◈ 🤲 hold
┃ ◈ 🤗 hug
┃ ◈ 🎵 hifi
┃ ◈ 👉 poke
┗━━━━━━━━━━━━━━━━━━━━━━━

🔄 *𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔*
┃ ◈ 🏷️ sticker
┃ ◈ 🏷️ sticker2
┃ ◈ 😀 emojimix
┃ ◈ ✨ fancy
┃ ◈ 🖼️ take
┃ ◈ 🎵 tomp3
┃ ◈ 🗣️ tts
┃ ◈ 🌐 trt
┃ ◈ 🔢 base64
┃ ◈ 🔠 unbase64
┃ ◈ 010 binary
┃ ◈ 🔤 dbinary
┃ ◈ 🔗 tinyurl
┃ ◈ 🌐 urldecode
┃ ◈ 🌐 urlencode
┃ ◈ 🌐 url
┃ ◈ 🔁 repeat
┃ ◈ ❓ ask
┃ ◈ 📖 readmore
┗━━━━━━━━━━━━━━━━━━━━━━━

🤖 *𝐀𝐈 𝐌𝐄𝐍𝐔*
┃ ◈ 🧠 ai
┃ ◈ 🤖 gpt3
┃ ◈ 🤖 gpt2
┃ ◈ 🤖 gptmini
┃ ◈ 🤖 gpt
┃ ◈ 🔵 meta
┃ ◈ 📦 blackbox
┃ ◈ 🌈 luma
┃ ◈ 🎧 dj
┃ ◈ 👑 DARKZONE 
┃ ◈ 🤵 IRFAN 
┃ ◈ 🧠 gpt4
┃ ◈ 🔍 bing
┃ ◈ 🎨 imagine
┃ ◈ 🖼️ imagine2
┃ ◈ 🤖 copilot
┗━━━━━━━━━━━━━━━━━━━━━━━

🎎 *𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔*
┃ ◈ 🤬 fack
┃ ◈ ✅ truth
┃ ◈ 😨 dare
┃ ◈ 🐶 dog
┃ ◈ 🐺 awoo
┃ ◈ 👧 garl
┃ ◈ 👰 waifu
┃ ◈ 🐱 neko
┃ ◈ 🧙 megnumin
┃ ◈ 👗 maid
┃ ◈ 👧 loli
┃ ◈ 🎎 animegirl
┃ ◈ 🎬 anime1
┃ ◈ 🎬 anime2
┃ ◈ 🎬 anime3
┃ ◈ 🎬 anime4
┃ ◈ 🎬 anime5
┃ ◈ 📰 animenews
┃ ◈ 🦊 foxgirl
┃ ◈ 🍥 naruto
┗━━━━━━━━━━━━━━━━━━━━━━━

ℹ️ *𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔*
┃ ◈ 🕒 timenow
┃ ◈ 📅 date
┃ ◈ 🔢 count
┃ ◈ 🧮 calculate
┃ ◈ 🔢 countx
┃ ◈ 🎲 flip
┃ ◈ 🪙 coinflip
┃ ◈ 🎨 rcolor
┃ ◈ 🎲 roll
┃ ◈ ℹ️ fact
┃ ◈ 💻 cpp
┃ ◈ 🎲 rw
┃ ◈ 💑 pair
┃ ◈ ✨ fancy
┃ ◈ 🎨 logo
┃ ◈ 📖 define
┃ ◈ 📰 news
┃ ◈ 🎬 movie
┃ ◈ ☀️ weather
┃ ◈ 📦 srepo
┃ ◈ 🤬 insult
┃ ◈ 💾 save
┃ ◈ 🌐 wikipedia
┃ ◈ 🔑 gpass
┃ ◈ 👤 githubstalk
┃ ◈ 🔍 yts
┃ ◈ 📹 ytv
┗━━━━━━━━━━━━━━━━━━━━━━━

   🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
   🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️


> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/TxSCwf8B/temp.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363424512151830@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
// share local audio 

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: false,
}, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
