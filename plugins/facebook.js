const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "fb",
alias: ["facebook","fbdl"],
desc: "Download Facebook Video",
category: "download",
filename: __filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.fb https://facebook.com/xxxxx")

try {

await reply("⏳ Downloading Facebook video...")

let res = await axios.get(`https://tikwm.com/api/fb?url=${encodeURIComponent(q)}`)

let video = res.data.data.hd || res.data.data.sd

if(!video) return reply("❌ Facebook video not found")

await conn.sendMessage(from,{
video:{ url: video },
caption:`📥 Facebook Video Downloaded

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

} catch(e) {

console.log(e)
reply("❌ Facebook download error")

}

})
