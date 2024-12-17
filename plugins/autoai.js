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
if(body === 'sadaru') return
if(body === 'Sadaru') return

if(config.AUTO_AI === 'true') {
    
let data = await fetchJson(`https://www.dark-yasiya-api.site/ai/chatgpt?q=${body}`)
    
    await conn.sendPresenceUpdate('composing', from)

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
await delay(2000)
    
    return reply(`${data.result}`)

} 
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
