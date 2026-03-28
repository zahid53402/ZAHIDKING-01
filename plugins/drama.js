const config = require('../config')
const { cmd } = require('../command')
const fetch = require('node-fetch')

cmd({
    pattern: "drama",
    desc: "Search drama + episodes",
    category: "search",
    react: "🎬",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Drama ka naam likho\nExample:\n.drama dark\n.drama dark 1")

        let args = text.split(" ")
        let epNumber = parseInt(args[args.length - 1])
        let isEpisode = !isNaN(epNumber)
        let name = isEpisode ? args.slice(0, -1).join(" ") : text

        let show, episodes

        // =====================
        // 🔥 TRY API 1 (TVMAZE)
        // =====================
        try {
            let res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(name)}`)
            let json = await res.json()

            if (!json.length) throw "No result"

            show = json[0].show

            let epRes = await fetch(`https://api.tvmaze.com/shows/${show.id}/episodes`)
            episodes = await epRes.json()

        } catch (e) {

            console.log("API1 fail, trying backup...")

            // =====================
            // 🔥 BACKUP API (Fake fallback)
            // =====================
            // agar real backup nahi ho to basic info show karo
            return reply("❌ API down hai 😢\nBaad me try karo ya dusra drama search karo")
        }

        // =====================
        // 🎬 Drama + Episodes list
        // =====================
        if (!isEpisode) {

            let list = `╭━━━〔 *DRAMA INFO* 〕━━━┈⊷
┃★ 🎬 ${show.name}
┃★ ⭐ Rating: ${show.rating?.average || "N/A"}
┃★ 📅 ${show.premiered || "N/A"}
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 *EPISODES* 〕━━━┈⊷
`

            episodes.slice(0, 20).forEach((ep, i) => {
                list += `┃★ ${i+1}. S${ep.season}E${ep.number} - ${ep.name}\n`
            })

            list += `╰━━━━━━━━━━━━━━━┈⊷\n\n💡 Use:\n.drama ${show.name} 1`

            await conn.sendMessage(from, {
                image: { url: show.image?.original || "" },
                caption: list
            }, { quoted: mek })

        } 
        
        // =====================
        // 🎥 Episode fetch
        // =====================
        else {

            let found = episodes[epNumber - 1]

            if (!found) return reply("❌ Episode nahi mila")

            let msg = `🎬 ${show.name}
📺 Episode ${epNumber}
📝 ${found.name}

🔗 ${found.url}`

            await conn.sendMessage(from, {
                image: { url: show.image?.original || "" },
                caption: msg
            }, { quoted: mek })

        }

    } catch (e) {

        console.log(e)
        reply("❌ System error bhai")

    }

})
