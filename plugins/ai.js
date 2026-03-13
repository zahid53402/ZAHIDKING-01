const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "ai",
alias: ["gemini","gpt"],
react: "🤖",
desc: "Chat with Gemini AI",
category: "ai",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Please provide a question.")

try{

const apiKey = process.env.GEMINI_API_KEY || global.GEMINI_API_KEY

let res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
{
contents: [
{
parts: [{ text: q }]
}
]
}
)

let text = res.data.candidates[0].content.parts[0].text

reply(text)

}catch(e){

console.log(e)

reply("AI failed. Check Gemini API key.")

}

})
