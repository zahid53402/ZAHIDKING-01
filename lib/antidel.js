const fs = require("fs");
const path = require("path");

async function AntiDelete(conn, update, msgStore) {
try {

let key = update.key;

if (!key) return;

let deletedMsg = msgStore.get(key.id);

if (!deletedMsg) return;

let user = key.participant || key.remoteJid;

await conn.sendMessage(key.remoteJid, {
text: `⚠️ *Deleted Message Recovered*\nUser: @${user.split("@")[0]}`,
mentions: [user]
});

await conn.sendMessage(
key.remoteJid,
deletedMsg.message,
{ quoted: deletedMsg }
);

} catch (err) {
console.log("AntiDelete Error:", err.message);
}
}

// OPTIONAL TEXT FORMAT
function DeletedText(user) {
return `⚠️ *Deleted Message*\nUser: @${user.split("@")[0]}`;
}

// OPTIONAL MEDIA FORMAT
function DeletedMedia(user) {
return `⚠️ *Deleted Media*\nUser: @${user.split("@")[0]}`;
}

module.exports = {
AntiDelete,
DeletedText,
DeletedMedia
};
