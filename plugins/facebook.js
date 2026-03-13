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

if(!url) return reply("Send Facebook video link")

reply("⏳ Fetching Facebook video...")

let video = null

// API 1
try{
let r = await axios.get(`https://api.siputzx.my.id/api/d/facebook?url=${encodeURIComponent(url)}`)
let hd = r?.data?.data?.data?.find(v=>v.resolution==="HD")
let sd = r?.data?.data?.data?.find(v=>v.resolution==="SD")
video = hd?.url || sd?.url
}catch{}

// API 2
if(!video){
try{
let r = await axios.get(`https://api.vreden.my.id/api/fbdl?url=${encodeURIComponent(url)}`)
video = r?.data?.result?.url
}catch{}
}

// API 3
if(!video){
try{
let r = await axios.get(`https://api.nexoracle.com/downloaders/fbdl?url=${encodeURIComponent(url)}&apikey=free_for_use`)
video = r?.data?.result?.hd || r?.data?.result?.sd
}catch{}
}

if(!video) return reply("❌ Facebook video not found")

await conn.sendMessage(
m.chat,
{
video:{ url: video },
caption:"✅ Facebook Video Downloaded\n\n> Powered by Zahid King"
},
{ quoted:m }
)

}catch(e){

console.log(e)

reply("❌ Facebook downloader failed")

}

})
