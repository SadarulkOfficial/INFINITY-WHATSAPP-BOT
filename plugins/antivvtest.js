const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { downloadMediaMessage, MessageType, MessageOptions, Mimetype, getMessage } = require('@whiskeysockets/baileys')

cmd({
    pattern: "fd",
    desc: "fd test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply('*_This is an owner cmd._*')

const msg = await getMessage(from, m.quoted.id)
await conn.sendMessage(q, { forward: msg })

let inf = `Message forward to ${q}`
    
console.log(m.quoted.id)
console.log(inf)
    
}catch(e){
reply(`${e}`)
}
})
