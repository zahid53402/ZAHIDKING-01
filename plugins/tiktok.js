const { cmd } = require('../command')
const axios = require('axios')

// VIDEO COMMAND (.tt & .tiktok)
cmd({
pattern: "tt",
alias: ["tiktok"],
desc: "Download TikTok Video",
category: "download",
filename: __filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.tt https://vt.tiktok.com/xxxxx")

try {

await reply("⏳ Downloading TikTok video...")

let res = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(q)}`)

let video = res.data.data.play

if(!video) return reply("❌ Video download failed")

await conn.sendMessage(from,{
video:{ url: video },
caption:`🎬 TikTok Video

> Powered By Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

} catch(e) {

console.log(e)
reply("❌ TikTok video error")

}

})


// MP3 COMMAND (.ttmp3 & .tiktokmp3)
cmd({
pattern: "ttmp3",
alias: ["tiktokmp3"],
desc: "Download TikTok Audio",
category: "download",
filename: __filename
},

async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Example:\n.ttmp3 https://vt.tiktok.com/xxxxx")

try {

await reply("⏳ Downloading TikTok audio...")

let res = await axios.get(`https://tikwm.com/api/?url=${encodeURIComponent(q)}`)

let audio = res.data.data.music

if(!audio) return reply("❌ Audio download failed")

await conn.sendMessage(from,{
audio:{ url: audio },
mimetype:"audio/mpeg"
},{ quoted: mek })

} catch(e) {

console.log(e)
reply("❌ TikTok MP3 error")

}

})
