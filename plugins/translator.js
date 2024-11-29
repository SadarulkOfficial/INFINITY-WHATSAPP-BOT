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

let a = q.split(" & ")
let b = a[0]
let c = a[1]
        
let data = translatte(c, {to: b})

reply(`${data.text}`)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
