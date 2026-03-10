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

const apiKey = process.env.GEMINI_API_KEY

const res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
{
contents: [
{
parts: [{ text: q }]
}
]
}
)

let ai = res.data.candidates[0].content.parts[0].text

reply(`🤖 *AI Response*

${ai}

> Powered By Zᴀʜɪᴅ Kɪɴɢ`)

} catch(e) {

console.log(e)

reply("❌ AI error, check API key")

}

})
