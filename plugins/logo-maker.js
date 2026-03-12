const { cmd } = require('../command')
const mumaker = require('mumaker')

const logos = {

comic: "https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html",
dragon: "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html",
naruto: "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html",
thor: "https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html",
america: "https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html",

neon: "https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html",
paper: "https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html",
cloud: "https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html",
sand: "https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html",

fog: "https://en.ephoto360.com/handwritten-text-on-foggy-glass-online-680.html",
wetglass: "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html",
greenbrush: "https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html",

galaxy: "https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html",
glitch: "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html",

christmas: "https://en.ephoto360.com/christmas-text-effect-online-376.html",
snow: "https://en.ephoto360.com/snow-text-effect-online-425.html",

water: "https://en.ephoto360.com/water-text-effect-online-564.html",
wood: "https://en.ephoto360.com/wood-text-effect-online-521.html",

gold: "https://en.ephoto360.com/gold-text-effect-online-302.html",
silver: "https://en.ephoto360.com/silver-text-effect-online-321.html",

shadow: "https://en.ephoto360.com/shadow-text-effect-online-765.html",
sketch: "https://en.ephoto360.com/sketch-text-effect-online-738.html"

}

cmd({
pattern: "logo",
desc: "Ultimate Logo Generator",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(args.length < 2){
return reply(`Example:
.logo neon Zahid`)
}

const style = args[0].toLowerCase()
const text = args.slice(1).join(" ")

if(!logos[style]){
return reply(`❌ Style not found

Example:
.logo neon Zahid
.logo comic Zahid
.logo dragon Zahid`)
}

const data = await mumaker.ephoto(logos[style],[text])

await conn.sendMessage(from,{
image:{ url:data.image },
caption:`✨ SUPER LOGO GENERATED

Style : ${style}
Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error")

}

})
