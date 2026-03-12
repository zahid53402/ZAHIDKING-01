const { cmd } = require('../command')

cmd({
pattern: "ailogo",
desc: "AI Poster Logo",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(!args[0]) return reply("Example: .ailogo Zahid King")

const text = args.join(" ")

const prompt = `anime boy standing in city night background with big golden text "${text}" poster style ultra hd`

const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`

await conn.sendMessage(from,{
image:{ url:url },
caption:`✨ AI Logo Generated

Name : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

reply("❌ Logo error")

}

})
