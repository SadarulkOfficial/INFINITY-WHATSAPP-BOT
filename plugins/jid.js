const { cmd, commands } = require('../command')


cmd({
    pattern: "jid",
    desc: "get jids",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let jid = from
        
 await conn.sendMessage(from,{text: jid },{quoted:mek})
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})