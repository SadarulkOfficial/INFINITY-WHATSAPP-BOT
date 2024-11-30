const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')
const { cmd, commands } = require('../command')

const apilink = 'https://rest-api-dark-shan.vercel.app/'

cmd({
    pattern: "mvsend2",
    desc: "movie send to grp jid",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv()
if(config.BLOCK_JID.includes(from)) return

        const id = config.MV_SEND_JID

        if (!isOwner) {
            return reply(
                "*_This is an owner cmd_*"
            )
        }
        
        if (!q || !q.startsWith("https://cinesubz.co/")) {
            return reply(
                "*_Please provide a valid cinesubz.co url_*"
            )
        }

        const inputParts = q.split(" & ")
        const movieUrl = inputParts[0]
        const qualityInput = inputParts[1]
        const sendJid = inputParts[2]

        const mv = await fetchJson(`${apilink}download/cinesubz-dl?q=${movieUrl}`)

        const availableQualities = ['480p', '720p', '1080p']
        if (!availableQualities.includes(qualityInput)) {
            return reply(
                "*Invalid quality input.*\n\n*Available quality inputs:* 480p, 720p, 1080p"
            )
        }

        const filteredLinks = mv.data.download.filter(
            (link) => link.quality.includes(qualityInput)
        )

if (filteredLinks.length === 0) {
            return reply(`*Can't download your movie in this quality.*`)
        }

        const downloadUrl = filteredLinks[0].downloadDetails.DIRECT_LINK

               const caption = `${mv.data.title} ( ${filteredLinks[0].quality} )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

if(!sendJid) {

await conn.sendMessage(id,{document: { url: downloadUrl },mimetype: "video/mp4",fileName: mv.data.title + ".mp4",caption: caption})
    
} else {

await conn.sendMessage(sendJid,{document: { url: downloadUrl },mimetype: "video/mp4",fileName: mv.data.title + ".mp4",caption: caption})
        
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "mvsearch2",
    desc: "search movies",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

        if (!isOwner) {
            return reply(
                "*_This is an owner cmd_*"
            )
        }
    

const mv = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)

let array = mv.data

        if(array.length === 0) {
return reply(`*_Can't find this movie !_*`)
        }       

let result = array.map((movie, index) => `${index + 1}. *Movie Name :* ${array[index].title}\n*Category :* ${array[index].category}\n*Year :* ${array[index].year}\n*Link :* ${array[index].link}`).join("\n\n");

let dt = `*_INFINITY WA BOT MOVIE SEARCH 🔎_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
            
await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "infosend2",
    desc: "send movie details",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const config = await readEnv()
        if(config.BLOCK_JID.includes(from)) return
        if(!isOwner) return reply('*_This is an owner cmd._*')

        let code = await conn.groupInviteCode('120363355439809658@g.us')
        let id = config.MV_SEND_JID
        
let a = q.split(" & ")

let b = a[0]
let c = a[1]

const mvInfo = await fetchJson(`${apilink}download/cinesubz-dl?q=${b}`)

if(b && !c && b.startsWith('https://cinesubz.co/')) {

let msg = `🍟 *${mvInfo.data.title}*

🧿 *Release Date :* ${mvInfo.data.date}

🌍 *Country :* ${mvInfo.data.country}

⏱ *Duration :* ${mvInfo.data.duration}

⭐ *IMDB Rate :* ${mvInfo.data.rating}

🖇️ *Link* : ${b}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(id ,{image:{url: mvInfo.data.image},caption:msg})

} else if(b && c && b.startsWith('https://cinesubz.co/')){

let msg = `🍟 *${mvInfo.data.title}*

🧿 *Release Date :* ${mvInfo.data.date}

🌍 *Country :* ${mvInfo.data.country}

⏱ *Duration :* ${mvInfo.data.duration}

⭐ *IMDB Rate :* ${mvInfo.data.rating}

🖇️ *Link* : ${b}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(c ,{image:{url: mvInfo.data.image},caption:msg})

} else {

return reply('*_Please give me a cinesuz.co url & jid._*')

}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
