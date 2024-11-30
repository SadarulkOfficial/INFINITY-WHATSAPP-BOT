const os = require('os');
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
cmd({
    pattern: "test",
    desc: "Check bot online or no.",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
      const x = [{
        'buttonId': "." + "menu",
        'buttonText': {
          'displayText': "COMMANDS MENU"
        },
        'type': 0x1
      }, {
        'buttonId': "." + 'ping',
        'buttonText': {
          'displayText': "BOT'S SPEED"
        },
        'type': 0x1
      }];
      const y = {
        'image': {
          'url': "https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true"
        },
        'caption': "*DARK SHUTER MD ONLINE NOW 🚄*\n\n_*This whatsapp bot is made for your easy use. This bot is currently active💗🪄*_\n\n*☘️ Follow our chanal :* *https://whatsapp.com/channel/0029VamYYhw2kNFiA46kfl3X*",
        'footer': "test footer",
        'buttons': x,
        'headerType': 0x4
      };
      await conn.buttonMessage2(from, y)
   
}catch(e){
console.log(e)
}
})
