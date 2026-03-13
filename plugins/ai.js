const { cmd } = require('../command')
const axios = require('axios')

const API = global.api
const APIKEY = global.myName

async function sendResponse(conn, from, text, quoted) {
    await conn.sendMessage(from, { text }, { quoted })
}

cmd({
pattern: "sd",
alias: ["stablediffusion"],
desc: "Generate image using Stable Diffusion",
category: "ai",
react: "📸",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a prompt to generate image!")

try{

let url = `${API}/ai/sd?apikey=${APIKEY}&prompt=${encodeURIComponent(q)}`

await conn.sendMessage(from,{
image:{url:url},
caption:`Here is your generated Image for: ${q}\n> Powered by Zahid King`
},{quoted:mek})

}catch(e){
reply("❌ Image generation failed")
}

})

cmd({
pattern: "imagine",
alias: ["imagineai"],
desc: "Generate image using AI",
category: "ai",
react: "🎨",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a prompt")

try{

let url = `${API}/ai/text2img?apikey=${APIKEY}&prompt=${encodeURIComponent(q)}`

await conn.sendMessage(from,{
image:{url:url},
caption:`Here is your generated Image for: ${q}\n> Powered by Zahid King`
},{quoted:mek})

}catch(e){
reply("❌ Error generating image")
}

})

cmd({
pattern: "gemini",
desc: "Chat with Gemini AI",
category: "ai",
react: "🤖",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a query!")

try{

let res = await axios.get(`${API}/ai/geminiai?apikey=${APIKEY}&q=${encodeURIComponent(q)}`)

reply(res.data.result)

}catch(e){
reply("❌ Gemini error")
}

})

cmd({
pattern: "lumin",
alias: ["luminai"],
desc: "Chat with Lumin AI",
category: "ai",
react: "🤖",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a query!")

try{

let res = await axios.get(`${API}/ai/luminai?apikey=${APIKEY}&q=${encodeURIComponent(q)}`)

reply(res.data.result)

}catch(e){
reply("❌ Lumin AI error")
}

})

cmd({
pattern: "simsimi",
desc: "Chat with Simsimi AI",
category: "ai",
react: "🤖",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a query!")

try{

let res = await axios.get(`${API}/ai/simsimi?apikey=${APIKEY}&q=${encodeURIComponent(q)}`)

reply(res.data.result)

}catch(e){
reply("❌ Simsimi error")
}

})

cmd({
pattern: "blackbox",
alias: ["blackboxai","blackboxchat"],
desc: "Chat with Blackbox AI",
category: "ai",
react: "🤖",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a prompt")

try{

let res = await axios.get(`${API}/ai/blackbox?apikey=${APIKEY}&q=${encodeURIComponent(q)}`)

reply(res.data.result)

}catch(e){
reply("❌ Blackbox AI error")
}

})

cmd({
pattern: "ai",
alias: ["gpt","chatgpt"],
desc: "Chat with AI",
category: "ai",
react: "🤖",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

if(!q) return reply("Provide a prompt")

try{

let res = await axios.get(`${API}/ai/gpt4?apikey=${APIKEY}&q=${encodeURIComponent(q)}`)

reply(res.data.result)

}catch(e){
reply("❌ AI error")
}

})
