const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const Esana = require('@sl-code-lords/esana-news')

cmd({
    pattern: "esananews",
    desc: "Get esana news",
    category: "other",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

let api = new Esana()
let latest = await api.latest_id()
let id = latest.results.news_id

console.log(id)
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
