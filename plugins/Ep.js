const { cmd } = require('../command')
const fetch = require('node-fetch')
const { lastDrama } = require('../lib/store') // global store

cmd({
    pattern: "ep",
    desc: "Get drama episodes",
    category: "search",
    react: "📺",
    filename: __filename
},

async (conn, mek, m, { from, reply }) => {

    try {

        if (!lastDrama[from]) return reply("❌ Pehle .drama search karo bhai")

        let res = await fetch(`https://api.tvmaze.com/shows/${lastDrama[from]}/episodes`)
        let episodes = await res.json()

        let list = `╭━━━〔 *EPISODES LIST* 〕━━━┈⊷\n`

        episodes.slice(0, 15).forEach(ep => {
            list += `┃★ 📺 S${ep.season}E${ep.number} - ${ep.name}\n`
        })

        list += `╰━━━━━━━━━━━━━━━┈⊷\n\n> Total Episodes: ${episodes.length}`

        await conn.sendMessage(from, {
            text: list
        }, { quoted: mek })

    } catch (e) {

        console.log(e)
        reply("❌ Episode fetch error")

    }

})
