const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { googleSearch , googleImage , googleTranslate } = require('nima-google-now')

cmd({
    pattern: "google",
    desc: "Search in google",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

let dt = `*_INFINITY WA BOT GOOGLE SEARCH 🔎_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

if(!q) return reply ("*_Please give me a text._*")

    googleSearch(q).then((res) => {
console.log(res)

const array = search.result;
        
 if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }

const result = array.map((movie, index) => `${index + 1}. *Title :* ${array[index].title}\n*Description :* ${array[index].description}\n*Link :* ${array[index].url}`).join("\n\n");
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})



