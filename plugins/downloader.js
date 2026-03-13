const { exec } = require("child_process")
const fs = require("fs")
const path = require("path")
const { cmd } = require("../command")

cmd({
pattern: "dl",
alias: ["download"],
desc: "Ultra Downloader",
category: "downloader",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try{

let url = args[0]

if(!url) return reply("Send video link")

reply("⏳ Downloading...")

let file = `video_${Date.now()}.mp4`
let filepath = path.join(__dirname, "../tmp", file)

exec(`yt-dlp -f mp4 -o "${filepath}" "${url}"`, async (err) => {

if(err){
console.log(err)
return reply("❌ Download failed")
}

await conn.sendMessage(
m.chat,
{
video: fs.readFileSync(filepath),
caption: "✅ Video Downloaded\n\n> Powered by Zahid King"
},
{ quoted:m }
)

fs.unlinkSync(filepath)

})

}catch(e){

console.log(e)
reply("❌ Downloader error")

}

})
