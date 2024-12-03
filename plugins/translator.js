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

let a = q.split(" # ")
let b = a[0]
let c = a[1]
let d = a[2]
let x = d.replace('> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ', '')

if(!m.quoted && b && c && d) {
    
translatte(x, {from: b ,to: c}).then(res => {
    reply(res.text);
})

} else if(m.quoted && b && c && !d) {

    let text = m.quoted.msg

let y = text.replace('> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ', '')
    
translatte(y, {from: b ,to: c}).then(res => {
    reply(res.text);
})
    
} else {

reply('*_Please give me a text._*\n\n*Ex:-* .tr <current language> # <translate language> # <text>') 
    
}
}catch(e){
console.log(e)
reply(`${e}`)

}
})
