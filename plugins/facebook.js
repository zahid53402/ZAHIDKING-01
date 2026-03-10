const axios = require("axios");
const { cmd } = require("../command");

// Stylish captions
const fbTitles = [
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 📥 Facebook Video
│❀ ✅ Download Successful
│❀ ⚡ Quality: HD
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ`,

`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❀ 🎬 Facebook Video Ready
│❀ 🚀 Fast Download
│❀ 📦 No Watermark
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ`
];

let fbTitleIndex = 0;

cmd({
pattern: "fb",
alias: ["facebook","fbvideo"],
react: "📥",
desc: "Download Facebook videos",
category: "download",
use: ".fb <facebook url>",
filename: __filename
},

async (conn, mek, m, { from, reply, args }) => {

try {

const fbUrl = args[0];

if (!fbUrl || !fbUrl.includes("facebook.com")) {

return reply(
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❌ Invalid Facebook URL
│✎ Example:
│ .fb https://facebook.com/xxxx
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
);

}

await conn.sendMessage(from,{ react:{ text:"⏳", key:m.key } });

await conn.sendMessage(from,{
text:
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│🔍 Processing Link
│📥 Fetching Video
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
},{ quoted: mek });


// NEW WORKING API
const apiUrl = `https://api.ryzendesu.vip/api/downloader/fb?url=${encodeURIComponent(fbUrl)}`;

const { data } = await axios.get(apiUrl,{ timeout:30000 });

if(!data || !data.result){

return reply(
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❌ Download Failed
│⚠️ Video may be private
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
);

}

const videoUrl = data.result.HD || data.result.SD;

const caption = fbTitles[fbTitleIndex];
fbTitleIndex = (fbTitleIndex + 1) % fbTitles.length;

await conn.sendMessage(from,{
video:{ url: videoUrl },
caption,
mimetype:"video/mp4"
},{ quoted: mek });

await conn.sendMessage(from,{ react:{ text:"✅", key:m.key } });

}

catch(err){

console.error("FB ERROR:",err);

reply(
`╭ׂ┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭
│ ╌─̇─̣⊰ Zᴀʜɪᴅ Kɪɴɢ ⊱┈─̇─̣╌
│─̇─̣┄┄┄┄┄┄┄┄┄┄┄┄┄─̇─̣
│❌ Facebook Download Error
│⏳ Try again later
╰┄─̣┄─̇─̣┄─̇─̣┄─̇─̣┄─̇─̣─̇─̣─᛭`
);

}

});
