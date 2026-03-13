const axios = require("axios")
const cheerio = require("cheerio")
const { cmd } = require("../command")

cmd({
pattern: "fb",
alias: ["facebook","fbdl"],
desc: "Download Facebook video",
category: "download",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try{

if(!args[0]) return reply("Example:\n.fb https://facebook.com/video")

let url = args[0]

reply("⏳ Downloading Facebook video...")

const res = await axios.post(
"https://fdown.net/download.php",
`URLz=${encodeURIComponent(url)}`,
{
headers:{
"content-type":"application/x-www-form-urlencoded",
"user-agent":"Mozilla/5.0"
}
})

const $ = cheerio.load(res.data)

let video =
$("#sdlink").attr("href") ||
$("#hdlink").attr("href")

if(!video) return reply("❌ Failed to download video")

await conn.sendMessage(
m.chat,
{
video:{ url: video },
caption:"✅ Facebook Video Downloaded\n\nPowered by Zahid King"
},
{ quoted:m }
)

}catch(e){

console.log(e)
reply("❌ Facebook download failed")

}

})
