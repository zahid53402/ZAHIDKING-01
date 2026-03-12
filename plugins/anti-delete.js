const config = require("../config")

async function AntiDelete(conn, updates){

if(config.ANTI_DELETE !== "true") return

for(const update of updates){

if(update.update && update.update.message === null){

const key = update.key
const jid = key.remoteJid
const user = key.participant || jid

let target = config.ANTI_DEL_PATH === "same" ? jid : conn.user.id

await conn.sendMessage(target,{
text:`🛡 *ANTI DELETE*

👤 User: @${user.split("@")[0]}
⚠️ A message was deleted.`,
mentions:[user]
})

}

}

}

module.exports = { AntiDelete }
