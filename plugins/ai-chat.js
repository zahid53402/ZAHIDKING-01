const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "ai",
alias: ["gpt","chat"],
desc: "Chat with AI",
category: "ai",
filename: __filename
},

async (conn, mek, m, { q, reply }) => {

if (!q) return reply("Example: .ai hello")

try {

let res = await axios.get(`https://api.aryahcr.cc/ai/gemini?text=${encodeURIComponent(q)}`)

let ai = res.data.result

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

} catch(e){

console.log(e)

reply("❌ AI server error, try again later")

}

})
