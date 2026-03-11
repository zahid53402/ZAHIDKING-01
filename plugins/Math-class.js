const config = require('../config')

const GROUP_JID = "120363421526922504@g.us"
const VIDEO_URL = "https://files.catbox.moe/ax24ft.mp4"

module.exports = (conn) => {

setInterval(async () => {

try {

const now = new Date()
const hours = now.getHours()
const minutes = now.getMinutes()

// 9:00 AM
if(hours === 9 && minutes === 0){

const metadata = await conn.groupMetadata(GROUP_JID)

const members = metadata.participants.map(v => v.id)

let caption = `📚 *Math Class Announcement*

Assalamualaikum students 👋

Aaj ki *Math Class* start ho chuki hai.

Jo students class join nahi kar paye
woh niche diya gaya *video lecture* zaroor dekhein.

Yeh video aap ki *Math learning* ke liye bohat helpful hai.

Sab students please video complete dekhein
aur apni *practice* continue rakhein.

📖 *Keep learning, keep improving.*

> Powered by Zᴀʜɪᴅ Kɪɴɢ 👑`

await conn.sendMessage(GROUP_JID,{
video:{ url: VIDEO_URL },
caption: caption,
mentions: members
})

}

}catch(e){
console.log("Math class error:",e)
}

},60000)

}
