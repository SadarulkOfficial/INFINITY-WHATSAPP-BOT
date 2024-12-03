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
    pattern: "add",
    desc: "Adds a user to the group.",
    category: "owner",
    filename: __filename
},           
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
        
        const userToAdd = `${q}@s.whatsapp.net`
        
        await conn.groupParticipantsUpdate(from, [userToAdd], "add")
      
        reply(`*_Participant added successful ✅_*`)

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
        if(m.quoted.senderNumber === botNumber) return reply("*_Can't remove bot number._*")

        if(!q && m.quoted) {
        
await conn.groupParticipantsUpdate(from, [m.quoted.sender], "remove")
            
        } else {

const userToAdd = `${q}@s.whatsapp.net`
        
await conn.groupParticipantsUpdate(from, [userToAdd], "remove")
            
        }
        
reply(`*_Participant removed successful ✅_*`)

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "promote",
    desc: "promote member in group",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")

        if(!q && m.quoted) {
        
await conn.groupParticipantsUpdate(from, [m.quoted.sender], "promote")
            
        } else {

const userToAdd = `${q}@s.whatsapp.net`
        
await conn.groupParticipantsUpdate(from, [userToAdd], "promote")
            
        }
        
reply(`*_Participant promoted successful ✅_*`)

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "demote",
    desc: "demote member in group",
    category: "owner",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        
        if(!isOwner) return reply(`*_This is an owner cmd._*`)
        if(!isGroup) return
        if(!isBotAdmins) return reply("*_Please give bot admin._*")
        if(m.quoted.senderNumber === botNumber) return reply("*_Can't demote bot number._*")

        if(!q && m.quoted) {
        
await conn.groupParticipantsUpdate(from, [m.quoted.sender], "demote")
            
        } else {

const userToAdd = `${q}@s.whatsapp.net`
        
await conn.groupParticipantsUpdate(from, [userToAdd], "demote")
            
        }
        
reply(`*_Participant demoted successful ✅_*`)

}catch(e){
console.log(e)
reply(`${e}`)
}
})
