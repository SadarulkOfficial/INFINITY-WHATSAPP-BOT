const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const google = require('googlethis')

cmd({
    pattern: "google",
    desc: "search in google",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const images = await google.image('The Wolf Among Us', { safe: false });
console.log(images)
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
