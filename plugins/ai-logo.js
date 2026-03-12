const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "ailogo",
desc: "AI Logo Maker",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(!args[0]) return reply("Example: .ailogo Zahid King")

const text = args.join(" ")

const prompt = `anime boy poster with big golden text ${text} ultra hd`

const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`

// image download
const response = await axios({
url: url,
method: "GET",
responseType: "arraybuffer"
})

const buffer = Buffer.from(response.data)

await conn.sendMessage(from,{
image: buffer,
caption:`✨ AI Logo Generated

Name : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error: " + e)

}

})
