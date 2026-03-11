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

await reply("⏳ Fetching Facebook video...")

let { data } = await axios.get("https://getmyfb.com/process",{
method: "POST",
headers: {
"content-type":"application/x-www-form-urlencoded"
},
data: `id=${encodeURIComponent(q)}&locale=en`
})

let hd = data.match(/href="(.*?)" class="btn btn-download hd"/)

if(!hd) return reply("❌ Video not found or private")

let video = hd[1]

await conn.sendMessage(from,{
video:{ url: video },
caption:`📥 Facebook Video Downloaded

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

}catch(e){

console.log(e)
reply("❌ Facebook video failed, try another link")

}

})
