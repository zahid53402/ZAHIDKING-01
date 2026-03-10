const { cmd } = require('../command')
const axios = require('axios')

cmd({
pattern: "ai",
desc: "chat with ai"
},
async (conn, mek, m, {q, reply}) => {

if(!q) return reply("Example: .ai Hello")

try {

let res = await axios.get(`https://api.ryzendesu.vip/api/ai/gpt4?text=${q}`)

let ai = res.data.answer

reply(`🤖 AI Response:\n\n${ai}\n\n> Zᴀʜɪᴅ Kɪɴɢ`)

} catch(e){

console.log(e)

reply("AI server error ❌")

}

})
