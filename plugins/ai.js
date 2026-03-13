const axios = require("axios")
const config = require("../config")

module.exports = {
pattern: "ai",
alias: ["ask","gpt","chat"],
react: "🤖",
desc: "Chat with Gemini AI",
category: "ai",

async function(conn, m, args) {

try {

if(!args[0]) return m.reply("Example:\n.ai what is javascript")

let question = args.join(" ")

let res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents: [
{
parts: [{ text: question }]
}
]
}
)

let answer = res.data.candidates[0].content.parts[0].text

m.reply(answer)

} catch(e) {

console.log(e)

m.reply("❌ AI error")

}

}
}
