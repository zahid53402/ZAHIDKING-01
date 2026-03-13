const { cmd } = require('../command')
const axios = require('axios')

async function askAI(prompt){

try{

let res = await axios.post(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
{
contents:[{parts:[{text:prompt}]}]
},
{
params:{ key: process.env.GEMINI_API_KEY || global.GEMINI_API_KEY },
timeout: 10000
}
)

return res.data.candidates[0].content.parts[0].text

}catch(e){

try{

let r = await axios.get(
`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(prompt)}&owner=Zahid&botname=MegaAI`,
{ timeout: 5000 }
)

return r.data.response

}catch(err){

return "AI server is busy. Please try again."

}

}

}

cmd({
pattern:"ai",
alias:["megaai","gpt","gemini"],
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
