const config = require('../config')
const { cmd } = require('../command')

let antiDelete = config.ANTI_DELETE === "true"

cmd({
pattern: "antidelete",
desc: "Enable or disable anti delete",
category: "owner"
},
async(conn, mek, m, { args, reply }) => {

if(!args[0]) return reply("Use:\n.antidelete on\n.antidelete off")

if(args[0] === "on"){
antiDelete = true
return reply("🛡 Anti Delete Enabled")
}

if(args[0] === "off"){
antiDelete = false
return reply("🔕 Anti Delete Disabled")
}

})


module.exports = async(conn, update) => {

try{

if(!antiDelete) return

for(const msg of update){

if(msg.update?.message === null){

let key = msg.key
let jid = key.remoteJid

let deletedMsg = msg.message

if(!deletedMsg) return

let path = config.ANTI_DEL_PATH

let target = path === "same" ? jid : conn.user.id

await conn.sendMessage(target,{
text:`🛡 *ANTI DELETE DETECTED*

👤 User: @${key.participant?.split("@")[0] || "unknown"}

📄 Message was deleted.`
},{
mentions:[key.participant]
})

}

}

}catch(e){

console.log(e)

}

}
