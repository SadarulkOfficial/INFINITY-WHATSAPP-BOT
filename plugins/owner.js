const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "owner",
    alias: ["developer", "dev", "sadaru"],
    desc: "Get owner contact",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:Sadaru\n'
            + 'ORG:Infinity WA Bot Developer;\n'
            + 'TEL;type=CELL;type=VOICE;waid=94701814946:+94701814946\n'
            + 'END:VCARD'
    
await conn.sendMessage(
    from,
    { 
        contacts: { 
            displayName: 'Sadaru', 
            contacts: [{ vcard }] 
        }
    }, 
    {quoted: mek}
)
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
