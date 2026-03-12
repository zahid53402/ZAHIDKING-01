const { cmd } = require('../command')
const mumaker = require('mumaker')

const logos = {

comic: {
url: "https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html",
type: "ephoto"
},

dragon: {
url: "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
type: "ephoto"
},

naruto: {
url: "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
type: "ephoto"
},

neon: {
url: "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
type: "ephoto"
},

paper: {
url: "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html",
type: "ephoto"
},

clouds: {
url: "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html",
type: "ephoto"
},

sand: {
url: "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html",
type: "ephoto"
},

fog: {
url: "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
type: "ephoto"
},

wetglass: {
url: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
type: "ephoto"
},

greenbrush: {
url: "https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html",
type: "ephoto"
}

}

cmd({
pattern: "logo",
desc: "Logo Maker",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(args.length < 2){
return reply(`Example:
.logo comic Zahid`)
}

const style = args[0].toLowerCase()
const text = args.slice(1).join(" ")

if(!logos[style]){
return reply(`Available styles:

comic
dragon
naruto
neon
paper
clouds
sand
fog
wetglass
greenbrush`)
}

const data = await mumaker.ephoto(logos[style].url,[text])

await conn.sendMessage(from,{
image:{ url:data.image },
caption:`✨ Logo Generated

Style : ${style}
Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error")

}

})
