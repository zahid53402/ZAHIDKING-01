const axios = require("axios")
const { cmd } = require("../command")

cmd({
pattern: "fb",
alias: ["facebook","fbdl"],
desc: "Download Facebook video",
category: "downloader",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try{

let url = args[0]

if(!url) return reply("Send Facebook link")

reply("📥 Downloading Facebook video...")

let api = `https://api.nexoracle.com/downloaders/fbdl?url=${encodeURIComponent(url)}&apikey=free_for_use`

let { data } = await axios.get(api)

let video =
data?.result?.hd ||
data?.result?.sd ||
data?.link

if(!video) return reply("❌ Video not found")

let title = data?.result?.title || "Facebook Video"

await conn.sendMessage(
m.chat,
{
video:{ url: video },
caption:`🦋 Facebook • ${title}\n\n> Powered by Zahid King`
},
{ quoted:m }
)

}catch(e){

console.log(e)

reply("❌ Facebook download failed")

}

})
