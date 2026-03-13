const axios = require("axios");
const { cmd } = require("../command");
const config = require("../config");

cmd({
    pattern: "ai",
    desc: "Chat with Gemini AI",
    category: "ai",
    filename: __filename
},
async (conn, m, msg, { args, reply }) => {

try {

if (!args[0]) return reply("Example:\n.ai hello");

let question = args.join(" ");

const response = await axios.post(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + config.GEMINI_API_KEY,
{
contents: [
{
parts: [
{ text: question }
]
}
]
}
);

let text = response.data.candidates[0].content.parts[0].text;

reply(text);

} catch (err) {

console.log(err.response?.data || err);

reply("❌ AI request failed");

}

});
