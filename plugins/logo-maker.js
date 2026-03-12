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

if(!args[0]) return reply("❌ Example:\n.logo neon Zahid")

const style = args[0]
const text = args.slice(1).join(" ")

if(!text) return reply("❌ Example:\n.logo neon Zahid")

const api = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-${style}-text-effect-817.html&name=${encodeURIComponent(text)}`

const res = await axios.get(api)

if(!res.data?.result?.download_url)
return reply("❌ Logo generate failed")

await conn.sendMessage(from,{
image:{ url: res.data.result.download_url },
caption:`✨ *Logo Generated*

🎨 Style : ${style}
✏️ Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error")

}

})
