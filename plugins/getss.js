const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { screenshotV3 } = require('getscreenshot.js')

cmd({
    pattern: "ss",
    desc: "Get screenshots",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!q.startsWith('https://')) return reply('*_Please give me a url to get screenshot._*')

let data = await screenshotV3(q)

await conn.sendMessage(from, {image: {url : data }, caption : `> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`}, {quoted : mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
