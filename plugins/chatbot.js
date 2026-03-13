const { cmd } = require("../command");

let chatbot = false;

cmd({
pattern: "chatbot",
desc: "Enable or disable AI chatbot",
category: "ai",
filename: __filename
},
async (conn, m, msg, { args, reply }) => {

if(!args[0]) return reply("Use:\n.chatbot on\n.chatbot off");

if(args[0] === "on"){
chatbot = true;
reply("🤖 AI Chatbot Enabled");
}

else if(args[0] === "off"){
chatbot = false;
reply("❌ AI Chatbot Disabled");
}

});

module.exports.chatbot = () => chatbot;
