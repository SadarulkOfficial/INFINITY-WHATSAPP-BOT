const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { downloadMediaMessage } = require('@whiskeysockets/baileys')
const mime = require('mime-types')

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
  
if(m.quoted.viewOnceMessageV2 || m.quoted.viewOnceMessage || m.quoted.viewOnceMessageV2Extension ) {

        const buffer = await downloadMediaMessage(m.quoted)

console.log(buffer.id)

}  
}
})
