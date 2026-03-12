const { cmd } = require('../command')

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

const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(`anime boy poster with big golden text ${text}`)

await conn.sendMessage(from,{
image:{ url:url },
caption:`✨ AI Logo Generated

Name : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error: " + e)

}

})
