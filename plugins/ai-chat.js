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

let aiResponse

try {

// API attempt
let res = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(q)}`)
aiResponse = res.data.response

} catch {

}

// fallback if API fails
if (!aiResponse) {

let responses = [
"I am thinking about your question 🤔",
"That's an interesting question!",
"I'm still learning, but I'll try to help.",
"Can you explain more about that?",
"That's something worth discussing!",
]

aiResponse = responses[Math.floor(Math.random() * responses.length)]

}

reply(`🤖 *AI Response*

${aiResponse}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

})
