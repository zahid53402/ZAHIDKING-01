const axios = require("axios")
const config = require("../config")

module.exports = {
pattern: "ai",
alias: ["ask","chat","gpt"],
react: "🤖",
desc: "Chat with Gemini AI",
category: "ai",

async function(conn, m, args) {

try {

if(!args[0]) return m.reply("Example:\n.ai hello")

let text = args.join(" ")

const res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents: [
{
parts: [{ text: text }]
}
]
},
{
headers: { "Content-Type": "application/json" }
}
)

let reply = res.data.candidates[0].content.parts[0].text

m.reply(reply)

} catch (err) {

console.log(err.response?.data || err)

m.reply("❌ AI failed. Check API key.")

}

}
}
