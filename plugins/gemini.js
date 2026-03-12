const axios = require("axios")

let userKeys = {}

module.exports = {
pattern: "ai",
desc: "Gemini AI Chat",
category: "ai",
react: "🤖",

async function(conn, m, { args, q, reply }) {

try {

let sender = m.sender

// API key save command
if(args[0] === "key"){

let key = args[1]

if(!key) return reply("Example:\n.ai key YOUR_GEMINI_API_KEY")

userKeys[sender] = key

return reply("✅ Gemini API key saved!")
}

// check key
if(!userKeys[sender]){
return reply(
"❌ First set your Gemini API key\n\nExample:\n.ai key YOUR_API_KEY\n\nGet free key:\nhttps://aistudio.google.com/app/apikey"
)
}

// question check
if(!q) return reply("Example:\n.ai Hello")

let apiKey = userKeys[sender]

let res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
{
contents: [{
parts: [{ text: q }]
}]
}
)

let text = res.data.candidates[0].content.parts[0].text

reply(text)

} catch(e){

console.log(e)
reply("❌ Gemini Error")

}

}

}
