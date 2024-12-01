const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "msginfo",
    desc: "Get msg info",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply('*_This is an owner cmd._*')

let number = m.quoted.sender.replace('@whatsapp.net', '')
    
let inf = `*_INFINITY MESSAGE INFORMATION_*

*➤ Message ID :* ${m.quoted.id}

*➤ Message Type :* ${m.quoted.type}

*➤ Sender Number :* ${number}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
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
            text: inf,
            contextInfo: test1
          };
         await conn.sendMessage(from, test2, {
            'quoted': mek
          })
    
}catch(e){
reply(`${e}`)
}
})
