const { cmd } = require('../command')

cmd({
pattern: "ai",
alias: ["bot","chat"],
desc: "Simple AI chat",
category: "ai",
filename: __filename
},

async (conn, mek, m, { q, reply }) => {

if (!q) return reply("Example: .ai hello")

let text = q.toLowerCase()
let ai = ""

if(text.includes("hello") || text.includes("hi")) {
ai = "Hello! How can I help you today?"
}

else if(text.includes("who are you")) {
ai = "I am Zahid King AI Bot 🤖"
}

else if(text.includes("how are you")) {
ai = "I'm fine! Thanks for asking."
}

else if(text.includes("bot")) {
ai = "Yes, I am here! What do you need?"
}

else {
ai = "That's interesting! Tell me more about it."
}

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

})
