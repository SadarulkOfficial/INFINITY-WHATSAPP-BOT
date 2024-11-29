const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const google = require('googlethis')

cmd({
    pattern: "img",
    desc: "Get images in google",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a text._*")

const images = await google.image(q, { safe: false })
let cap = `> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

await conn.sendMessage(from,{image:{url: images[0].url},caption: cap },{quoted:mek})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
