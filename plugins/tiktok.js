const { cmd } = require('../command')
const axios = require('axios')

let tiktokSession = {}

// ASK MODE
cmd({
pattern: "tiktok",
desc: "TikTok Downloader",
category: "download",
filename: __filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.tiktok https://vt.tiktok.com/xxxx")

try{

let res = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(q)}`)

let video = res.data.data.play
let audio = res.data.data.music

tiktokSession[m.sender] = { video, audio }

reply(`🎵 *TikTok Video Found*

Reply with:

1️⃣ Video
2️⃣ MP3

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

}catch(e){

console.log(e)
reply("❌ TikTok download error")

}

})


// REPLY HANDLER
cmd({
on: "text"
},

async (conn, mek, m, { body, from }) => {

let data = tiktokSession[m.sender]

if(!data) return

if(body.trim() === "1"){

await conn.sendMessage(from,{
video:{ url: data.video },
caption:`🎬 TikTok Video

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

delete tiktokSession[m.sender]

}

else if(body.trim() === "2"){

await conn.sendMessage(from,{
audio:{ url: data.audio },
mimetype:"audio/mpeg"
},{quoted: mek})

delete tiktokSession[m.sender]

}

})


// DIRECT VIDEO
cmd({
pattern: "tt",
alias:["tiktokvideo"],
desc:"TikTok Video",
category:"download",
filename:__filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.tt <tiktok link>")

let res = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(q)}`)

let video = res.data.data.play

await conn.sendMessage(from,{
video:{ url: video },
caption:`🎬 TikTok Video

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{quoted: mek})

})


// DIRECT MP3
cmd({
pattern:"ttmp3",
alias:["tiktokaudio"],
desc:"TikTok MP3",
category:"download",
filename:__filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.ttmp3 <tiktok link>")

let res = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(q)}`)

let audio = res.data.data.music

await conn.sendMessage(from,{
audio:{ url: audio },
mimetype:"audio/mpeg"
},{quoted: mek})

})
