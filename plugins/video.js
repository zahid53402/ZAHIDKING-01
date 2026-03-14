const { cmd } = require('../command')
const axios = require('axios')
const yts = require('yt-search')

cmd({
pattern: "video",
alias: ["ytv"],
desc: "Download YouTube video",
category: "downloader",
react: "🎥",
filename: __filename
},
async (sock, m, msg, { from, text, reply }) => {

try {

if (!text) {
return reply("🎬 Example:\n.video funny cats\nor\n.video https://youtu.be/xxxx")
}

await sock.sendMessage(m.chat,{
react:{text:"🔍",key:m.key}
})

let videoUrl = text
let videoInfo = null

/* SEARCH YOUTUBE */

if (!text.startsWith("http")) {

const search = await yts(text)

if (!search.videos.length) {
return reply("❌ No videos found")
}

videoUrl = search.videos[0].url
videoInfo = search.videos[0]

}

/* DOWNLOAD */

await sock.sendMessage(m.chat,{
react:{text:"⬇️",key:m.key}
})

const api = `https://api.giftedtech.web.id/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=gifted`

const res = await axios.get(api)

if (!res.data.status) {
return reply("❌ Download failed")
}

let video = res.data.result.download_url
let title = res.data.result.title || videoInfo?.title || "YouTube Video"

/* SEND VIDEO */

await sock.sendMessage(from,{
video:{url:video},
caption:`🎥 ${title}\n\n👑 Powered by Zahid King`
},{quoted:m})

await sock.sendMessage(m.chat,{
react:{text:"✅",key:m.key}
})

} catch (e) {

console.log(e)

await sock.sendMessage(m.chat,{
react:{text:"❌",key:m.key}
})

reply("❌ Error downloading video")

}

})
