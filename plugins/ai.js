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
params:{ key: process.env.GEMINI_API_KEY || global.GEMINI_API_KEY },
timeout:10000
}
)

return res.data.candidates[0].content.parts[0].text

}catch(e){

try{

// Popcat AI
let r = await axios.get(
`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(prompt)}&owner=Zahid&botname=MegaAI`,
{timeout:5000}
)

return r.data.response

}catch(err){

try{

// Third fallback AI
let r2 = await axios.get(
`https://api.simsimi.vn/v2/simtalk?text=${encodeURIComponent(prompt)}&lc=en`
)

return r2.data.message

}catch(e){

return "AI is currently busy. Please try again later."

}

}

}

}

cmd({
pattern:"ai",
alias:["gpt","megaai","gemini"],
react:"🤖",
desc:"Mega AI System",
category:"ai",
filename:__filename
},
async(conn,mek,m,{from,q,reply})=>{

if(!q) return reply("Please provide a question.")

let response = await askAI(q)

reply(response)

})
