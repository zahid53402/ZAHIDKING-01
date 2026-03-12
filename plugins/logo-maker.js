const { cmd } = require('../command')

cmd({
pattern: "logo",
desc: "Create logo",
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(args.length < 2)
return reply("Example:\n.logo neon Zahid")

const style = args[0].toLowerCase()
const text = args.slice(1).join(" ")

let image

switch(style){

case "neon":
image = `https://dummyimage.com/1024x512/000/00ffff&text=${encodeURIComponent(text)}`
break

case "fire":
image = `https://dummyimage.com/1024x512/000/ff3300&text=${encodeURIComponent(text)}`
break

case "gold":
image = `https://dummyimage.com/1024x512/000/ffd700&text=${encodeURIComponent(text)}`
break

case "silver":
image = `https://dummyimage.com/1024x512/000/c0c0c0&text=${encodeURIComponent(text)}`
break

case "galaxy":
image = `https://dummyimage.com/1024x512/000/6633ff&text=${encodeURIComponent(text)}`
break

case "matrix":
image = `https://dummyimage.com/1024x512/000/00ff00&text=${encodeURIComponent(text)}`
break

case "ice":
image = `https://dummyimage.com/1024x512/000/66ccff&text=${encodeURIComponent(text)}`
break

case "lava":
image = `https://dummyimage.com/1024x512/000/ff3300&text=${encodeURIComponent(text)}`
break

case "pink":
image = `https://dummyimage.com/1024x512/000/ff66cc&text=${encodeURIComponent(text)}`
break

case "blue":
image = `https://dummyimage.com/1024x512/000/3399ff&text=${encodeURIComponent(text)}`
break

default:
return reply(`❌ Style not found

Available styles:

neon
fire
gold
silver
galaxy
matrix
ice
lava
pink
blue`)
}

await conn.sendMessage(from,{
image:{ url:image },
caption:`✨ Logo Generated

🎨 Style : ${style}
✏️ Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Logo error")

}

})
