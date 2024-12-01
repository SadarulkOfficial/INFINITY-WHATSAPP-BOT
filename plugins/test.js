const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "test",
    desc: "Check bot online or no.",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

let code = await conn.groupInviteCode('120363355439809658@g.us')

let aliveMsg = `*_Hello ${pushname} 👋_*

*_Infinity WhatsApp bot is alive..._*

🧑‍💻 *Owner :* Sadaru

📞 *Owner Number :* +94 70 181 4946

🔗 *Main Movie Group :* https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let aliveImg = `https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true`

const button = [{
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "MENU",
        'id': ".menu"
      })
    }, {
      'name': "quick_reply",
      'buttonParamsJson': JSON.stringify({
        'display_text': "PING",
        'id': ".ping"
      })
    }]

const msg = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const test1 = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: msg
          };

const test2 = {
              image: {url: aliveImg },
              caption: aliveMsg,
              buttons: button,
              contextInfo: test1
            };
           await conn.sendMessage(from, test2, {
              'quoted': mek
            });
    
}catch(e){
console.log(e)
reply(`${e}`)
}
