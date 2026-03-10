const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "ai",
desc: "Chat with AI"
},
async (conn, mek, m, {q, reply}) => {

if(!q) return reply("Example: .ai hello")

try {

let res = await axios.get(`https://api.ryzendesu.vip/api/ai/gpt4?text=${q}`)

let ai = res.data.answer

reply(`🤖 AI Response:

${ai}

> Zᴀʜɪᴅ Kɪɴɢ`)

} catch(e){

reply("AI error ❌")

}

})
