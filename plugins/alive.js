const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "alive",
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

_🔢 Reply Below Number :_

1 || Menu
2 || Bot speed
3 || Owner

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

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
					sourceUrl: `https://chat.whatsapp.com/${code}` ,
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

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {
                switch (selectedOption) {
                    case '1':

                    let menu = {
main: '',
search: '',
download: '',
ai: '',
owner: '',
group: '',
other: '',
convert: ''
};

 for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│➤ ${config.PREFIX}${commands[i].pattern}\n`;
 }
}   

let madeMenu = `*👋 HELLO _${pushname}_*

「 ɪɴꜰɪɴɪᴛʏ ᴡᴀ ʙᴏᴛ ᴍᴇɴᴜ 」

╭──────────●
│❯ MAIN COMMANDS ❮
│   ───────
${menu.main}╰───────────●
╭───────────●
│❯ OWNER COMMANDS ❮
│   ───────
${menu.owner}╰───────────●
╭───────────●
│❯ GROUP COMMANDS ❮
│   ───────
${menu.group}╰───────────●
╭───────────●
│❯ AI COMMANDS ❮
│   ───────
${menu.ai}╰───────────●
╭───────────●
│❯ SEARCH COMMANDS ❮
│   ───────
${menu.search}╰───────────●
╭───────────●
│❯ DOWNLOAD COMMANDS ❮
│   ───────
${menu.download}╰───────────●
╭───────────●
│❯ CONVERT COMMANDS ❮
│   ───────
${menu.convert}╰───────────●
╭───────────●
│❯ OTHER COMMANDS ❮
│   ───────
${menu.other}╰───────────●

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
            forwardedNewsletterMessageInfo: msg,
            externalAdReply: { 
		    		title: 'INFINITY WHATSAPP BOT',
					body: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ',
					mediaType: 1,
					sourceUrl: `https://chat.whatsapp.com/${code}` ,
                	thumbnailUrl: 'https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true' ,
					renderLargerThumbnail: true,
          			showAdAttribution: true
	    		}
          };

const test2 = {
              text: madeMenu,
              contextInfo: test1
            };
           await conn.sendMessage(from, test2, {
              'quoted': mek
            });
                        
                    break; 
                    case '2':

                    const startTime = Date.now()
  
        const response = await conn.sendMessage(from, { text: '*_Pinging Infinity wa bot..._*' }, {quoted : mek})
  
        const endTime = Date.now()
        const ping = endTime - startTime
    
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

        await delay(1000)
    
        await conn.sendMessage(from, { text: `*Infinity's speed :* _${ping} ms_`, edit: response.key, })
                        
                    break;
                    case '3': 

                    const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Sadaru\n'
            + 'ORG:Infinity WA Bot Developer;\n'
            + 'TEL;type=CELL;type=VOICE;waid=94701814946:+94701814946\n'
            + 'END:VCARD'
    
await conn.sendMessage(from,{ contacts: { displayName: 'Sadaru', contacts: [{ vcard }] }}, {quoted: mek})
                        
                    break;
                    default:
                        reply("*_Invalid number.Please reply a valid number_*");
                }

            }
        });
                        
}catch(e){
console.log(e)
reply(`${e}`)
}
})
