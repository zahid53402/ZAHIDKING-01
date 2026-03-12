const { cmd } = require('../command')
const mumaker = require('mumaker')

cmd({
pattern: "logo",
desc: "Create logo",
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

const style = args[0]
const text = args.slice(1).join(" ")

let url

if(style == "comic"){
url = "https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html"
}

else if(style == "dragon"){
url = "https://en.ephoto360.com/create-dragon-ball-style-text-effects-online-809.html"
}

else if(style == "naruto"){
url = "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html"
}

else{
return reply(`Available styles

comic
dragon
naruto`)
}

const data = await mumaker.textpro(url,[text])

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
