const axios = require("axios");
const { cmd } = require("../command");

cmd({
pattern: "fb",
alias: ["facebook", "fbdl"],
desc: "Download Facebook video",
category: "download",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try {

if(!args[0]) return reply("Example:\n.fb https://facebook.com/video")

let url = args[0]

reply("⏳ Downloading Facebook video...")

const res = await axios.get(`https://api.giftedtech.web.id/api/download/fb?url=${url}`)

if(!res.data.result) return reply("❌ Video not found")

let video = res.data.result.sd

await conn.sendMessage(
m.chat,
{
video: { url: video },
caption: "✅ Facebook Video Downloaded\n\nPowered by Zahid King"
},
{ quoted: m }
)

} catch(e) {

console.log(e)
reply("❌ Failed to download video")

}

})
