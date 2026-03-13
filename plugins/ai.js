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

if(!args[0]) return m.reply("Example:\n.ai what is javascript")

let question = args.join(" ")

const response = await axios({
method: "POST",
url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${config.GEMINI_API_KEY}`,
headers: {
"Content-Type": "application/json"
},
data: {
contents: [
{
parts: [
{ text: question }
]
}
]
}
})

let result = response.data.candidates[0].content.parts[0].text

await m.reply(result)

} catch (error) {

console.log(error.response?.data || error)

m.reply("❌ AI error. Check Gemini API key or quota.")

}

}
}
