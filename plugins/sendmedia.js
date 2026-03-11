const { cmd } = require("../command");
const axios = require("axios");

/* ================= SEND IMAGE ================= */

cmd({
  pattern: "sendimage",
  alias: ["sendimg", "imgdl"],
  react: "🖼️",
  desc: "Send image from URL",
  category: "downloader",
  filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
  try {
    if (!q) return reply("❌ Image URL do");

    const res = await axios.get(q, { responseType: "arraybuffer" });

    await conn.sendMessage(from, {
      image: Buffer.from(res.data),
      caption: `
👑 ╔══════════  👑  ══════════╗ 👑
         ✨ 𝐙𝐀𝐇𝐈𝐃  𝐊𝐈𝐍𝐆 ✨
         🖼️  𝐈𝐌𝐀𝐆𝐄  𝐑𝐄𝐀𝐃𝐘  🖼️
👑 ╚══════════  👑  ══════════╝ 👑

✅ *𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃  𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐄*
┃ ◈ 📥 *Status:* Successfully Fetched
┃ ◈ 🎞️ *Type:* High Quality Image
┃ ◈ 🛡️ *Secure:* Verified by King
┗━━━━━━━━━━━━━━━━━━━━━━━

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Processing Finished...*
   ┃ 👑 King's Service Is Top Notch!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
      *👑 𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 𝒁𝒂𝒉𝒊𝒅 𝑲𝒊𝒏𝒈 👑*
    🛡️ ━━━━━━━━━━━━━━━━━━━━━━ 🛡️
`
    }, { quoted: mek });

  } catch (e) {
    console.error(e);
    reply("❌ Image download failed");
  }
});


/* ================= SEND AUDIO ================= */

cmd({
  pattern: "sendaudio",
  alias: ["sendmp3"],
  react: "🎶",
  desc: "Send audio from URL",
  category: "downloader",
  filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
  try {
    if (!q) return reply("❌ Audio URL do");

    const res = await axios.get(q, { responseType: "arraybuffer" });

    await conn.sendMessage(from, {
      audio: Buffer.from(res.data),
      mimetype: "audio/mpeg",
      ptt: false
    }, { quoted: mek });

  } catch (e) {
    console.error(e);
    reply("❌ Audio download failed");
  }
});


/* ================= SEND VIDEO ================= */

cmd({
  pattern: "sendvideo",
  alias: ["sendmp4"],
  react: "🎥",
  desc: "Send video from URL",
  category: "downloader",
  filename: __filename
}, async (conn, mek, m, { from, q, reply }) => {
  try {
    if (!q) return reply("❌ Video URL do");

    await conn.sendMessage(from, {
      video: { url: q },
      mimetype: "video/mp4"
    }, { quoted: mek });

  } catch (e) {
    console.error(e);
    reply("❌ Video send failed");
  }
});

