const { cmd } = require('../command')

const styles = [
"neon","glitch","fire","matrix","metal","dragon","cyber","gold","silver","ice",
"lava","galaxy","space","cloud","sand","leaf","grass","light","dark","shadow",
"3d","3dmetal","3dtext","comic","cartoon","graffiti","street","blood","horror",
"ghost","sketch","paint","ink","water","glass","mirror","steel","iron","stone",
"rock","paper","wood","brick","electric","thunder","rainbow","retro","pixel",
"gaming","future","cyberpunk","laser","energy","magic","fantasy","anime",
"manga","ninja","samurai","dragonfire","icefire","sun","moon","star","planet",
"meteor","comet","storm","wind","sky","spacecraft","robot","ai","digital",
"binary","code","tech","engine","mechanic","industrial","chrome","diamond",
"crystal","ruby","emerald","sapphire","pearl","obsidian","lavafire","inferno",
"flame","burn","freeze","snow","winter","summer","spring","autumn",
"forest","jungle","desert","ocean","river","mountain","island","volcano"
]

styles.forEach(style => {

cmd({
pattern: style,
desc: `Create ${style} logo`,
category: "logo",
react: "🎨",
filename: __filename
},

async(conn, mek, m, { from, args, reply }) => {

try{

if(!args.length)
return reply(`❌ Example:\n.${style} Zahid`)

const text = args.join(" ")

const url = `https://api.popcat.xyz/${style}?text=${encodeURIComponent(text)}`

await conn.sendMessage(from,{
image:{ url:url },
caption:`✨ *Logo Generated*

🎨 Style : ${style}
✏️ Text : ${text}

👑 Powered by Zᴀʜɪᴅ Kɪɴɢ`
},{ quoted: mek })

}catch(e){

reply("❌ Logo error")

}

})

})
