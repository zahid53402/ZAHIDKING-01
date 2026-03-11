const { cmd } = require('../command')

cmd({
pattern: "test",
desc: "test command",
category: "test"
},
async (conn, mek, m, { reply }) => {

reply("Command working ✅")

})
