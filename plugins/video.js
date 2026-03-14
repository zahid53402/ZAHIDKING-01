const { cmd } = require('../command')
const yts = require('yt-search')
const { exec } = require('child_process')
const fs = require('fs')

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

let url = text

if(!text.startsWith("http")){
let search = await yts(text)
if(!search.videos.length) return reply("❌ Video not found")
url = search.videos[0].url
}

reply("⬇️ Downloading video...")

let file = `video_${Date.now()}.mp4`

exec(`python3 -m yt_dlp -o "${file}" "${url}"`, async (err) => {

if(err){
console.log(err)
return reply("❌ Download failed")
}

await conn.sendMessage(from,{
video: fs.readFileSync(file),
caption:"🎥 YouTube Video\n\n👑 Powered by Zahid King"
},{quoted: mek})

fs.unlinkSync(file)

})

}catch(e){
console.log(e)
reply("❌ Error downloading video")
}

})
