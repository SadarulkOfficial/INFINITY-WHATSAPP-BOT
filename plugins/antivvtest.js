const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { downloadContentFromMessage } = require('@whiskeysockets/baileys')
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
  
if(msg.message!.viewOnceMessageV2 || msg.message!.viewOnceMessage || msg.message!.viewOnceMessageV2Extension ) {

        const buffer = await downloadMediaMessage(
            m,
            'buffer',
            { },
            { 
                logger
               
            }
        )

const mContent = extractMessageContent(msg.message)
const contentType = getContentType(mContent)
const media = (mContent![contentType!])
const mimetype = media!['mimetype']

console.log('mimetype'. mimetype)

const extension = mime.extension(mimetype)

console.log('extension', extension)
console.log('buffer', buffer)

}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
