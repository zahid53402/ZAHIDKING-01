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

let video = null

// API 1
try{
let res1 = await axios.get(`https://api.ryzendesu.vip/api/downloader/fb?url=${encodeURIComponent(q)}`)
video = res1.data.result?.HD || res1.data.result?.SD
}catch{}

// API 2
if(!video){
try{
let res2 = await axios.get(`https://api.fgmods.xyz/api/downloader/fb?url=${encodeURIComponent(q)}&apikey=fgmods`)
video = res2.data.result?.hd || res2.data.result?.sd
}catch{}
}

// API 3
if(!video){
try{
let res3 = await axios.get(`https://api.dreaded.site/api/facebook?url=${encodeURIComponent(q)}`)
video = res3.data.result?.download
}catch{}
}

if(!video) return reply("❌ Facebook video not found or private")

await conn.sendMessage(from,{
video:{ url: video },
caption:`📥 Facebook Video Downloaded

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

}catch(e){

console.log(e)
reply("❌ Facebook downloader failed")

}

})
