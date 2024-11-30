const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "test",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")

const msg = {
            newsletterJid: "120363314182963253@newsletter",
            newsletterName: "乡𝔸𝕊𝕀𝕋ℍ𝔸 𝕞𝕕 ࿐",
            serverMessageId: 999
          };
          const test1 = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: msg
          };
          const test2 = {
            text: "Hello there.",
            contextInfo: test1
          };
         await conn.sendMessage(from, test2, {
            'quoted': mek
          })
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
