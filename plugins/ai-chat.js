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

    const res = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(q)}&owner=Zahid&botname=ZahidKing`);

    const ai = res.data.response;

    reply(`🤖 AI Response:\n\n${ai}\n\n> Powered By Zᴀʜɪᴅ Kɪɴɢ`);

  } catch (err) {
    console.log(err);
    reply("❌ AI server error, try again later.");
  }

});
