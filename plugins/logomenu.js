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

let dec = `👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🎨  𝐋𝐎𝐆𝐎  𝐌𝐀𝐊𝐄𝐑  🎨
👑 ╚══════════  👑  ══════════╝ 👑

💡 *𝐔𝐬𝐚𝐠𝐞:* .<command> <text>
📌 *𝐄𝐱𝐚𝐦𝐩𝐥𝐞:* .neon Zahid

🔥 *𝐄𝐋𝐄𝐌𝐄𝐍𝐓𝐀𝐋  𝐒𝐓𝐘𝐋𝐄𝐒*
┃ ◈ fire, thunder, ice, lava, 
┃ ◈ storm, wind, snow, sun,
┃ ◈ moon, ocean, river, volcano,
┃ ◈ inferno, flame, burn, freeze
┗━━━━━━━━━━━━━━━━━━━━━━━

💎 *𝐏𝐑𝐄𝐌𝐈𝐔𝐌  𝐌𝐄𝐓𝐀𝐋𝐒*
┃ ◈ gold, silver, metal, steel,
┃ ◈ iron, chrome, diamond, ruby,
┃ ◈ crystal, emerald, sapphire,
┃ ◈ pearl, obsidian, 3dmetal
┗━━━━━━━━━━━━━━━━━━━━━━━

🚀 *𝐒𝐂𝐈-𝐅𝐈  &  𝐓𝐄𝐂𝐇*
┃ ◈ neon, glitch, matrix, cyber,
┃ ◈ digital, binary, code, tech,
┃ ◈ ai, robot, laser, energy,
┃ ◈ cyberpunk, future, spacecraft
┗━━━━━━━━━━━━━━━━━━━━━━━

🌌 *𝐒𝐏𝐀𝐂𝐄  &  𝐍𝐀𝐓𝐔𝐑𝐄*
┃ ◈ galaxy, space, cloud, sky,
┃ ◈ star, planet, meteor, comet,
┃ ◈ leaf, grass, sand, forest,
┃ ◈ jungle, desert, mountain, island
┗━━━━━━━━━━━━━━━━━━━━━━━

🎭 *𝐀𝐑𝐓  &  𝐅𝐀𝐍𝐓𝐀𝐒𝐘*
┃ ◈ dragon, magic, fantasy, anime,
┃ ◈ manga, ninja, samurai, ghost,
┃ ◈ horror, blood, sketch, paint,
┃ ◈ ink, graffiti, street, comic,
┃ ◈ cartoon, 3d, 3dtext, pixel
┗━━━━━━━━━━━━━━━━━━━━━━━

🧱 *𝐌𝐀𝐓𝐄𝐑𝐈𝐀𝐋  𝐒𝐓𝐘𝐋𝐄𝐒*
┃ ◈ stone, rock, paper, wood,
┃ ◈ brick, glass, mirror, retro,
┃ ◈ gaming, rainbow, light, dark,
┃ ◈ shadow, electric, mechanic
┗━━━━━━━━━━━━━━━━━━━━━━━

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
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
