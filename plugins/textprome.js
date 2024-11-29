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

let data = await screenshotV3('https://github.com/')
console.log(data)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
