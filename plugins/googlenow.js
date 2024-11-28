const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const google = require('google')

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

   google.resultsPerPage = 25
var nextCounter = 0
 
google(q, function (err, res){
  if (err) console.error(err)
 
  for (var i = 0; i < res.links.length; ++i) {
    var link = res.links[i];
    console.log(link.title + ' - ' + link.href)
    console.log(link.description + "\n")
  }
 
  if (nextCounter < 4) {
    nextCounter += 1
    if (res.next) res.next()
  }
})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
