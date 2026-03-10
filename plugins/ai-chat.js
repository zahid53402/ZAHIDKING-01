const { cmd } = require('../command');
const axios = require('axios');

cmd({
pattern: "ai",
desc: "Chat with AI",
category: "ai",
filename: __filename
},
async (conn, mek, m, { q, reply }) => {

if(!q) return reply("Example: .ai hello");

try {

let res = await axios.get(`https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`);

let ai = res.data.answer;

reply(`🤖 AI Response:\n\n${ai}\n\n> Powered By Zᴀʜɪᴅ Kɪɴɢ`);

} catch(e){

console.log(e);

reply("❌ AI server busy, try again later");

}

});
