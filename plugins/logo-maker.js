const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "logo",
desc: "Create logo",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(args.length < 2)
return reply("❌ Example:\n.logo neon Zahid")

const style = args[0]
const text = args.slice(1).join(" ")

let url

// API 1
try{

url = `https://api.popcat.xyz/textpro?text=${encodeURIComponent(text)}&style=${style}`

await conn.sendMessage(from,{
image:{ url:url },
caption:`🎨 *Logo Generated*

Style : ${style}
Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

return

}catch{}

// API 2 fallback

url = `https://api.xteam.xyz/ephoto360/${style}?text=${encodeURIComponent(text)}`

await conn.sendMessage(from,{
image:{ url:url },
caption:`🎨 *Logo Generated*

Style : ${style}
Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error (API down)")

}

})
