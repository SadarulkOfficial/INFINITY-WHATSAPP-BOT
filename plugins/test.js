const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "alive2",
    desc: "Check bot online or no.",
    category: "main",
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

const msg = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const msg2 = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: msg,
            externalAdReply: { 
		    		title: 'INFINITY WHATSAPP BOT',
				body: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ',
				mediaType: 1,
				sourceUrl: "https://wa.me/94701814946" ,
                		thumbnailUrl: 'https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true' ,
				renderLargerThumbnail: true,
          			showAdAttribution: true
	    		}
          };

const msg3 = {
              text: aliveMsg,
              contextInfo: msg2
            };
         const inf =  await conn.sendMessage(from, msg3, {
              'quoted': mek
            });
                  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
