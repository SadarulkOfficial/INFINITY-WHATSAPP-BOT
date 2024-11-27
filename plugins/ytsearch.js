const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')
const yts = require('yt-search')

let dt = `*_INFINITY WA BOT YOUTUBE SEARCH 🔎_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

cmd({
    pattern: "yt",
    alias: ["yts", "youtube", "ytsearch"],
    desc: "Search in youtube",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply ("*_Please give me a text._*")
const search = await yts(q)

const array = search.videos;
        
 if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }

const result = array.map((movie, index) => `${index + 1}. *Title :* ${array[index].title}\n*Duration :* ${array[index].timestamp}\n*Author :* ${array[index].author.name}\n*Link :* ${array[index].url}`).join("\n\n");
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})
            

    }catch(e){
     console.log(e)
     reply(`${e}`)


}
})
