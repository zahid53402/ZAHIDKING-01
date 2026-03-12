const axios = require("axios")

module.exports = {
pattern: "gemini",
alias: ["ai"],
desc: "Chat with AI",
category: "ai",
react: "🤖",

async function(conn, m, { q, reply }) {

try {

if (!q) return reply("❌ Example:\n.gemini Hello")

let res = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(q)}&lc=en`)

let data = res.data

if (!data || !data.success) {
return reply("❌ AI no response")
}

reply(data.success)

} catch (e) {

console.log(e)
reply("❌ AI Error")

}

}

}
