const { cmd } = require('../command');
const yts = require('yt-search');
const ytdl = require('@dark-yasiya/yt-dl.js');

cmd({
pattern: "video",
alias: ["ytv"],
desc: "Download YouTube video",
category: "downloader",
react: "🎥",
filename: __filename
},
async (conn, mek, m, { from, text, reply }) => {

try{

if(!text) return reply("Example:\n.video alan walker faded")

let videoUrl = text
let videoInfo = null

/* SEARCH YOUTUBE */

if(!text.startsWith("http")){

const search = await yts(text)

if(!search.videos.length) return reply("❌ Video not found")

videoUrl = search.videos[0].url
videoInfo = search.videos[0]

}

/* REACTION */

await conn.sendMessage(from,{
react:{text:"⬇️",key:mek.key}
})

/* DOWNLOAD */

const data = await ytdl.ytmp4(videoUrl)

if(!data || !data.url) return reply("❌ Download failed")

let title = data.title || videoInfo?.title || "YouTube Video"

/* SEND VIDEO */

await conn.sendMessage(from,{
video:{url:data.url},
caption:`🎥 ${title}\n\n👑 Powered by Zahid King`
},{quoted:mek})

await conn.sendMessage(from,{
react:{text:"✅",key:mek.key}
})

}catch(e){

console.log(e)

await conn.sendMessage(from,{
react:{text:"❌",key:mek.key}
})

reply("❌ Error downloading video")

}

})
