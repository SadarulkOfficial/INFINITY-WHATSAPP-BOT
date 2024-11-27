const { fetchJson } = require('../lib/functions');
const { cmd, commands } = require('../command');
const {readEnv} = require('../lib/database');

const apilink = 'https://www.dark-yasiya-api.site';

cmd({
    pattern: "mvsend",
    desc: "movie send to grp jid",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
const id = config.MV_SEND_JID
        
      if(config.BLOCK_JID.includes(from)) return
        
        if (!isOwner) {
   return reply("*_This is an owner cmd._*")
}
        
        if(!q && !q.startsWith("https://sinhalasub.lk/")) {
return reply("*_Please give me a movie name or sinhalasub.lk url._*")
        }

        const a = q.split(" & ")
        const movieUrl = a[0]
        const sendJid = a[1]

if(movieUrl.startsWith("https://sinhalasub.lk/")) {

        const mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${movieUrl}`)

        const filteredLinks = mv.result.data.dl_links.filter((link) => link.quality === 'SD 480p' && link.link.includes("pixeldrain.com"))

        if (filteredLinks.length === 0) {
            return reply(`*_Can't download your movie._*`)
        }

        const downloadUrl = filteredLinks[0].link.replace('/u/', '/api/file/')

        const caption = `${mv.result.data.title} ( SD 480p )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

if(!sendJid) {

        await conn.sendMessage(id,{document: { url: downloadUrl },mimetype: "video/mp4",fileName: mv.result.data.title + ".mp4",caption: caption})

} else if(sendJid) {

        await conn.sendMessage(sendJid,{document: { url: downloadUrl },mimetype: "video/mp4",fileName: mv.result.data.title + ".mp4",caption: caption})

}
} else if(!movieUrl.startsWith("https://")) {

const search = await fetchJson(`${apilink}/movie/sinhalasub/search?text=${movieUrl}`)

const mv2 = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${search.result.data[0].link}`)

        const filteredLinks2 = mv2.result.data.dl_links.filter((link) => link.quality === 'SD 480p' && link.link.includes("pixeldrain.com"))

        if (filteredLinks2.length === 0) {
            return reply(`*_Can't download your movie._*`)
        }

        const downloadUrl2 = filteredLinks2[0].link.replace('/u/', '/api/file/')

        const caption2 = `${mv2.result.data.title} ( SD 480p )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

if(!sendJid) {

        await conn.sendMessage(id,{document: { url: downloadUrl2 },mimetype: "video/mp4",fileName: mv2.result.data.title + ".mp4",caption: caption2})

} else if(sendJid) {

        await conn.sendMessage(sendJid,{document: { url: downloadUrl2 },mimetype: "video/mp4",fileName: mv2.result.data.title + ".mp4",caption: caption2})

}
}

    } catch(e) {
      console.error(e)
      reply(`${e}`)
    }
})

//============== download links command & direct link send command ===============

cmd({
    pattern: "downlink",
    desc: "get movie download links",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")
        
    if (!q.startsWith("https://sinhalasub.lk/")) return reply("*_Please give me a sinhalasub.lk url._*")

const mv = await fetchJson(`${apilink}/movie/sinhalasub/movie?url=${q}`)

const array = mv.result.data.dl_links;

let dt = `*_${mv.result.data.title} All Download Links ⬇️_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

if (!array || array.length === 0) {
            return reply("*_No download links in this movie._*");
        }
        
const result = array.map((movie, index) => `${index + 1}. *Quality :* ${array[index].quality}\n*Size :* ${array[index].size}\n*Link :* ${array[index].link}`).join("\n\n");
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})

cmd({
    pattern: "dirsend",
    desc: "download direct url",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")

const id = config.MV_SEND_JID
    
    let a = q

let b = a.split(" & ")

let c = b[0]
let d = b[1]

  if(!a) return reply(`*_Please give me a direct link & jid. Ex :- .dirdlsend <direct link> & <jid>_*`)

if(!d) {

await conn.sendMessage( id ,{document: {url: c },mimetype:"video/mp4",fileName: "🎬 INFINITY WA BOT 🎬" + ".mp4",caption:"> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ"})

} else {
    
await conn.sendMessage( d ,{document: {url: c },mimetype:"video/mp4",fileName: "🎬 INFINITY WA BOT 🎬" + ".mp4",caption:"> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ"})
  
}
}catch(e){
console.log(e)
reply(`${e}`)
}
})
