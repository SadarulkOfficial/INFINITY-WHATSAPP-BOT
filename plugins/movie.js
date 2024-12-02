const { cmd, commands } = require('../command')
const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')

const apilink = 'https://rest-api-dark-shan.vercel.app/'

cmd({
    pattern: "movie",
    desc: "Download movies in sinhalasub.lk",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const search = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)

let array = search.data

        if(!array) {
            
console.log("Not found search results")
            
        }  else {

console.log(array)
            
        }
        
}catch(e){
console.log(e)
reply(`${e}`)
}
})
