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

try {

if (!text) return reply("Example:\n.video alan walker faded")

let url = text

/* SEARCH */

if (!text.startsWith("http")) {

let search = await yts(text)

if (!search.videos.length) return reply("❌ Video not found")

url = search.videos[0].url

}

reply("⬇️ Downloading video...")

let file = `yt_${Date.now()}.mp4`

exec(`yt-dlp -o "${file}" "${url}"`, async (err, stdout, stderr) => {

if (err) {
console.log("YT ERROR:", stderr)
return reply("❌ Download failed\n\nServer may not support yt-dlp")
}

await conn.sendMessage(from,{
video: fs.readFileSync(file),
caption: "🎥 YouTube Video\n\nPowered by Zahid King 👑"
},{quoted: mek})

fs.unlinkSync(file)

})

} catch (e) {

console.log(e)
reply("❌ Error downloading video")

}

})
