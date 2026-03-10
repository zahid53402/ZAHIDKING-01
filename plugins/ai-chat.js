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

let res = await axios.get(
`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(q)}&owner=Zahid&botname=ZahidKing`,
{ timeout: 20000 }
)

let ai = res.data.response

if(!ai) return reply("AI did not respond")

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

} catch(err) {

console.log("AI ERROR:", err.message)

reply("❌ AI server timeout or blocked")

}

})
