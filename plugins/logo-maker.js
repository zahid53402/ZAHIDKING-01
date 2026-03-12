const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "neonlogo",
desc: "Create neon logo",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(!args.length) 
return reply("Example:\n.neonlogo Zahid")

const text = args.join(" ")

const api = `https://api.textpro.me/neon-light-text-effect-online-882.html?text=${encodeURIComponent(text)}`

// direct image generator
const image = `https://dummyimage.com/1024x512/000/fff&text=${encodeURIComponent(text)}`

await conn.sendMessage(from,{
image:{ url:image },
caption:`✨ Logo Generated

Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error")

}

})
