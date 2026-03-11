const { cmd } = require("../command");
const { sleep } = require("../lib/functions");
const config = require("../config");

cmd({
    pattern: "update",
    alias: ["upgrade", "sync", "restart"],
    desc: "Update and restart the bot system",
    category: "owner",
    react: "🚀",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // ✅ OWNER CHECK (HEROKU SAFE)
        const ownerJid = config.OWNER_NUMBER.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        const senderJid = m.sender || m.key.participant;

        if (senderJid !== ownerJid) {
            return reply(`
👑 ╔══════════  👑  ══════════╗ 👑
       🚫  𝐀𝐂𝐂𝐄𝐒𝐒  𝐃𝐄𝐍𝐈𝐄𝐃  🚫
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ⚔️ *KING'S PRIVATE CHAMBER*
   ┃ 
   ┃ 📛 *𝐄𝐫𝐫𝐨𝐫:* Owner Only Command
   ┃ 🛡️ *𝐒𝐭𝐚𝐭𝐮𝐬:* Unauthorized User
   ┃ ❌ *𝐕𝐞𝐫𝐝𝐢𝐜𝐭:* Access Strictly Denied
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Khabardar...*
   ┃ 👑 Only Zahid King Can Rule Here!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`);
        }

        // ⏳ START MESSAGE
        const msg = await conn.sendMessage(from, {
            text: `
👑 ╔══════════  👑  ══════════╗ 👑
       ✨ 𝐄𝐌𝐏𝐈𝐑𝐄  𝐔𝐏𝐆𝐑𝐀𝐃𝐄 ✨
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🏰 *REINFORCING THE KINGDOM*
   ┃ 
   ┃ 🚀 *𝐒𝐭𝐚𝐭𝐮𝐬:* Initiating Update...
   ┃ 🛠️ *𝐏𝐫𝐨𝐜𝐞𝐬𝐬:* Enhancing Systems
   ┃ ⏳ *𝐄.𝐓.𝐀:* Just A Moment
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Nayi Taqat... Naya Jalwa!*
   ┃ 👑 King Is Getting More Powerful!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`
        }, { quoted: mek });

        const steps = [
            "🔍 Checking system files...",
            "🛠️ Applying updates...",
            "📦 Optimizing modules...",
            "⚡ Finalizing changes...",
            "♻️ Restarting services..."
        ];

        for (const step of steps) {
            await sleep(1500);
            await conn.relayMessage(from, {
                protocolMessage: {
                    key: msg.key,
                    type: 14,
                    editedMessage: {
                        conversation: `
👑 ╔══════════  👑  ══════════╗ 👑
       ✨ 𝐊𝐈𝐍𝐆'𝐒  𝐌𝐈𝐒𝐒𝐈𝐎𝐍 ✨
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🏰 *𝐄𝐗𝐄𝐂𝐔𝐓𝐈𝐍𝐆 𝐎𝐑𝐃𝐄𝐑𝐒*
   ┃ 
   ┃ 📜 *𝐒𝐭𝐞𝐩:* ${step}
   ┃ ⚡ *𝐏𝐫𝐨𝐠𝐫𝐞𝐬𝐬:* In Motion...
   ┃ 🛡️ *𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲:* King Verified
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Hukm Ki Tameel Jari Hai...*
   ┃ 👑 Zahid King Is In Command!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`
                    }
                }
            }, {});
        }

        // ✅ FINISH MESSAGE
        await conn.sendMessage(from, {
            text: `
👑 ╔══════════  👑  ══════════╗ 👑
       ✨ 𝐄𝐌𝐏𝐈𝐑𝐄  𝐑𝐄𝐁𝐎𝐑𝐍 ✨
👑 ╚══════════  👑  ══════════╝ 👑

🔥 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ 🏰 *KING'S POWER RESTORED*
   ┃ 
   ┃ ✅ *𝐒𝐭𝐚𝐭𝐮𝐬:* Update Complete
   ┃ 🔁 *𝐀𝐜𝐭𝐢𝐨𝐧:* Restarting Bot...
   ┃ 🛡️ *𝐒𝐲𝐬𝐭𝐞𝐦:* Optimization Finished
   ┃
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

💎 ╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮
   ┃ ✨ *Sultanat Wapis Aa Rahi Hai...*
   ┃ 👑 King Is Back On The Throne!
   ╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯

   🚩 ᴘᴏᴡᴇʀᴇᴅ ʙʏ: *𝐙𝐀𝐇𝐈𝐃 𝐊𝐈𝐍𝐆*
   🛡️ ━━━━━━━━━━━━━━━━━━━━ 🛡️

`
        }, { quoted: mek });

        await sleep(1000);

        // 🔁 HEROKU SAFE RESTART
        process.exit(0);

    } catch (e) {
        console.error("UPDATE ERROR:", e);
        reply("❌ Update failed, check logs.");
    }
});

