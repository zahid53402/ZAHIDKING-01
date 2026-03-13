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

let prompt = args.join(" ")

const response = await axios({
method: "POST",
url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
params: {
key: config.GEMINI_API_KEY
},
headers: {
"Content-Type": "application/json"
},
data: {
contents: [
{
role: "user",
parts: [
{ text: prompt }
]
}
]
}
})

let result = response.data.candidates[0].content.parts[0].text

await m.reply(result)

} catch (err) {

console.log(err.response?.data || err)

m.reply("❌ AI error")

}

}
}
