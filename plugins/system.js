const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "system",
    desc: "Check runtime, owner & more...",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const {readEnv} = require('../lib/database')
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
    
let status = `┌──────────────────────
├ ⏰ *Runtime :* ${runtime(process.uptime())}
├ 📟 *Ram usage :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *Platform :* ${os.hostname()}
├ 👨‍💻 *Owner :* Sadaru
├ 🧬 *Version :* 1.0
└──────────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel
          };
          const msgBody = {
            text: status,
            contextInfo: contextMsg
          };
         await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
