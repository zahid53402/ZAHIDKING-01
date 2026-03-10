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

if(!ai){

if(/[0-9+\-*/().]/.test(text)){
try{
ai = "Math result hai: " + eval(text)
}catch{
ai = "Math samajh nahi aya"
}
}

else{
ai = "Yeh interesting sawal hai, main abhi seekh raha hoon."
}

}

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

})
