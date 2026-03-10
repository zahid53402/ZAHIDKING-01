const { cmd } = require('../command')
const fs = require('fs')

cmd({
pattern: "ai",
alias: ["bot","chat"],
desc: "Offline AI",
category: "ai",
filename: __filename
},

async (conn, mek, m, { q, reply }) => {

if(!q) return reply("Example: .ai hello")

let text = q.toLowerCase()

let data = JSON.parse(fs.readFileSync('./database/ai.json'))

let ai = data[text]

// math solver
if(!ai && /[0-9+\-*/().]/.test(text)){
try{
ai = "Math result hai: " + eval(text)
}catch{
ai = "Math samajh nahi aya"
}
}

// default reply
if(!ai){
let random = [
"Yeh interesting sawal hai 🤔",
"Main abhi seekh raha hoon.",
"Aap thoda aur detail bata sakte ho?",
"Achha sawal hai 😊"
]

ai = random[Math.floor(Math.random()*random.length)]
}

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)
})
