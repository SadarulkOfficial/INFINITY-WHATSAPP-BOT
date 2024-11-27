const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "vv",
    desc: "Viewonce to media",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!isOwner) return reply("*_This is an owner cmd._*")

const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false

if(!isQuotedViewOnce) return reply("*_Please reply a viewonce image._*")

if((m.type === 'viewOnceMessage') || isQuotedViewOnce) {

var nameJpg = `infinitywabot`
      isQuotedViewOnce ? await m.quoted.download(nameJpg) : await m.download(nameJpg)

await conn.sendMessage(from,{image: nameJpg + ".jpg" },{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})