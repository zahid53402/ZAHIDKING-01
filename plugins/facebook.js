const axios = require('axios')
const { cmd } = require('../command')

cmd({
pattern: "fb",
alias: ["facebook","fbdl"],
desc: "Download Facebook Video",
category: "download",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try {

if(!args[0]) return reply("Example:\n.fb https://facebook.com/video")

let url = args[0]

if(!url.includes("facebook.com")){
return reply("❌ Invalid Facebook link")
}

reply("⏳ Downloading video...")

let api = `https://api.hanggts.xyz/download/facebook?url=${encodeURIComponent(url)}`

const res = await axios.get(api)

let data = res.data

let video =
data?.result?.media?.video_hd ||
data?.result?.media?.video_sd ||
data?.result?.url ||
data?.data?.url ||
data?.url ||
data?.video

if(!video) return reply("❌ Failed to fetch video")

let title =
data?.result?.info?.title ||
data?.title ||
"Facebook Video"

await conn.sendMessage(
m.chat,
{
video: { url: video },
caption: `𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 𝗭𝗔𝗛𝗜𝗗 𝗞𝗜𝗡𝗚\n\n📝 Title: ${title}`
},
{ quoted: m }
)

} catch(e) {

console.log(e)

reply("❌ Facebook download failed")

}

})
