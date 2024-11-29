const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const TextPro = require('@sl-code-lords/text-pro-me')
const text_pro = new TextPro()

cmd({
    pattern: "phub",
    desc: "Create logo",
    category: "logo",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

var image2 = await text_pro.double_text_create('https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html','Infinity','Bot')
    console.log(image2)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})



