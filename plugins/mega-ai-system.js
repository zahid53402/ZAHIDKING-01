const axios = require("axios")
const config = require("../config")
const { cmd } = require("../command")

let aiEnabled = false
let memory = {}

cmd({
pattern:"chatbot",
desc:"AI on/off",
category:"ai"
},
async(conn,mek,m,{args,reply})=>{

if(!args[0]) return reply("Use:\n.chatbot on\n.chatbot off")

if(args[0]=="on"){
aiEnabled=true
return reply("🤖 Mega AI Enabled")
}

if(args[0]=="off"){
aiEnabled=false
return reply("🔕 Mega AI Disabled")
}

})


/* AI QUESTION */

cmd({
pattern:"ai",
category:"ai"
},
async(conn,mek,m,{args,reply})=>{

if(!args[0]) return reply("Example:\n.ai What is gravity?")

let q = args.join(" ")

let res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents:[{parts:[{text:q}]}]
})

let ans = res.data.candidates[0].content.parts[0].text

reply(ans)

})


/* AI IMAGE GENERATOR */

cmd({
pattern:"imagine",
category:"ai"
},
async(conn,mek,m,{from,args,reply})=>{

if(!args[0]) return reply("Example:\n.imagine cyber city")

let prompt = args.join(" ")

let img = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`

await conn.sendMessage(from,{
image:{url:img},
caption:`🖼 AI Generated Image\nPrompt: ${prompt}\n\n© Zahid King`
},{quoted:mek})

})


/* AUTO AI CHAT */

cmd({
on:"text"
},
async(conn,m,store,{from,body,sender,isGroup})=>{

try{

if(!aiEnabled) return
if(m.key.fromMe) return
if(!body) return
if(body.startsWith(config.PREFIX)) return

let context = ""

if(m.message?.extendedTextMessage?.contextInfo?.quotedMessage){

let quoted = m.message.extendedTextMessage.contextInfo.quotedMessage

if(quoted.conversation){
context = quoted.conversation
}

if(quoted.imageMessage){
context = "User replied to an image."
}

if(quoted.videoMessage){
context = "User replied to a video."
}

if(quoted.audioMessage){
context = "User replied to a voice message."
}

}

/* memory */

if(!memory[sender]) memory[sender]=[]

memory[sender].push(body)

let history = memory[sender].slice(-5).join("\n")

let prompt = `
You are Zahid King AI assistant.
Conversation:
${history}

Context:
${context}

User message:
${body}
`

let res = await axios.post(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${config.GEMINI_API_KEY}`,
{
contents:[
{
parts:[
{text:prompt}
]
}
]
})

let reply = res.data.candidates[0].content.parts[0].text

await conn.sendMessage(from,{text:reply},{quoted:m})

}catch(e){
console.log(e)
}

})
