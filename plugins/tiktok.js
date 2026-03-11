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

if(!video) return reply("❌ TikTok download failed")

tiktokStore[m.sender] = {
video: video,
audio: audio
}

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

async (conn, mek, m, { body, from }) => {

let data = tiktokStore[m.sender]

if(!data) return

let text = body.trim()

if(text === "1"){

await conn.sendMessage(from,{
video:{ url: data.video },
caption:`🎬 TikTok Video

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

delete tiktokStore[m.sender]

}

else if(text === "2"){

await conn.sendMessage(from,{
audio:{ url: data.audio },
mimetype:"audio/mpeg"
},{quoted: mek})

delete tiktokStore[m.sender]

}

})
