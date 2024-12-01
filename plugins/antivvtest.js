const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { downloadContentFromMessage } = require("@whiskeysockets/baileys")

cmd({
    pattern: "vv",
    desc: "Anti vv",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply('*_This is an owner cmd._*')
  
  const a = m.msg.contextInfo.quotedMessage.viewOnceMessageV2;
    if (a) {
      if (a.message.imageMessage) {
        console.log("Quot Entered");
        let b = a.message.imageMessage.caption;
        let c = await conn.downloadAndSaveMediaMessage(a.message.imageMessage);
        const d = {
          url: c
        };
        const f = {
          image: d,
          caption: b
        };
        return conn.sendMessage(from, f);
        console.log(d)
      }
    }
}catch(e){
console.log(e)
reply(`${e}`)
}
})
