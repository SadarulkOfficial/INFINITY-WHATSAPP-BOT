const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    pattern: "pair",
    desc: "Get pair code",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply('*_Please give me a number to get pair code._* *Ex :-* .pair 9470xxxxxxx')
  
let data = await fetchJson(`https://pair-code-production.up.railway.app/code?number=${q}`)

let msg = `*_This is your pair code.Please link it your whatsapp within 30 second._*

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let pairCode = await conn.sendMessage(from, {text : data.code}, {quoted : mek})

await conn.sendMessage(from, {text : msg}, {quoted : pairCode})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
