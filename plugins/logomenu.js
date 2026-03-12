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

let dec = `╭━━━〔 *👑 KING LOGO MENU* 〕━━━┈⊷
┃★╭──────────────
┃★│ 🎨 *Popular Logos*
┃★│ • .logo comic [text]
┃★│ • .logo dragon [text]
┃★│ • .logo naruto [text]
┃★│ • .logo thor [text]
┃★│ • .logo america [text]
┃★╰──────────────
┃★╭──────────────
┃★│ ✨ *Glow Logos*
┃★│ • .logo neon [text]
┃★│ • .logo paper [text]
┃★│ • .logo galaxy [text]
┃★│ • .logo glitch [text]
┃★╰──────────────
┃★╭──────────────
┃★│ 🌿 *Nature Logos*
┃★│ • .logo cloud [text]
┃★│ • .logo sand [text]
┃★│ • .logo fog [text]
┃★│ • .logo greenbrush [text]
┃★╰──────────────
┃★╭──────────────
┃★│ 🪵 *Material Logos*
┃★│ • .logo gold [text]
┃★│ • .logo silver [text]
┃★│ • .logo wood [text]
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> 🧠 Example :
> .logo neon Zahid
> .logo comic King

> 👑 Powered By *Zᴀʜɪᴅ Kɪɴɢ*
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
