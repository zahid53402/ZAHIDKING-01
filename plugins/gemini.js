const axios = require("axios")

module.exports = {
pattern: "gemini",
alias: ["ai"],
desc: "Chat with Gemini AI",
category: "ai",
react: "🤖",

async function(conn, m, { q, reply }) {

try {

if (!q) return reply("❌ Example:\n.gemini Hello")

let res = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(q)}&owner=Zahid&botname=Gemini`)

let data = res.data

if (!data || !data.response) {
return reply("❌ AI no response")
}

reply(data.response)

} catch (e) {

console.log(e)
reply("❌ AI Error")

}

}

}
