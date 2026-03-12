const { cmd } = require('../command')
const axios = require('axios')

async function generateLogo(url,text){

const api = `https://api-pink-venom.vercel.app/api/logo?url=${url}&name=${encodeURIComponent(text)}`
const res = await axios.get(api)

return res.data.result.download_url

}

cmd({
pattern:"logo",
desc:"Advanced logo maker",
category:"logo",
react:"🎨",
filename:__filename
},

async(conn,mek,m,{from,args,reply})=>{

try{

if(args.length < 2)
return reply(`Example:
.logo neon Zahid`)

const style = args[0]
const text = args.slice(1).join(" ")

let url

switch(style){

case "neon":
url="https://en.ephoto360.com/create-colorful-neon-light-text-effects-online-797.html"
break

case "comic":
url="https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html"
break

case "dragon":
url="https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html"
break

case "naruto":
url="https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html"
break

case "thor":
url="https://en.ephoto360.com/create-thor-logo-style-text-effects-online-for-free-796.html"
break

case "america":
url="https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html"
break

case "galaxy":
url="https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html"
break

case "cloud":
url="https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html"
break

default:
return reply(`❌ Style not found

Available styles:

neon
comic
dragon
naruto
thor
america
galaxy
cloud`)
}

const logo = await generateLogo(url,text)

await conn.sendMessage(from,{
image:{url:logo},
caption:`✨ Logo Generated

Style : ${style}
Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{quoted:mek})

}catch(e){

console.log(e)
reply("❌ Logo API error")

}

})
