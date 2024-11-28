const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { MessageType, MessageOptions, Mimetype } = require('@whiskeysockets/baileys')

cmd({
    pattern: "test",
    desc: "Check bot online or no.",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

let msg = `This is test`

await conn.sendMessage(from, {

    text : msg
} , {
    quoted: mek, // the message you want to quote
    contextInfo: { forwardingScore: 999, isForwarded: true }
})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
