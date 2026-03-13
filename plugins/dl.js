const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

module.exports = {
name: "dl",
alias: ["download"],
desc: "Universal downloader",
category: "downloader",

async run(sock, m, args) {

const url = args[0];

if (!url) {
return sock.sendMessage(m.chat, { text: "Send video link\nExample:\n.dl https://facebook.com/..." }, { quoted: m });
}

const file = `video_${Date.now()}.mp4`;

sock.sendMessage(m.chat,{text:"⏳ Downloading video..."},{quoted:m});

exec(`yt-dlp -o "${file}" "${url}"`, async (err) => {

if (err) {
return sock.sendMessage(m.chat,{text:"❌ Download failed"},{quoted:m});
}

try {

await sock.sendMessage(
m.chat,
{
video: fs.readFileSync(file),
caption: "Downloaded by Zahid King 👑"
},
{ quoted: m }
);

fs.unlinkSync(file);

} catch {
sock.sendMessage(m.chat,{text:"❌ Sending failed"},{quoted:m});
}

});

}

};
