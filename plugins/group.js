const { cmd, commands } = require('../command')
const {readEnv} = require('../lib/database')


cmd({
    pattern: "join",
    desc: "join groups",
    category: "group",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        
if(!q.startsWith('https://chat.whatsapp.com/')) return reply(`*_Invalid group link._*`)
        
        const result = q.split('https://chat.whatsapp.com/')[1]
        
 const response = await conn.groupAcceptInvite(result)
        
      
reply(`*_Successfully joined ✅_*`)
      
}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "left",
    desc: "left groups",
    category: "group",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
          
        await conn.groupLeave(from)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "link",
    desc: "close groups",
    category: "group",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
        
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give me a admin first._*")
        
        const code = await conn.groupInviteCode(from)
                                        
        reply("https://chat.whatsapp.com/" + code)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})
