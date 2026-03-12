const axios = require("axios")

let userKeys = {}

module.exports = {
pattern: "ai",
desc: "Gemini AI Chat",
category: "ai",
react: "🤖",

async function(conn, m, { q, reply }) {

try {

let sender = m.sender

// save API key
if(q && q.startsWith("key ")){

let key = q.replace("key ","").trim()

userKeys[sender] = key

return reply("✅ Gemini API key saved!")
}

// check API key
if(!userKeys[sender]){
return reply(
"❌ First set API key\n\n.ai key YOUR_API_KEY\n\nGet key:\nhttps://aistudio.google.com/app/apikey"
)
}

if(!q) return reply("Example:\n.ai Hello")

let apiKey = userKeys[sender]

let res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
reply("❌ Gemini AI Error")

}

}

}
