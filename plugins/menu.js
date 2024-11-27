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
other: '',
convert: ''
};

 for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `│► ${config.PREFIX}${commands[i].pattern}\n`;
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


await conn.sendMessage(from,{image:{url: menuImg },caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
