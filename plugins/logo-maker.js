const { cmd } = require('../command')

cmd({
pattern: "font",
desc: "Create font logo",
category: "logo",
react: "🖋️",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(args.length < 2)
return reply(`Example:
.font neon Zahid`)

const font = args[0].toLowerCase()
const text = args.slice(1).join(" ")

let image

switch(font){

case "neon":
image = `https://dummyimage.com/1200x600/000/00ffff&text=${encodeURIComponent(text)}`
break

case "fire":
image = `https://dummyimage.com/1200x600/000/ff3300&text=${encodeURIComponent(text)}`
break

case "gold":
image = `https://dummyimage.com/1200x600/000/ffd700&text=${encodeURIComponent(text)}`
break

case "silver":
image = `https://dummyimage.com/1200x600/000/c0c0c0&text=${encodeURIComponent(text)}`
break

case "matrix":
image = `https://dummyimage.com/1200x600/000/00ff00&text=${encodeURIComponent(text)}`
break

case "pink":
image = `https://dummyimage.com/1200x600/000/ff66cc&text=${encodeURIComponent(text)}`
break

case "blue":
image = `https://dummyimage.com/1200x600/000/3399ff&text=${encodeURIComponent(text)}`
break

case "ice":
image = `https://dummyimage.com/1200x600/000/66ccff&text=${encodeURIComponent(text)}`
break

case "lava":
image = `https://dummyimage.com/1200x600/000/ff3300&text=${encodeURIComponent(text)}`
break

case "galaxy":
image = `https://dummyimage.com/1200x600/000/6633ff&text=${encodeURIComponent(text)}`
break

default:
return reply(`❌ Font not found

Available fonts:

neon
fire
gold
silver
matrix
pink
blue
ice
lava
galaxy`)
}

await conn.sendMessage(from,{
image:{ url:image },
caption:`✨ Font Logo Generated

Font : ${font}
Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

console.log(e)
reply("❌ Font logo error")

}

})
