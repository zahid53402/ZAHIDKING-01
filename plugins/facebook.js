const { cmd } = require('../command');
const axios = require('axios');

cmd({
pattern: "facebook",
alias: ["fb","fbdl"],
desc: "Download Facebook Video",
category: "download",
react: "📥",
filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {

try{

if(!q) return reply("❌ Facebook link do\nExample:\n.fb https://facebook.com/...");

if(!q.includes("facebook.com") && !q.includes("fb.watch"))
return reply("❌ Invalid Facebook link");

await conn.sendMessage(from,{
react:{text:"⏳",key:mek.key}
});

let api = `https://delirius-apiofc.vercel.app/download/facebook?url=${encodeURIComponent(q)}`;

let res = await axios.get(api);
let data = res.data;

if(!data || !data.data)
return reply("❌ Facebook video fetch failed");

let video = data.data.hd || data.data.sd;

if(!video)
return reply("❌ Video not found");

await conn.sendMessage(from,{
video:{url:video},
caption:"📥 Facebook Video Downloaded\n\nPowered by ZAHID KING"
},{quoted:mek});

}catch(e){
console.log(e)
reply("❌ Facebook download error");
}

});
