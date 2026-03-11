const { cmd } = require('../command')
const axios = require('axios')
const config = require('../config')

cmd({
pattern: "ai",
alias: ["gpt","ask"],
desc: "Ask AI anything",
category: "ai",
react: "🤖",
filename: __filename
},

async (conn, mek, m, { from, q, reply }) => {

try {

if(!q) return reply("❓ Example:\n.ai who made pakistan")

if(!config.GEMINI_API_KEY)
return reply("❌ GEMINI_API_KEY not found")

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${config.GEMINI_API_KEY}`

const data = {
contents:[
{
parts:[
{ text:q }
]
}
]
}

const res = await axios.post(url,data)

const ai = res.data.candidates[0].content.parts[0].text

reply(ai)

}catch(e){

console.log(e)

reply("❌ AI Error")

}

})
