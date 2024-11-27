const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "settings",
    desc: "Get bot settings",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")

const prefix = config.PREFIX
const ars = config.AUTO_READ_STATUS
const mode = config.MODE
const aai = config.AUTO_AI
const aaijid = config.AUTO_AI_JID
const as = config.AUTO_STICKER
const av = config.AUTO_VOICE
const ar = config.AUTO_REPLY
const mvsjid = config.MV_SEND_JID
const bjid = config.BLOCK_JID

let msg = `*_Infinity whatsapp bot settings ⚙️_*

1. *PREFIX :* ${prefix}

2. *MODE :* ${mode}

3. *AUTO READ STATUS :* ${ars}

4. *AUTO REPLY :* ${ar}

5. *AUTO VOICE :* ${av}

6. *AUTO STICKER :* ${as}

7. *AUTO AI :* ${aai}

8. *AUTO AI JID :* ${aaijid}

9. *MOVIE SEND JID :* ${mvsjid}

10. *BLOCK JID :* ${bjid}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

conn.sendMessage(from, { image: { url: `https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true` }, caption: msg },{quoted : mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})