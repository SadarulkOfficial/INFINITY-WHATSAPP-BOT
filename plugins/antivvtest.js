const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "fd",
    desc: "fd test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply('*_This is an owner cmd._*')

getMessage: async (key) => {
                if (store) {
                    const msg = await store.loadMessage(from, m.quoted.id)
                    console.log(msg)
                }
}


let inf = `Message forward to ${q}`
    
console.log(m.quoted.id)
console.log(inf)
    
}catch(e){
reply(`${e}`)
}
})
