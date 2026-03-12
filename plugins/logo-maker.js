const { cmd } = require('../command')
const { createCanvas } = require('canvas')

cmd({
pattern: "logo",
desc: "Create logo",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(!args[0]) return reply("Example: .logo Zahid King")

const text = args.join(" ")

const canvas = createCanvas(800,400)
const ctx = canvas.getContext("2d")

// background
ctx.fillStyle = "#000000"
ctx.fillRect(0,0,800,400)

// text style
ctx.font = "bold 70px Arial"
ctx.fillStyle = "gold"
ctx.textAlign = "center"
ctx.fillText(text,400,220)

const buffer = canvas.toBuffer()

await conn.sendMessage(from,{
image: buffer,
caption:`✨ Logo Generated

Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error")

}

})
