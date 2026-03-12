
global.gc = global.gc || (() => {});
let memoryCleanInterval = null;

function setupMemoryOptimization() {
    memoryCleanInterval = setInterval(() => {
        try {
            if (global.gc) {
                global.gc();
            }
            const memoryUsage = process.memoryUsage();
            console.log(`🔄 Memory Cleaned - Heap: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)}MB`);
        } catch (err) {
            console.error("Memory cleanup error:", err.message);
        }
    }, 30000);
}

setupMemoryOptimization();

// ==================== ULTRA PRO SPEED BOOSTER ====================
const speedCache = {
    groups: new Map(),
    users: new Map(),
    commands: null,
    lastClean: Date.now()
};

let perfStats = {
    msgCount: 0,
    avgResponse: 0,
    startTime: Date.now()
};

const msgQueue = [];
let processing = false;

const processQueue = async () => {
    if (processing || msgQueue.length === 0) return;
    processing = true;
    
    const batch = msgQueue.splice(0, 2);
    for (const msg of batch) {
        try {
            await handleMessageUltra(msg);
        } catch(e) {}
        await new Promise(r => setTimeout(r, 50));
    }
    
    processing = false;
    if (msgQueue.length > 0) setTimeout(processQueue, 20);
};

setInterval(() => {
    const now = Date.now();
    const mem = process.memoryUsage();
    
    console.log(`
    ⚡ MEMORY STATS ⚡
    🧠 Heap: ${(mem.heapUsed / 1024 / 1024).toFixed(1)}MB
    🗃️  Cache: ${speedCache.groups.size} groups
    📨 Queue: ${msgQueue.length}
    `);
    
    if (mem.heapUsed / 1024 / 1024 > 400) {
        console.log("⚠️ High memory, clearing cache...");
        speedCache.groups.clear();
        speedCache.users.clear();
        msgQueue.length = 0;
    }
    
    if (now - speedCache.lastClean > 120000) {
        for (const [key, val] of speedCache.groups.entries()) {
            if (now - val.timestamp > 180000) speedCache.groups.delete(key);
        }
        speedCache.lastClean = now;
    }
}, 30000);

// ==================== REQUIRED MODULES ====================
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    isJidBroadcast,
    getContentType,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    generateMessageID,
    jidDecode,
    fetchLatestBaileysVersion,
    Browsers,
    makeCacheableSignalKeyStore,
    delay
} = require('@whiskeysockets/baileys');

const fs = require('fs');
const ff = require('fluent-ffmpeg');
const P = require('pino');
const qrcode = require('qrcode-terminal');
const util = require('util');
const FileType = require('file-type');
const axios = require('axios');
const bodyparser = require('body-parser');
const os = require('os');
const Crypto = require('crypto');
const path = require('path');
const chalk = require('chalk');
const { exec } = require('child_process');
const moment = require('moment');
const speed = require('performance-now');

// ==================== CONFIG ====================
const config = require('./config');
const prefix = config.PREFIX || '.';
const ownerNumber = config.OWNER_NUMBER ? config.OWNER_NUMBER.split(',').map(n => n.trim()) : ['923044154575'];

// ==================== COMMAND HANDLER - FIXED ====================
let commands = [];
const aliases = new Map();

// PEHLE SARE PLUGINS LOAD KARO - TAKE COMMANDS ADD HONGE
console.log(chalk.blue('📁 Loading plugins first...'));
const pluginsDir = path.join(__dirname, 'plugins');
if (fs.existsSync(pluginsDir)) {
    const pluginFiles = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'));
    
    for (const file of pluginFiles) {
        try {
            const pluginPath = path.join(pluginsDir, file);
            delete require.cache[require.resolve(pluginPath)];
            require(pluginPath);
        } catch (err) {
            console.log(chalk.red(`❌ Error in ${file}: ${err.message}`));
        }
    }
}

// AB COMMAND.JS SE COMMANDS LOAD KARO
try {
    const cmdModule = require('./command');
    if (cmdModule.commands && cmdModule.commands.length > 0) {
        commands = cmdModule.commands;
        console.log(chalk.green(`✅ Total Commands loaded from command.js: ${commands.length}`));
    } else {
        console.log(chalk.yellow("⚠️ No commands found in command.js"));
    }
} catch (e) {
    console.log(chalk.yellow(`⚠️ Command module error: ${e.message}`));
}

// ALIASES SET KARO
commands.forEach(cmd => {
    if (cmd.alias && Array.isArray(cmd.alias)) {
        cmd.alias.forEach(alias => {
            aliases.set(alias, cmd.pattern);
        });
    }
});

// ==================== LIB IMPORTS ====================
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson } = require('./lib/functions');
const { getBuffer: getBuffer2, getGroupAdmins: getGroupAdmins2, getRandom: getRandom2, h2k: h2k2, isUrl: isUrl2, Json: Json2, runtime: runtime2, sleep: sleep2, fetchJson: fetchJson2, saveConfig, empiretourl } = require('./lib/functions2');
const { sms, downloadMediaMessage } = require('./lib/msg');
const GroupEvents = require('./lib/groupevents');
const { AntiDelete, DeletedText, DeletedMedia } = require('./lib/antidel');
const { DATABASE } = require('./lib/database');
const { fetchGif, gifToVideo } = require('./lib/fetchGif');
const { fetchImage, fetchGif: fetchGif2, gifToSticker } = require('./lib/sticker-utils');
const { videoToWebp } = require('./lib/video-utils');

// ==================== DATA IMPORTS ====================
const { 
    AntiDelDB,
    initializeAntiDeleteSettings,
    setAnti,
    getAnti,
    getAllAntiDeleteSettings 
} = require('./data/antidel');

const { 
    saveContact,
    loadMessage,
    getName,
    getChatSummary,
    saveGroupMetadata,
    getGroupMetadata,
    saveMessageCount,
    getInactiveGroupMembers,
    getGroupMembersMessageCount,
    saveMessage 
} = require('./data/store');

const { setCommitHash, getCommitHash } = require('./data/updateDB');
const converter = require('./data/converter');
const stickerConverter = require('./data/sticker-converter');

// ==================== ASSETS ====================
let autoReply = {};
let autoSticker = {};
let autoVoice = {};

try {
    if (fs.existsSync('./assets/autoreply.json')) {
        autoReply = JSON.parse(fs.readFileSync('./assets/autoreply.json'));
        console.log(chalk.green("✅ Auto-reply loaded:"), Object.keys(autoReply).length, "triggers");
    }
} catch (e) {
    console.log(chalk.yellow("⚠️ Auto-reply load error:"), e.message);
}

try {
    if (fs.existsSync('./assets/autosticker.json')) {
        autoSticker = JSON.parse(fs.readFileSync('./assets/autosticker.json'));
        console.log(chalk.green("✅ Auto-sticker loaded:"), Object.keys(autoSticker).length, "triggers");
    }
} catch (e) {
    console.log(chalk.yellow("⚠️ Auto-sticker load error:"), e.message);
}

try {
    if (fs.existsSync('./assets/autovoice.json')) {
        autoVoice = JSON.parse(fs.readFileSync('./assets/autovoice.json'));
        console.log(chalk.green("✅ Auto-voice loaded:"), Object.keys(autoVoice).length, "triggers");
    }
} catch (e) {
    console.log(chalk.yellow("⚠️ Auto-voice load error:"), e.message);
}

// ==================== BAN/SUDO ====================
let banList = [];
let sudoList = [];

try {
    if (fs.existsSync('./lib/ban.json')) {
        banList = JSON.parse(fs.readFileSync('./lib/ban.json'));
        console.log(chalk.green("✅ Ban list loaded:"), banList.length, "users");
    }
} catch (e) {
    console.log(chalk.yellow("⚠️ Ban list load error:"), e.message);
}

try {
    if (fs.existsSync('./lib/sudo.json')) {
        sudoList = JSON.parse(fs.readFileSync('./lib/sudo.json'));
        console.log(chalk.green("✅ Sudo list loaded:"), sudoList.length, "users");
    }
} catch (e) {
    console.log(chalk.yellow("⚠️ Sudo list load error:"), e.message);
}

// ==================== TEMP DIR ====================
const tempDir = path.join(os.tmpdir(), 'cache-temp');
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
}

const clearTempDir = () => {
    try {
        const files = fs.readdirSync(tempDir);
        const now = Date.now();
        for (const file of files) {
            const filePath = path.join(tempDir, file);
            try {
                const stats = fs.statSync(filePath);
                if (now - stats.mtimeMs > 10 * 60 * 1000) {
                    fs.unlinkSync(filePath);
                }
            } catch (err) {}
        }
    } catch (err) {}
};

setInterval(clearTempDir, 5 * 60 * 1000);

// ==================== SESSION HANDLER ====================
async function initializeSession() {
    console.log("\n🔐 ==============================");
    console.log("🔐 SESSION INITIALIZATION");
    console.log("🔐 ==============================\n");
    
    const sessionDir = path.join(__dirname, 'sessions');
    if (!fs.existsSync(sessionDir)) {
        fs.mkdirSync(sessionDir, { recursive: true });
    }
    
    const credsPath = path.join(sessionDir, 'creds.json');
    
    if (config.SESSION_ID && config.SESSION_ID.trim() !== "" && !fs.existsSync(credsPath)) {
        try {
            console.log("📦 Loading session from SESSION_ID...");
            
            let sessdata = config.SESSION_ID;
            
            const prefixes = ['MAFIA-MD~', 'BOSS-MD~', 'EMYOU~', 'BOT~','ARSLAN-MD~'];
            for (const p of prefixes) {
                if (sessdata.includes(p)) {
                    sessdata = sessdata.split(p)[1];
                    break;
                }
            }
            
            sessdata = sessdata.trim();
            while (sessdata.length % 4 !== 0) {
                sessdata += '=';
            }
            
            const decodedData = Buffer.from(sessdata, 'base64').toString('utf-8');
            
            try {
                const jsonData = JSON.parse(decodedData);
                fs.writeFileSync(credsPath, JSON.stringify(jsonData, null, 2));
                console.log("✅ Session loaded successfully!");
            } catch (jsonErr) {
                console.log("⚠️ Not JSON, saving as raw");
                fs.writeFileSync(credsPath, decodedData);
            }
        } catch (err) {
            console.error("❌ Session error:", err.message);
        }
    }
}

// ==================== MESSAGE STORE FOR ANTI-DELETE ====================
const messageStore = new Map();

async function storeMessageForAntiDelete(message) {
    try {
        if (!message || !message.key || !message.message) return;
        if (message.key.fromMe) return;
        
        const messageId = message.key.id;
        const now = Date.now();
        
        messageStore.set(messageId, {
            id: messageId,
            key: {
                remoteJid: message.key.remoteJid,
                fromMe: false,
                id: message.key.id,
                participant: message.key.participant
            },
            message: JSON.parse(JSON.stringify(message.message)),
            timestamp: message.messageTimestamp || Math.floor(now / 1000),
            receivedAt: now
        });
        
        // Save to data store
        await saveMessage(message).catch(() => {});
        
        // Keep only last 500 messages
        if (messageStore.size > 500) {
            const oldestKeys = [...messageStore.keys()].slice(0, 100);
            for (const key of oldestKeys) {
                messageStore.delete(key);
            }
        }
        
        // Save media messages to file for anti-delete
        if (message.message?.imageMessage || message.message?.videoMessage || 
            message.message?.audioMessage || message.message?.documentMessage) {
            const antiDeleteDir = path.join(__dirname, 'anti_delete_cache');
            if (!fs.existsSync(antiDeleteDir)) {
                fs.mkdirSync(antiDeleteDir, { recursive: true });
            }
            const filePath = path.join(antiDeleteDir, `${messageId}.json`);
            fs.writeFileSync(filePath, JSON.stringify({
                key: message.key,
                message: message.message,
                timestamp: message.messageTimestamp
            }, null, 2));
        }
    } catch (err) {}
}

async function loadDeletedMessage(messageId) {
    try {
        if (messageStore.has(messageId)) {
            return messageStore.get(messageId);
        }
        
        // Try from data store
        const dbMsg = await loadMessage(messageId).catch(() => null);
        if (dbMsg) return dbMsg;
        
        // Try from file
        const antiDeleteDir = path.join(__dirname, 'anti_delete_cache');
        const filePath = path.join(antiDeleteDir, `${messageId}.json`);
        if (fs.existsSync(filePath)) {
            return JSON.parse(fs.readFileSync(filePath));
        }
        
        return null;
    } catch (err) {
        return null;
    }
}

// ==================== ULTRA FAST MESSAGE HANDLER ====================
async function handleMessageUltra(message) {
    perfStats.msgCount++;
    const startTime = Date.now();
    
    try {
        if (!message || !message.message || message.key.fromMe) return;
        
        const type = Object.keys(message.message)[0];
        if (type === 'protocolMessage' || type === 'senderKeyDistributionMessage') return;
        
        const from = message.key.remoteJid;
        const isGroup = from.endsWith('@g.us');
        
        // Ultra Fast Group Cache
        let groupMetadata = null;
        if (isGroup && conn) {
            const cached = speedCache.groups.get(from);
            if (cached && (Date.now() - cached.timestamp < 120000)) {
                groupMetadata = cached.data;
            } else {
                try {
                    groupMetadata = await conn.groupMetadata(from).catch(() => null);
                    if (groupMetadata) {
                        speedCache.groups.set(from, {
                            data: groupMetadata,
                            timestamp: Date.now()
                        });
                    }
                } catch (e) {}
            }
        }
        
        // Update Performance Stats
        perfStats.avgResponse = Math.round(
            (perfStats.avgResponse * 0.8) + ((Date.now() - startTime) * 0.2)
        );
        
    } catch(error) {}
}

// ==================== MAIN CONNECTION FUNCTION ====================
let conn;

async function connectToWA() {
    console.log("\n📱 ==============================");
    console.log("📱 CONNECTING TO WHATSAPP");
    console.log("📱 ==============================\n");
    
    try {
        await initializeSession();
        
        const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, 'sessions'));
        const { version } = await fetchLatestBaileysVersion();
        
        conn = makeWASocket({
            logger: P({ level: 'silent' }),
            printQRInTerminal: false,
            browser: Browsers.macOS("Firefox"),
            syncFullHistory: false,
            auth: state,
            version,
            markOnlineOnConnect: config.ALWAYS_ONLINE === 'true',
            emitOwnEvents: false,
            fireInitQueries: false,
            retryRequestDelayMs: 100,
            generateHighQualityLinkPreview: true,
            defaultQueryTimeoutMs: 60000,
            connectTimeoutMs: 60000,
            keepAliveIntervalMs: 10000,
        });
        
        conn.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect, qr } = update;
            
            if (qr) {
                console.log("📱 QR Code received - Scan with WhatsApp");
                qrcode.generate(qr, { small: true });
            }
            
            if (connection === 'connecting') {
                console.log('Connecting to WhatsApp...');
            }
            
            if (connection === 'close') {
                const shouldReconnect = lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut;
                const statusCode = lastDisconnect?.error?.output?.statusCode;
                
                console.log(`❌ Connection closed - Status: ${statusCode}`);
                
                if (statusCode === DisconnectReason.loggedOut || statusCode === 401) {
                    try {
                        fs.rmSync('./sessions', { recursive: true, force: true });
                        console.log('⚠️ Session logged out. Please re-authenticate');
                    } catch (error) {
                        console.log(`❌ Error deleting session: ${error.message}`);
                    }
                }
                
                if (shouldReconnect) {
                    console.log('Reconnecting in 5 seconds...');
                    setTimeout(connectToWA, 5000);
                }
            }
            
            if (connection === 'open') {
                console.log('\n🧬 Installing Plugins');
                
                // Load plugins count
                let pluginCount = 0;
                try {
                    const pluginsDir = path.join(__dirname, 'plugins');
                    if (fs.existsSync(pluginsDir)) {
                        const pluginFiles = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'));
                        pluginCount = pluginFiles.length;
                        console.log(`✅ Found ${pluginCount} plugin files`);
                    }
                } catch (err) {
                    console.error("❌ Plugin loading error:", err.message);
                }
                
                console.log('✅ Bot connected to whatsapp ✅');
                console.log(`👤 Bot Number: ${conn.user.id.split(':')[0]}`);
                console.log(`📝 Total Commands: ${commands.length}`);
                console.log(`📦 Plugins: ${pluginCount}`);
                
                // Welcome message
                setTimeout(() => {
                    let up = `*Hello there Zᴀʜɪᴅ Kɪɴɢ User! 👋🏻*\n\n` +
                            `> Simple , Straight Forward But Loaded With Features 🎊\n\n` +
                            `- *YOUR PREFIX:* = ${prefix}\n` +
                            `- *Commands:* ${commands.length}\n` +
                            `- *Anti-Delete:* ${config.ANTI_DELETE === 'true' ? '✅' : '❌'}\n\n` +
                            `> 📌 ᴘᴏᴡᴇʀ ʙʏ ᴢᴀʜɪᴅ ᴋɪɴɢ`;
                    
                    conn.sendMessage(conn.user.id, { 
                        image: { url: config.MENU_IMAGE_URL || 'https://i.ibb.co/TxSCwf8B/temp.jpg' }, 
                        caption: up 
                    }).catch(err => console.error("Welcome message error:", err.message));
                    
                    // Send to owner as well
                    conn.sendMessage(ownerNumber[0] + '@s.whatsapp.net', {
                        text: `✅ *Zᴀʜɪᴅ Kɪɴɢ IS ACTIVATED*\n\nBot is now online!\nCommands: ${commands.length}\nPrefix: ${prefix}`
                    }).catch(() => {});
                }, 5000);
            }
        });
        
        
// STORE MESSAGES FOR ANTI DELETE
conn.ev.on('messages.upsert', async ({ messages }) => {
try{

const msg = messages[0]
if(!msg) return
if(!msg.message) return

await storeMessageForAntiDelete(msg)

}catch(e){
console.log("Store message error:", e.message)
}

});

        // ANTI CALL
// ANTI DELETE SYSTEM
if (config.ANTI_DELETE === 'true') {

conn.ev.on('messages.update', async updates => {

for (const update of updates) {

if(update.update && update.update.message === null){

try{

await AntiDelete(conn, [update])

}catch(e){

console.log("AntiDelete error:", e)

}

}

}

})

}

        // GROUP EVENTS
        conn.ev.on("group-participants.update", async (u
