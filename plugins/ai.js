const { cmd } = require('../command')
const axios = require('axios')

async function askAI(prompt){

try{

// Gemini AI
let res = await axios.post(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
{
contents:[{parts:[{text:prompt}]}]
},
{
params:{
key: process.env.GEMINI_API_KEY || global.GEMINI_API_KEY
}
}
)

return res.data.candidates[0].content.parts[0].text

}catch(e){

// Fallback AI
let r = await axios.get(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(prompt)}&owner=Zahid&botname=MegaAI`)
return r.data.response

}

}

cmd({
pattern:"ai",
alias:["gpt","gemini","megaai"],
react:"🤖",
desc:"Mega AI Chat System",
category:"ai",
filename:__filename
},
async(conn,mek,m,{from,q,reply})=>{

if(!q) return reply("Please provide a question.")

let result = await askAI(q)

reply(result)

})

cmd({
pattern:"imagine",
alias:["aiimg","imageai"],
react:"🎨",
desc:"AI Image Generator",
category:"ai",
filename:__filename
},
async(conn,mek,m,{from,q,reply})=>{

if(!q) return reply("Please provide an image prompt.")

let url = `https://image.pollinations.ai/prompt/${encodeURIComponent(q)}`

await conn.sendMessage(from,{
image:{url:url},
caption:`AI Generated Image\n\nPrompt: ${q}\n\nPowered by Zahid King`
},{quoted:mek})

})
