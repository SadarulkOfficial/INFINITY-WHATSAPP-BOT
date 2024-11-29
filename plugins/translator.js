const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const translatte = require('translatte')

cmd({
    pattern: "tr",
    desc: "Translator",
    category: "convert",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply('*_Please give me a text._*')

let a = q.split("&")
let b = a[0]
let c = a[1]
let d = a[2]
        
translatte(d, {from: b ,to: c}).then(res => {
    console.log(res.text);
    reply(res.text);
})
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
