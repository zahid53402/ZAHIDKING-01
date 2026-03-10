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

let ai

try {

// API 1
let res = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(q)}&owner=Zahid&botname=ZahidKing`)
ai = res.data.response

} catch {

try {

// API 2
let res2 = await axios.get(`https://api.simsimi.vn/v2/simtalk?text=${encodeURIComponent(q)}&lc=en`)
ai = res2.data.message

} catch {

try {

// API 3
let res3 = await axios.get(`https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`)
ai = res3.data.answer

} catch {

return reply("❌ All AI servers are busy, try again later.")

}

}

}

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

})
