const axios = require("axios");
const { cmd } = require("../command");
const config = require("../config");

cmd({
pattern: "ai",
desc: "Chat with Zahid King AI",
category: "ai",
filename: __filename
},
async (conn, m, msg, { args, reply, pushname }) => {

try {

if(!args[0]) return reply("Example:\n.ai hello");

let question = args.join(" ");

let system = `
You are Zahid King AI Assistant created by Zahid King.
Always respond friendly.

User name: ${pushname}

Always add this line at the end:
Powered by Zahid King
`;

const res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents: [
{
parts: [{ text: system + "\nUser: " + question }]
}
]
}
);

let text = res.data.candidates[0].content.parts[0].text;

reply(text);

} catch(e) {

console.log(e);
reply("❌ AI error");

}

});
