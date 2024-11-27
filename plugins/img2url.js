const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { image2url } = require('@dark-yasiya/imgbb.js')

cmd({
    pattern: "img2url",
    desc: "Image convert to url",
    category: "convert",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return


    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false

     if ((m.type === 'imageMessage') || isQuotedImage) {
      var nameJpg = `infinitywabot`
      isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)

let data = await image2url(nameJpg + '.jpg');

let msg = `*Url :* ${data.result.url}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

reply(`${msg}`)
     } else {
reply("*_Please reply an image._*")
     }
}catch(e){
console.log(e)
reply(`${e}`)
}
})

