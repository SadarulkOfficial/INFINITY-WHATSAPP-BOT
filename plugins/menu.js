const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "menu",
    desc: "Get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

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

      let menuImg = `https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true`


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
              image: {url: menuImg },
              caption: madeMenu,
              contextInfo: test1
            };
           await conn.sendMessage(from, test2, {
              'quoted': mek
            });
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
