const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const translatte = require('translatte')

cmd({
    pattern: "tr",
    desc: "Translator",
    alias: ["trt", "translate"],
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


if(!m.quoted && b && c && d) {
    
translatte(d, {from: b ,to: c}).then(res => {
    reply(res.text);
})

} else if(m.quoted && b && c && !d) {

let y = m.quoted.msg
    
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
