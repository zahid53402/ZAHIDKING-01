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
        
        // agar last value number hai → episode request
        let epNumber = parseInt(args[args.length - 1])
        let isEpisode = !isNaN(epNumber)

        let name = isEpisode ? args.slice(0, -1).join(" ") : text

        // 🔍 search drama
        let res = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(name)}`)
        let json = await res.json()

        if (!json.length) return reply("❌ Drama nahi mila 😢")

        let show = json[0].show

        // 📺 get all episodes
        let epRes = await fetch(`https://api.tvmaze.com/shows/${show.id}/episodes`)
        let episodes = await epRes.json()

        // =========================
        // 🎬 CASE 1: Sirf drama name
        // =========================
        if (!isEpisode) {

            let list = `╭━━━〔 *DRAMA INFO* 〕━━━┈⊷
┃★ 🎬 ${show.name}
┃★ ⭐ Rating: ${show.rating.average || "N/A"}
┃★ 📅 ${show.premiered || "N/A"}
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 *EPISODES* 〕━━━┈⊷
`

            episodes.slice(0, 20).forEach((ep, i) => {
                list += `┃★ ${i+1}. S${ep.season}E${ep.number} - ${ep.name}\n`
            })

            list += `╰━━━━━━━━━━━━━━━┈⊷

💡 Episode dekhne ke liye:
.drama ${show.name} 1`

            await conn.sendMessage(from, {
                image: { url: show.image?.original || "" },
                caption: list
            }, { quoted: mek })

        } 
        
        // =========================
        // 🎥 CASE 2: Episode number diya
        // =========================
        else {

            let found = episodes[epNumber - 1]

            if (!found) return reply("❌ Episode nahi mila")

            let msg = `╭━━━〔 *EPISODE INFO* 〕━━━┈⊷
┃★ 🎬 ${show.name}
┃★ 📺 Episode ${epNumber}
┃★ 📝 ${found.name}
┃★ 📅 ${found.airdate}
╰━━━━━━━━━━━━━━━┈⊷

🔗 Watch Link:
${found.url}

⚠️ Note:
Free API me 1080p direct nahi milta 😅
Best available link diya hai`

            await conn.sendMessage(from, {
                image: { url: show.image?.original || "" },
                caption: msg
            }, { quoted: mek })

        }

    } catch (e) {

        console.log(e)
        reply("❌ Error aya bhai")

    }

})
