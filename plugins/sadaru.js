const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    on: "body"
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const bioUrl = `https://camo.githubusercontent.com/3e4ba60aaf08d8e8b8b91661ac3c263e3b0bb8ded371128dc3fe9b84b5464e42/68747470733a2f2f6d656469612e74656e6f722e636f6d2f726550446644574f33586f41414141642f6861636b696e672e676966`

const msg = `*Sadaru is my developer and owner.He is a smart boy.Below is a description of him.*

*🌟 A short about of Sadaru ⤵*

*Name :* Sadaru
*Age :* 17+ 🎉
*Lives in :* Kurunegala 🌍

*Skills:*
- JavaScript Developer(beginner) 💻
- Problem Solver 🧩
- Creative Thinker 💡

*Hobbies:*
- Bot Developing 🤖
- Learning Programming 📚
- Learning for Life 🌱

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
  
if(body === 'Sadaru') {

await conn.sendMessage(from,{video: {url: bioUrl},caption: msg},{quoted: mek})

} else if(body === 'sadaru') {

await conn.sendMessage(from,{video: {url: bioUrl},caption: msg},{quoted: mek})

}
    
}catch(e){
console.log(e)
reply(`${e}`)

}
})
