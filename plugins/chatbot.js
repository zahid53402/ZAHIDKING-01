const { cmd } = require("../command");

global.AI_CHATBOT = false;

cmd({
pattern: "chatbot",
desc: "Turn AI chatbot on/off",
category: "ai",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

if(!args[0]) return reply("Usage:\n.chatbot on\n.chatbot off");

if(args[0] === "on"){
global.AI_CHATBOT = true
reply("🤖 Zahid King AI Chatbot Enabled")
}

else if(args[0] === "off"){
global.AI_CHATBOT = false
reply("❌ Zahid King AI Chatbot Disabled")
}

});
