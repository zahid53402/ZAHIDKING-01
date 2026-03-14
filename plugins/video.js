const { cmd } = require('../command')
const axios = require('axios')
const yts = require('yt-search')

cmd({
pattern:"video",
alias:["ytv"],
desc:"Download YouTube video",
category:"downloader",
react:"🎬",
filename:__filename
},
async(sock,m,msg,{from,text,reply})=>{

try{

if(!text) return reply("Example:\n.video funny cats")

await sock.sendMessage(m.chat,{
react:{text:"🔍",key:m.key}
})

let videoUrl = text
let videoData = null

if(!text.startsWith("http")){

let search = await yts(text)

if(!search.videos.length) return reply("No videos found")

videoUrl = search.videos[0].url
videoData = search.videos[0]

}

const api = `https://yt-dl.officialhectormanuel.workers.dev/?url=${encodeURIComponent(videoUrl)}`

const res = await axios.get(api)

if(!res.data.status) return reply("API error")

let title = res.data.title || videoData?.title || "Video"

let video = res.data.videos["360"]

await sock.sendMessage(from,{
video:{url:video},
caption:`🎬 ${title}\n\nPowered by Zahid King`
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
