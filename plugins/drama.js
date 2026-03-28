const config = require('../config')
const { cmd } = require('../command')
const yts = require('yt-search')

cmd({
    pattern: "drama",
    desc: "Search drama & episodes",
    category: "search",
    react: "🎬",
    filename: __filename
},

async (conn, mek, m, { from, reply, text }) => {

    try {

        if (!text) return reply("❌ Drama name do\nExample:\n.drama Ertugrul\n.drama Ertugrul 1")

        let args = text.split(" ")
        let epNumber = parseInt(args[args.length - 1])
        let isEpisode = !isNaN(epNumber)

        let name = isEpisode ? args.slice(0, -1).join(" ") : text

        // 🔍 YouTube search (stable)
        let search = await yts(name + " drama")
        let video = search.videos[0]

        if (!video) return reply("❌ Drama nahi mila")

        // ======================
        // 🎬 CASE 1: Drama Info + Episodes List
        // ======================
        if (!isEpisode) {

            let list = `╭━━━〔 *DRAMA FOUND* 〕━━━┈⊷
┃★ 🎬 ${video.title}
┃★ ⏱ ${video.timestamp}
╰━━━━━━━━━━━━━━━┈⊷

╭━━━〔 *EPISODES (Manual)* 〕━━━┈⊷
┃★ 1️⃣ Episode 1
┃★ 2️⃣ Episode 2
┃★ 3️⃣ Episode 3
┃★ 4️⃣ Episode 4
┃★ 5️⃣ Episode 5
╰━━━━━━━━━━━━━━━┈⊷

💡 Use:
.drama ${name} 1`

            await conn.sendMessage(from, {
                image: { url: video.thumbnail },
                caption: list
            }, { quoted: mek })

        }

        // ======================
        // 🎥 CASE 2: Episode Open
        // ======================
        else {

            let epSearch = await yts(`${name} episode ${epNumber}`)
            let epVideo = epSearch.videos[0]

            if (!epVideo) return reply("❌ Episode nahi mila")

            let msg = `╭━━━〔 *EPISODE* 〕━━━┈⊷
┃★ 🎬 ${epVideo.title}
┃★ ⏱ ${epVideo.timestamp}
╰━━━━━━━━━━━━━━━┈⊷

🔗 Watch:
${epVideo.url}`

            await conn.sendMessage(from, {
                image: { url: epVideo.thumbnail },
                caption: msg
            }, { quoted: mek })

        }

    } catch (e) {

        console.log(e)
        reply("❌ Drama error bhai")

    }

})
