const { cmd, commands } = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "join",
    desc: "join groups",
    category: "owner",
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
    category: "owner",
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
    desc: "get group link",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
        
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
        
        const code = await conn.groupInviteCode(from)
                                        
        reply("https://chat.whatsapp.com/" + code)
  
}catch(e){
console.log(e)
reply(`${e}`)

}
})



cmd({
    pattern: "mute",
    desc: "Group mute",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
          
        await conn.groupSettingUpdate(from, 'announcement')

reply("*Group chat muted 🔒*")

}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "unmute",
    desc: "Group unmute",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
          
        await conn.groupSettingUpdate(from, 'not_announcement')

reply("*Group chat unmuted 🔓*")

}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "kick",
    desc: "Kick member in group",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
        if(m.quoted.senderNumber === botNumber) return

        if(!q) {
        await conn.groupParticipantsUpdate(
    from, m.quoted.sender,
    "remove"
)
        } else {
            let Number = `${q}@s.whatsapp.net`
   await conn.groupParticipantsUpdate(
    from, Number,
    "remove"
)
        }
        
reply("*Successfully kicked ✅*")

}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "add",
    desc: "add member in group",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
        if(!q) return reply("*_Please give a number for add to group._*")
        if(q.startsWith("+")) return reply("*_Invalid format.Give me number like this 9470xxxxxxx_*")
        
       let Number = `${q}@s.whatsapp.net`
        
   await conn.groupParticipantsUpdate(
    from, Number,
    "add"
)
        
reply("*Successfully added ✅*")

}catch(e){
console.log(e)
reply(`${e}`)

}
})
