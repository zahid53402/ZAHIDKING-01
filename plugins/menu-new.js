const config = require('../config')
const { cmd, commands } = require('../command');
const path = require('path'); 
const os = require("os")
const fs = require('fs');
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["zmenu","Z💞S"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `✧─⋆✦❂✦⋆─✧
┊ ✵ ✫ ˚㋛ ⋆｡  ┊ ☠︎︎ ✧
┊ ✧ ✵ ┊ ✵ ✧
┊ ✦ 
꧁༒  || 'ℤ𝔸ℍ𝕀𝔻𓂃 𝕂𝕀ℕ𝔾 ✍︎𝄞'} ꧂༒ ✦
╰═✧❂✧════════❂✧═╯

╔═✧✦✧══❂══✧✦✧═╗
┃ 🏠  MAIN MENU  🏠
╠════════════════╣
┃ ✫ ˚㋛ ⋆｡ ❀  ┊  ☠︎︎ ✧
┃ ✫ owner   ┊ 'Zᴀʜɪᴅ Kɪɴɢ𓂃✍︎𝄞'} ┊  
┃ ✫ Profile ┊.
╚═✦❂✦═════════╝

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 彡★🆉🅰︎🅷🅸🅳 🅺🅸🅽🅶★彡 🤍*
◇◆◇◆◇◆◇◆◇◆◇
◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
⟬💠⟭──────────────────────
⟬💠⟭ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡
⟬💠⟭──────────────────────
│ 👑 𝗢𝘄𝗻𝗲𝗿    »  *𝙕𝘼𝙃𝙄𝘿 𝙆𝙄𝙉𝙂*
│ 👤 𝗨𝘀𝗲𝗿      »  ムハンマド
│ 🤖 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲  » Zᴀʜɪᴅ Kɪɴɢ
│ 📡 𝗩𝗲𝗿𝘀𝗶𝗼𝗻   »  𝘃𝟮.𝟬.𝟬
│ 💻 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺  »  linux
│ ⚙️ 𝗠𝗼𝗱𝗲      »  [public]
│ 🔣 𝗣𝗿𝗲𝗳𝗶𝘅    »  [.]
│ 📊 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀  »  379 𝗮𝗰𝘁𝗶𝘃𝗲
│ ⏰ 𝗨𝗽𝘁𝗶𝗺𝗲    »  12 hours, 51 minutes, 
⟬💠⟭──────────────────────
◇◆◇◆◇◆◇◆◇◆
◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆
╔════════════════════════╗
║    ✦ 𝗠𝗘𝗡𝗨 𝗦𝗘𝗖𝗧𝗜𝗢𝗡𝗦 ✦    ║
╠════════════════════════╣
║  🏴 𝟭 ➭ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂  ║
║  👥 𝟮 ➭ 𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂     ║
║  😄 𝟯 ➭ 𝗙𝘂𝗻 𝗠𝗲𝗻𝘂       ║
║  👑 𝟰 ➭ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂    ║
║  🤖 𝟱 ➭ 𝗔𝗜 𝗠𝗲𝗻𝘂        ║
║  👘 𝟲 ➭ 𝗔𝗻𝗶𝗺𝗲 𝗠𝗲𝗻𝘂     ║
║  🔄 𝟳 ➭ 𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂   ║
║  📌 𝟴 ➭ 𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂     ║
║  💞 𝟵 ➭ 𝗥𝗲𝗮𝗰𝘁𝗶𝗼𝗻𝘀 𝗠𝗲𝗻𝘂 ║
║  🏠 𝟭𝟬 ➭ 𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂    ║
╚════════════════════════╝
◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆

╔════◇◆◇══════════╗
『📥 *DOWNLOAD MENU* 』
╚════◇◆◇══════════╝
[ *SYSTEM* *CORE* *STAB* *Initializing*..]
├── 🌐 *Social Media*
│ ╭─〔🌐〕 *facebook*
│ ╰─➤ Usage: .facebook [url]
│ ╭─〔🌐〕 *download*
│ ╰─➤ Usage: .download [url]
│ ╭─〔🌐〕 *mediafire*
│ ╰─➤ Usage: .mediafire [url]
│ ╭─〔🌐〕 *tiktok*
│ ╰─➤ Usage: .tiktok [url]
│ ╭─〔🌐〕 *twitter*
│ ╰─➤ Usage: .twitter [url]
│ ╭─〔🌐〕 *insta*
│ ╰─➤ Usage: .insta [url]
│ ╭─〔🌐〕 *apk*
│ ╰─➤ Usage: .apk [app name]
│ ╭─〔🌐〕 *img*
│ ╰─➤ Usage: .img [query]
│ ╭─〔🌐〕 *tt2*
│ ╰─➤ Usage: .tt2 [url]
│ ╭─〔🌐〕 *pins*
│ ╰─➤ Usage: .pins [url]
│ ╭─〔🌐〕 *apk2*
│ ╰─➤ Usage: .apk2 [app]
│ ╭─〔🌐〕 *fb2*
│ ╰─➤ Usage: .fb2 [url]
│ ╭─〔🌐〕 *pinterest*
│ ╰─➤ Usage: .pinterest [query]
├── 🎵 *Music/Video*
│ ╭─〔🎵〕 *spotify*
│ ╰─➤ Usage: .spotify [query]
│ ╭─〔🎵〕 *play*
│ ╰─➤ Usage: .play [song name]
│ ╭─〔🎵〕 *play2-10*
│ ╰─➤ Usage: .play2-10 [song]
│ ╭─〔🎵〕 *audio*
│ ╰─➤ Usage: .audio [url]
│ ╭─〔🎵〕 *video*
│ ╰─➤ Usage: .video [url]
│ ╭─〔🎵〕 *video2-10*
│ ╰─➤ Usage: .video2-10 [url]
│ ╭─〔🎵〕 *ytmp3*
│ ╰─➤ Usage: .ytmp3 [url]
│ ╭─〔🎵〕 *ytmp4*
│ ╰─➤ Usage: .ytmp4 [url]
│ ╭─〔🎵〕 *song*
│ ╰─➤ Usage: .song [name]
│ ╭─〔🎵〕 *darama*
│ ╰─➤ Usage: .darama [name]
[+] *Payload Ready* ✔

╔════◇◆◇══════════╗
『 👥 *GROUP MENU* 』
╚════◇◆◇══════════╝
╭━[🌡️ *MANAGEMENT* ]━━╮
│ ╭─〔👥〕 *grouplink*
│ ╰─➤ Usage: .grouplink
│ ╭─〔👥〕 *kickall*
│ ╰─➤ Usage: .kickall
│ ╭─〔👥〕 *kickall2*
│ ╰─➤ Usage: .kickall2
│ ╭─〔👥〕 *kickall3*
│ ╰─➤ Usage: .kickall3
│ ╭─〔👥〕 *add*
│ ╰─➤ Usage: .add @user
│ ╭─〔👥〕 *remove*
│ ╰─➤ Usage: .remove @user
│ ╭─〔👥〕 *kick*
│ ╰─➤ Usage: .kick @user
╰━━━━━━━━━━━━━━━━━╯
╭─━⚡ *ADMIN TOOLS* ─━╮
│ ╭─〔⚡〕 *promote*
│ ╰─➤ Usage: .promote @user
│ ╭─〔⚡〕 *demote*
│ ╰─➤ Usage: .demote @user
│ ╭─〔⚡〕 *dismiss*
│ ╰─➤ Usage: .dismiss
│ ╭─〔⚡〕 *revoke*
│ ╰─➤ Usage: .revoke
│ ╭─〔⚡〕 *mute*
│ ╰─➤ Usage: .mute [time]
│ ╭─〔⚡〕 *unmute*
│ ╰─➤ Usage: .unmute
│ ╭─〔⚡〕 *lockgc*
│ ╰─➤ Usage: .lockgc
│ ╭─〔⚡〕 *unlockgc*
│ ╰─➤ Usage: .unlockgc
╰─────────────────╯
╔══〔 🏷️ *TAGGING* 〕══╗
│ ╭─〔🏷️〕 *tag*
│ ╰─➤ Usage: .tag @user
│ ╭─〔🏷️〕 *hidetag*
│ ╰─➤ Usage: .hidetag [msg]
│ ╭─〔🏷️〕 *tagall*
│ ╰─➤ Usage: .tagall
│ ╭─〔🏷️〕 *tagadmins*
│ ╰─➤ Usage: .tagadmins
│ ╭─〔🏷️〕 *invite*
│ ╰─➤ Usage: .invite
╚═════════════════╝

╔══════◇◆◇═════════╗
『  *FUN MENU* 』
╚══════◇◆◇═════════╝
╔🎭 *INTERACTIVE MENU* ╗
│ ╭─〔🎭〕 *shapar*
│ ╰─➤ Usage: .shapar
│ ╭─〔🎭〕 *rate*
│ ╰─➤ Usage: .rate @user
│ ╭─〔🎭〕 *insult*
│ ╰─➤ Usage: .insult @user
│ ╭─〔🎭〕 *hack*
│ ╰─➤ Usage: .hack @user
│ ╭─〔🎭〕 *ship*
│ ╰─➤ Usage: .ship @user1 @user2
│ ╭─〔🎭〕 *character*
│ ╰─➤ Usage: .character
│ ╭─〔🎭〕 *pickup*
│ ╰─➤ Usage: .pickup
│ ╭─〔🎭〕 *joke*
│ ╰─➤ Usage: .joke
╚═════════════════╝
───────────────────
╔═👿 *REACTIONS MENU* ═╗
│ ╭─〔👿〕 *love*
│ ╰─➤ Usage: .love
│ ╭─〔👿〕 *happy*
│ ╰─➤ Usage: .happy
│ ╭─〔👿〕 *sad*
│ ╰─➤ Usage: .sad
│ ╭─〔👿〕 *hot*
│ ╰─➤ Usage: .hot
│ ╭─〔👿〕 *heart*
│ ╰─➤ Usage: .heart
│ ╭─〔👿〕 *shy*
│ ╰─➤ Usage: .shy
│ ╭─〔👿〕 *beautiful*
│ ╰─➤ Usage: .beautiful
│ ╭─〔👿〕 *cunfuzed*
│ ╰─➤ Usage: .cunfuzed
│ ╭─〔👿〕 *mon*
│ ╰─➤ Usage: .mon
│ ╭─〔👿〕 *kiss*
│ ╰─➤ Usage: .kiss
│ ╭─〔👿〕 *broke*
│ ╰─➤ Usage: .broke
│ ╭─〔👿〕 *hurt*
│ ╰─➤ Usage: .hurt
╚═════════════════╝

╔════◇◆◇══════════╗
『  *OWNER MENU* 』
╚════◇◆◇══════════╝
╔══ 💗 *USER MENU* ══╗
│ • *Restricted Commands*
│ ╭─〔👑〕 *block*
│ ╰─➤ Usage: .block @user
│ ╭─〔👑〕 *unblock*
│ ╰─➤ Usage: .unblock @user
│ ╭─〔👑〕 *fullpp*
│ ╰─➤ Usage: .fullpp [img]
│ ╭─〔👑〕 *setpp*
│ ╰─➤ Usage: .setpp [img]
│ ╭─〔👑〕 *restart*
│ ╰─➤ Usage: .restart
│ ╭─〔👑〕 *shutdown*
│ ╰─➤ Usage: .shutdown
│ ╭─〔👑〕 *updatecmd*
│ ╰─➤ Usage: .updatecmd
╚═════════════════╝
╔══ ⚠️ *INFO TOOLS* ══╗
│ ╭─〔⚠️〕 *gjid*
│ ╰─➤ Usage: .gjid
│ ╭─〔⚠️〕 *jid*
│ ╰─➤ Usage: .jid @user
│ ╭─〔⚠️〕 *listcmd*
│ ╰─➤ Usage: .listcmd
│ ╭─〔⚠️〕 *allmenu*
│ ╰─➤ Usage: .allmenu
╚═════════════════╝

╔═══🔑 *AI MENU* ════╗
╔═══🔑 *CHAT AI* ════╗
│ ╭─〔🤖〕 *ai*
│ ╰─➤ Usage: .ai [query]
│ ╭─〔🤖〕 *gpt3*
│ ╰─➤ Usage: .gpt3 [query]
│ ╭─〔🤖〕 *gpt2*
│ ╰─➤ Usage: .gpt2 [query]
│ ╭─〔🤖〕 *gpt*
│ ╰─➤ Usage: .gpt [query]
│ ╭─〔🤖〕 *gptmini*
│ ╰─➤ Usage: .gptmini [query]
│ ╭─〔🤖〕 *meta*
│ ╰─➤ Usage: .meta [query]
╚═════════════════╝
╔══◇ *IMG MENU* ◇══╗
│ ╭──────────────
│ │ ╭─〔🖼️〕 *image*
│ │ ╰─➤ Usage: .image [text]
│ │ ╭─〔🖼️〕 *imagine*
│ │ ╰─➤ Usage: .imagine [text]
│ │ ╭─〔🖼️〕 *imagine2*
│ │ ╰─➤ Usage: .imagine2 [text]
│ ╰──────────────
│ ╭──────────────
│ │ 🔍 *Specialized*
│ │ ╭─〔🔍〕 *blackbox*
│ │ ╰─➤ Usage: .blackbox [query]
│ │ ╭─〔🔍〕 *luma*
│ │ ╰─➤ Usage: .luma [query]
│ │ ╭─〔🔍〕 *dj*
│ │ ╰─➤ Usage: .dj [query]
│ │ ╭─〔🔍〕 *irfan*
│ │ ╰─➤ Usage: .irfan [query]
│ ╰──────────────
╚═════════════════╝

╔═════◇◆◇═════════╗
『  *ANIME MENU* 』
╚═════◇◆◇═════════╝
╔═ 🎭 *ANIME IMAGES* ══╗
│ ╭─〔🎭〕 *fack*
│ ╰─➤ Usage: .fack
│ ╭─〔🎭〕 *dog*
│ ╰─➤ Usage: .dog
│ ╭─〔🎭〕 *awoo*
│ ╰─➤ Usage: .awoo
│ ╭─〔🎭〕 *garl*
│ ╰─➤ Usage: .garl
│ ╭─〔🎭〕 *waifu*
│ ╰─➤ Usage: .waifu
│ ╭─〔🎭〕 *neko*
│ ╰─➤ Usage: .neko
│ ╭─〔🎭〕 *megnumin*
│ ╰─➤ Usage: .megnumin
│ ╭─〔🎭〕 *maid*
│ ╰─➤ Usage: .maid
│ ╭─〔🎭〕 *loli*
│ ╰─➤ Usage: .loli
╚════════════════╝
╔ *CHARACTERS MENU* ╗
│ ╭─〔👘〕 *animegirl*
│ ╰─➤ Usage: .animegirl
│ ╭─〔👘〕 *animegirl1-5*
│ ╰─➤ Usage: .animegirl1-5
│ ╭─〔👘〕 *anime1-5*
│ ╰─➤ Usage: .anime1-5
│ ╭─〔👘〕 *foxgirl*
│ ╰─➤ Usage: .foxgirl
│ ╭─〔👘〕 *naruto*
│ ╰─➤ Usage: .naruto
╚════════════════╝

╔═ *CONVERT MENU* ═══╗
╔═ *MEDIA CONVERSION* ═══╗
│ ╭─〔🖼️〕 *sticker*
│ ╰─➤ Usage: .sticker [img]
│ ╭─〔🖼️〕 *sticker2*
│ ╰─➤ Usage: .sticker2 [img]
│ ╭─〔🖼️〕 *emojimix*
│ ╰─➤ Usage: .emojimix 😎+😂
│ ╭─〔🖼️〕 *take*
│ ╰─➤ Usage: .take [name,text]
│ ╭─〔🖼️〕 *tomp3*
│ ╰─➤ Usage: .tomp3 [video]
╚═════════════════╝
╔═🎭 *TEXT TOOLS* ═╗
│ ╭─〔📝〕 *fancy*
│ ╰─➤ Usage: .fancy [text]
│ ╭─〔📝〕 *tts*
│ ╰─➤ Usage: .tts [text]
│ ╭─〔📝〕 *trt*
│ ╰─➤ Usage: .trt [text]
│ ╭─〔📝〕 *base64*
│ ╰─➤ Usage: .base64 [text]
│ ╭─〔📝〕 *unbase64*
│ ╰─➤ Usage: .unbase64 [text]
╚═════════════════╝

╔════◇◆◇══════════╗
『  *OTHER MENU* 』
╚════◇◆◇══════════╝
╔═ 🎭 *UTILITIES* ══╗
│ ╭─〔⏰〕 *timenow*
│ ╰─➤ Usage: .timenow
│ ╭─〔📅〕 *date*
│ ╰─➤ Usage: .date
│ ╭─〔🔢〕 *count*
│ ╰─➤ Usage: .count [num]
│ ╭─〔🧮〕 *calculate*
│ ╰─➤ Usage: .calculate [expr]
│ ╭─〔📊〕 *countx*
│ ╰─➤ Usage: .countx
╚═════════════════╝
╔═══ 🎭 *RANDOM* ════╗
│ ╭─〔🎲〕 *flip*
│ ╰─➤ Usage: .flip
│ ╭─〔🎲〕 *coinflip*
│ ╰─➤ Usage: .coinflip
│ ╭─〔🎨〕 *rcolor*
│ ╰─➤ Usage: .rcolor
│ ╭─〔🎲〕 *roll*
│ ╰─➤ Usage: .roll
│ ╭─〔📚〕 *fact*
│ ╰─➤ Usage: .fact
╚═════════════════╝
╔══🎭 *SEARCH* 🔎 ═══╗
│ ╭─〔🔍〕 *define*
│ ╰─➤ Usage: .define [word]
│ ╭─〔📰〕 *news*
│ ╰─➤ Usage: .news [query]
│ ╭─〔🎬〕 *movie*
│ ╰─➤ Usage: .movie [name]
│ ╭─〔🌤️〕 *weather*
│ ╰─➤ Usage: .weather [loc]
╚═════════════════╝

╔═════◇◆◇═════════╗
『 *REACTION MENU* 』
╚═════◇◆◇═════════╝
╔══ 🎭 *AFFECTION* ══╗
│ ╭─〔❤️〕 *cuddle*
│ ╰─➤ Usage: .cuddle @user
│ ╭─〔🤗〕 *hug*
│ ╰─➤ Usage: .hug @user
│ ╭─〔💋〕 *kiss*
│ ╰─➤ Usage: .kiss @user
│ ╭─〔👅〕 *lick*
│ ╰─➤ Usage: .lick @user
│ ╭─〔🤚〕 *pat*
│ ╰─➤ Usage: .pat @user
╚═════════════════╝
╔════ 🎭 *FUNNY* ════╗
│ ╭─〔👊〕 *bully*
│ ╰─➤ Usage: .bully @user
│ ╭─〔🔨〕 *bonk*
│ ╰─➤ Usage: .bonk @user
│ ╭─〔🚀〕 *yeet*
│ ╰─➤ Usage: .yeet @user
│ ╭─〔👋〕 *slap*
│ ╰─➤ Usage: .slap @user
│ ╭─〔🔪〕 *kill*
│ ╰─➤ Usage: .kill @user
╚═════════════════╝
╔═ 🎭 *EXPRESSIONS* ═╗
│ ╭─〔😊〕 *blush*
│ ╰─➤ Usage: .blush @user
│ ╭─〔😄〕 *smile*
│ ╰─➤ Usage: .smile @user
│ ╭─〔😁〕 *happy*
│ ╰─➤ Usage: .happy @user
│ ╭─〔😉〕 *wink*
│ ╰─➤ Usage: .wink @user
│ ╭─〔👉〕 *poke*
│ ╰─➤ Usage: .poke @user
╚═════════════════╝

╔════◇◆◇══════════╗
『  *MAIN MENU* 』
╚════◇◆◇══════════╝
╔═══════════════════╗
║ ✦ BOT CONTROLS ✦ ║
╠═══════════════════╣
⟬💠⟭ ▣ CMD: *ping*
┃★│ ▹ STATUS: Bot Latency
⟬💠⟭ ▣ CMD: *live*
┃★│ ▹ STATUS: Bot Live Status
⟬💠⟭ ▣ CMD: *alive*
┃★│ ▹ STATUS: Bot Alive Check
⟬💠⟭ ▣ CMD: *runtime*
┃★│ ▹ STATUS: Bot Runtime
⟬💠⟭ ▣ CMD: *uptime*
┃★│ ▹ STATUS: Bot Uptime
⟬💠⟭ ▣ CMD: *repo*
┃★│ ▹ STATUS: Repository Link
⟬💠⟭ ▣ CMD: *owner*
┃★│ ▹ STATUS: Owner Info
⟬💠⟭ ▣ CMD: *menu*
┃★│ ▹ STATUS: Show Main Menu
⟬💠⟭ ▣ CMD: *menu2*
┃★│ ▹ STATUS: Alternative Menu
⟬💠⟭ ▣ CMD: *restart*
┃★│ ▹ STATUS: Restart Bot
⟬💠⟭────────────────
╚═══════════════════╝

◇◆◇◆◇◆◇◆◇◆◇
> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 彡★🆉🅰︎🅷🅸🅳 🅺🅸🅽🅶★彡 🤍*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ *𝙕𝘼𝙃𝙄𝘿 𝙆𝙄𝙉𝙂* ❣️
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/TxSCwf8B/temp.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363424512151830@newsletter',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );
// share local audio 

const audioPath = path.join(__dirname, '../assets/menu.m4a');
await conn.sendMessage(from, {
    audio: fs.readFileSync(audioPath),
    mimetype: 'audio/mp4',
    ptt: false,
}, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});


