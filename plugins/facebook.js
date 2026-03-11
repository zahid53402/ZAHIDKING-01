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

try{

await reply("⏳ Downloading Facebook video...")

let api = `https://api.fgmods.xyz/api/downloader/fb?url=${encodeURIComponent(q)}&apikey=fgmods`
let res = await axios.get(api)

let video = res.data.result?.hd || res.data.result?.sd

if(!video) return reply("❌ Facebook video not found")

await conn.sendMessage(from,{
video:{ url: video },
caption:`📥 Facebook Video Downloaded

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

}catch(e){

console.log(e)
reply("❌ Facebook download error")

}

})
