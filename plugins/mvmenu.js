const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "mvmenu",
    desc: "Get movie menu",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This an owner cmd._*")

let msg = `*👋 HELLO _${pushname}_*

「 ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴍᴇɴᴜ 」

╭──────────●
│❯ MOVIE COMMANDS ❮
│─────────
│► .cinesend
│► .cineinfosend
│► .cinesearch
│► .cineinfo
│► .cinedl
│► .sinsend
│► .sinsearch
│► .dirdl
│► .dirsend
│► .downlink
╰───────────●

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let menuImg = `https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true`

await conn.sendMessage(from,{image:{url: menuImg },caption:msg},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
