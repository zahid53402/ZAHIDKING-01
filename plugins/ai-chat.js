const axios = require("axios")

module.exports = {
pattern: "gemini",
alias: ["ai"],
desc: "Ask Gemini AI",
category: "ai",
react: "🤖",

async function(conn, m, { q, reply }) {

try {

if (!q) return reply("❌ Example:\n.gemini Hello")

let res = await axios.get(`https://api.ryzendesu.vip/api/ai/gemini?text=${encodeURIComponent(q)}`)

let data = res.data

if (!data || !data.answer) {
return reply("❌ AI no response")
}

reply(data.answer)

} catch (e) {

console.log(e)
reply("❌ Gemini AI Error")

}

}

}
