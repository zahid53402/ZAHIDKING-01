const { cmd } = require('../command');
const axios = require('axios');

cmd({
pattern: "ai",
desc: "Chat with AI",
category: "ai",
filename: __filename
},
async (conn, mek, m, { q, reply }) => {

if (!q) return reply("Example: .ai hello");

try {

// API 1
let res = await axios.get(`https://api.ryzendesu.vip/api/ai/deepseek?text=${encodeURIComponent(q)}`);
let ai = res.data.answer;

if (!ai) throw "API1 failed";

reply(`🤖 AI Response:\n\n${ai}\n\n> Powered By Zᴀʜɪᴅ Kɪɴɢ`);

} catch {

try {

// API 2
let res2 = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(q)}&owner=Zahid&botname=ZahidKing`);
let ai2 = res2.data.response;

if (!ai2) throw "API2 failed";

reply(`🤖 AI Response:\n\n${ai2}\n\n> Powered By Zᴀʜɪᴅ Kɪɴɢ`);

} catch {

try {

// API 3
let res3 = await axios.get(`https://api.simsimi.vn/v2/simtalk?text=${encodeURIComponent(q)}&lc=en`);
let ai3 = res3.data.message;

reply(`🤖 AI Response:\n\n${ai3}\n\n> Powered By Zᴀʜɪᴅ Kɪɴɢ`);

} catch {

reply("❌ All AI servers are busy. Try again later.");

}

}

}

});
