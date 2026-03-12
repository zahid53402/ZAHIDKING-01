const config = require('../config')
const { cmd } = require('../command')
const path = require('path')
const fs = require('fs')

cmd({
pattern: "logomenu",
desc: "logo menu",
category: "logo",
react: "🎨",
filename: __filename
},

async (conn, mek, m, { from, reply }) => {

try {

let dec = `🎨 *𝐋𝐎𝐆𝐎 𝐌𝐀𝐊𝐄𝐑*
┃ ◈ 💡 neonlight
┃ ◈ 🎀 blackpink
┃ ◈  dragonsball
┃ ◈ 🎭 3dcomic
┃ ◈ 🇺🇸 america
┃ ◈ 🍥 naruto
┃ ◈ 😢 sadgirl
┃ ◈ ☁️ clouds
┃ ◈ 🚀 futuristic
┃ ◈ 📜 3dpaper
┃ ◈ ✏️ eraser
┃ ◈ 🌇 sunset
┃ ◈ 🍃 leaf
┃ ◈ 🌌 galaxy
┃ ◈ 💀 sans
┃ ◈ 💥 boom
┃ ◈ 💻 hacker
┃ ◈ 😈 devilwings
┃ ◈ 🇳🇬 nigeria
┃ ◈ 💡 bulb
┃ ◈ 👼 angelwings
┃ ◈ ♈ zodiac
┃ ◈ 💎 luxury
┃ ◈ 🎨 paint
┃ ◈ ❄️ frozen
┃ ◈ 🏰 castle
┃ ◈ 🖋️ tatoo
┃ ◈ 🔫 valorant
┃ ◈ 🐻 bear
┃ ◈ 🔠 typography
┃ ◈ 🎂 birthday
┗━━━━━━━━━━━━━━━━━━━━━━━

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝙕𝘼𝙃𝙄𝘿 𝙆𝙄𝙉𝙂* ❣️
> ${config.DESCRIPTION}`

await conn.sendMessage(
from,
{
image:{ url: config.MENU_IMAGE_URL || "https://i.ibb.co/TxSCwf8B/temp.jpg" },
caption: dec,
contextInfo:{
mentionedJid:[m.sender],
forwardingScore:999,
isForwarded:true,
forwardedNewsletterMessageInfo:{
newsletterJid:"120363424512151830@newsletter",
newsletterName:"Zᴀʜɪᴅ Kɪɴɢ",
serverMessageId:143
}
}
},
{ quoted: mek }
)


// audio send

const audioPath = path.join(__dirname, '../assets/menu.m4a')

if(fs.existsSync(audioPath)){

await conn.sendMessage(from,{
audio: fs.readFileSync(audioPath),
mimetype: "audio/mp4",
ptt: false
},{ quoted: mek })

}

}catch(e){

console.log(e)
reply("❌ Menu error")

}

})
