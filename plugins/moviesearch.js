const { SinhalaSub }  = require('@sl-code-lords/movie-api')
const {readEnv} = require('../lib/database')
const { cmd, commands } = require('../command')

cmd({
    pattern: "mvsearch",
    desc: "search movies",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
    
    if(!q) {

let mvNo = await SinhalaSub.get_list.by_recent_movies(1)

let arrays = mvNo.results;
                
let resultNo = arrays.map((movie, index) => `${index + 1}. *Movie Name :* ${arrays[index].title}\n*Type :* ${arrays[index].type}\n*Country :* ${arrays[index].country}\n*Link :* ${arrays[index].link}`).join("\n\n");

let dtNo = `*_INFINITY WA BOT MOVIE SEARCH 🔎_*\n\n`
let capNo = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
            
await conn.sendMessage(from, { text: `${dtNo} ${resultNo} ${capNo}` }, {quoted: mek})

    } else {
        
let mv = await SinhalaSub.get_list.by_search(q)

let array = mv.results;

        if(array.length === 0) {
return reply(`*_Can't find this movie !_*`);
        }       

let result = array.map((movie, index) => `${index + 1}. *Movie Name :* ${arrays[index].title}\n*Type :* ${arrays[index].type}\n*Country :* ${arrays[index].country}\n*Link :* ${arrays[index].link}`).join("\n\n");

let dt = `*_INFINITY WA BOT MOVIE SEARCH 🔎_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

    }

}catch(e){
console.log(e)
reply(`${e}`)
}
})
