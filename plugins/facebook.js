const axios = require("axios")
const { cmd } = require("../command")

cmd({
pattern: "fb",
alias: ["facebook","fbdl"],
desc: "Download Facebook Video",
category: "download",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try{

if(!args[0]) return reply("Example:\n.fb https://facebook.com/video")

let url = args[0]

reply("⏳ Downloading Facebook video...")

const api = `https://api.giftedtech.web.id/api/download/facebook?url=${url}`

const res = await axios.get(api)

if(!res.data.status) return reply("❌ Video not found")

let video =
res.data.result.hd ||
res.data.result.sd ||
res.data.result.url

await conn.sendMessage(
m.chat,
{
video: { url: video },
caption: "✅ Facebook Video Downloaded\n\nPowered by Zahid King"
},
{ quoted: m }
)

}catch(e){

console.log(e)

reply("❌ Facebook download failed")

}

})
