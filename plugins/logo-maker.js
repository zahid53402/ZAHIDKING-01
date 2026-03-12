const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "3dcomic",
desc: "Create 3D comic logo",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(!args.length)
return reply("❌ Example:\n.3dcomic Zahid")

const text = args.join(" ")

const api = `https://api-pink-venom.vercel.app/api/logo?url=https://en.ephoto360.com/create-online-3d-comic-style-text-effects-817.html&name=${encodeURIComponent(text)}`

const res = await axios.get(api)

if(!res.data || !res.data.result || !res.data.result.download_url)
return reply("❌ Logo API failed")

await conn.sendMessage(from,{
image:{ url: res.data.result.download_url },
caption:`✨ *Logo Generated*

✏️ Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error, API down or invalid style")

}

})
