const { cmd } = require('../command')
const axios = require('axios')

let tiktokStore = {}

cmd({
pattern: "tt",
alias: ["tiktok"],
desc: "Download TikTok",
category: "download",
filename: __filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.tt https://vt.tiktok.com/xxxx")

try{

let res = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(q)}`)

let video = res.data.data.play
let audio = res.data.data.music
let author = res.data.data.author.nickname

if(!video) return reply("❌ TikTok download failed")

tiktokStore[m.sender] = { video, audio, author }

reply(`🎵 *TikTok Video Found*

Reply with:

1️⃣ Video  
2️⃣ MP3

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

}catch(e){

console.log(e)

reply("❌ TikTok API error")

}

})

cmd({
on: "text"
},
async (conn, mek, m, { from, body }) => {

let data = tiktokStore[m.sender]

if(!data) return

if(body === "1"){

await conn.sendMessage(from,{
video:{ url: data.video },
caption:`🎵 TikTok Video Downloaded

👤 Author: ${data.author}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

delete tiktokStore[m.sender]

}

else if(body === "2"){

await conn.sendMessage(from,{
audio:{ url: data.audio },
mimetype:"audio/mpeg",
caption:`🎧 TikTok Audio Downloaded

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

delete tiktokStore[m.sender]

}

})
