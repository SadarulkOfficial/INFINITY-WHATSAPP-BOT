const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

cmd({
    on: "body"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
const workGrp = config.AUTO_AI_JID
    
if(isCmd) return
if(senderNumber === botNumber) return      
if(!workGrp.includes(from)) return
if(body.startsWith("/")) return

if(config.AUTO_AI === 'true') {
    
let data = await fetchJson(`https://www.dark-yasiya-api.site/ai/chatgpt?q=${body}`)
    
    await conn.sendPresenceUpdate('composing', from);
    return reply(`${data.result}\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`)

} 

    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
