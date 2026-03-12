const axios = require("axios")

module.exports = {
name: "gemini",
alias: ["ai"],
desc: "Gemini AI Chat",
category: "ai",
use: ".gemini your question",

async run(conn, m, args) {

try {

let text = args.join(" ")
if(!text) return conn.sendMessage(m.chat,{text:"❌ Please ask something\nExample: .gemini Hello"}, {quoted:m})

await conn.sendMessage(m.chat,{react:{text:"🤖", key:m.key}})

let res = await axios.get(`https://api.ryzendesu.vip/api/ai/gemini?text=${encodeURIComponent(text)}`)

let reply = res.data.answer || "No response"

await conn.sendMessage(m.chat,{text: reply},{quoted:m})

} catch(e) {

console.log(e)

conn.sendMessage(m.chat,{text:"❌ Gemini AI Error"},{quoted:m})

}

}
}
