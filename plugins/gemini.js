const axios = require("axios")

module.exports = {
pattern: "ai",
desc: "AI chat",
category: "ai",
react: "🤖",

async function(conn, m, { q, reply }) {

try {

if (!q) return reply("Example:\n.ai Hello")

let res = await axios.get("https://api.affiliateplus.xyz/api/chatbot", {
params: {
message: q,
botname: "ZahidAI",
ownername: "Zahid",
user: m.sender
}
})

reply(res.data.message)

} catch (e) {
console.log(e)
reply("❌ AI Error")
}

}

}
