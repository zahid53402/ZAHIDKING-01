const { cmd } = require('../command')
const axios = require('axios')
const yts = require('yt-search')

cmd({
pattern: "video",
alias: ["ytvideo","ytv"],
desc: "YouTube video downloader",
category: "downloader",
react: "🎥",
filename: __filename
},
async (sock, m, msg, { from, args, text, reply }) => {

try {

if (!text) {
return reply("Usage:\n.video song name\nor\n.video youtube_link")
}

await sock.sendMessage(m.chat,{
react:{text:"⚡",key:m.key}
})

let videoUrl = text
let videoInfo = null

if (!text.startsWith("http")) {

const search = await yts(text)

if (!search.videos.length) return reply("No videos found")

videoUrl = search.videos[0].url
videoInfo = search.videos[0]

}

await sock.sendMessage(m.chat,{
react:{text:"⬇️",key:m.key}
})

const api = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`

const res = await axios.get(api)

if(!res.data?.status) return reply("API error")

let title = res.data.title || videoInfo?.title || "Video"
let video = res.data.videos["360"]

await sock.sendMessage(from,{
video:{url:video},
caption:`🎥 ${title}\n\nPowered by Zahid King`
},{quoted:m})

await sock.sendMessage(m.chat,{
react:{text:"✅",key:m.key}
})

}catch(e){

console.log(e)

await sock.sendMessage(m.chat,{
react:{text:"❌",key:m.key}
})

reply("Download failed")

}

})
