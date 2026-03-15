const { cmd } = require('../command');

let antiDelete = true;

cmd({
    pattern: "antidelete",
    alias: ["delete"],
    desc: "Turn on/off anti delete",
    category: "group",
    react: "🛡️",
    filename: __filename
},
async (conn, mek, m, { from, args, reply, isGroup, isAdmins, isOwner }) => {

    if (!isGroup) return reply("❌ This command works only in groups.");

    if (!isAdmins && !isOwner) return reply("❌ Admin only command.");

    if (!args[0]) {
        return reply(`🛡️ AntiDelete Status: *${antiDelete ? "ON" : "OFF"}*\n\nExample:\n.antidelete on\n.antidelete off`);
    }

    if (args[0] === "on") {
        antiDelete = true;
        return reply("✅ AntiDelete Enabled");
    }

    if (args[0] === "off") {
        antiDelete = false;
        return reply("❌ AntiDelete Disabled");
    }

});
