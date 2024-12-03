const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')
const { cmd, commands } = require('../command')

const apilink = 'https://rest-api-dark-shan.vercel.app/'

cmd({
    pattern: "cinesend",
    desc: "movie send to grp jid",
    category: "owner",
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
        
        if (!q) {
            return reply(
                "*_Please give me a movie name and send jid._*\n\n*Ex :- .cinesend <movie name> & <jid>*"
            )
        }

        const inputParts = q.split(" & ")
        const movieName = inputParts[0]
        const sendJid = inputParts[1]
        
//========================= Movie Search =================================

const search = await fetchJson(`${apilink}download/cinesubz-search?q=${movieName}`)
        const array = search.data

        if (array === 'No results found.') {
            return reply("*_Can't find your movie._*")
        }

 const movieDetails = array.map((movie, index) => {
           return `${index + 1}. *Movie Name :* ${movie.title}\n*Type :* ${movie.category}\n*Year :* ${movie.year}\n*Link :* ${movie.link}`
        }).join("\n\n")
        
let searchMsg = `*_INFINITY WA BOT Cinesubz.co SEND 🔎_*

*Send jid :* ${sendJid}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

${movieDetails}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

//======================================================

let inf = await conn.sendMessage(from, {text : searchMsg}, {quoted : mek})
        
//======================= Get info by serch reuslt ===================================

conn.ev.on('messages.upsert', async (msgUpdate) => {
            let msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            let selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {

		    let index = parseInt(selectedOption);

		    const info = await fetchJson(`${apilink}download/cinesubz-dl?q=${array[index-1].link}`)

            let arrays =  info.data.download
        
      if (!arrays || arrays.length === 0) {
            return reply("*_No download links available._*")
        }

        const downloadLinks = arrays.map((link, index) => {
            return `${index + 1} || ${link.quality} ( ${link.size} )` 
        }).join("\n")

let msg = `*_INFINITY WA BOT Cinesubz.co SENDER 📥_*

*Movie Name :* ${info.data.title}

*Release Date :* ${info.data.date}

*Country :* ${info.data.country}

*Duration :* ${info.data.duration}

*IMDB Rate :* ${info.data.rating}

*Link* : ${array[index-1].link}

🔢 Reply Below Number :

0 || Send movie info

${downloadLinks}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
//==========================================================

let send = await conn.sendMessage(from, { iamge : { url : info.data.image }, caption : msg}, { quoted : mek})
                
//====================== Send info and movie =================

conn.ev.on('messages.upsert', async (msgUpdate) => {
            let msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            let selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {

		    const indexx = parseInt(selectedOption);

		   if(arrays[indexx - 1].downloadDetails.error === 'Failed to fetch download links.') return reply("*Direct download server error.Please try again after few hours :(*")
		    let downloadUrl = arrays[indexx - 1].downloadDetails.DIRECT_LINK
if(!downloadUrl) {
	return reply("*_Can't send your movie in this quality.Please try another quality._*")
}	    

//================ info send =========================
                if(indexx === '0') {
                let sendInfomsg = `🍟 *${info.data.title}*

🧿 *Release Date :* ${info.data.date}

🌍 *Country :* ${info.data.country}

⏱ *Duration :* ${info.data.duration}

⭐ *IMDB Rate :* ${info.data.rating}

🖇️ *Link* : ${array[index-1].link}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(sendJid ,{image:{url: mvInfo.data.image},caption: sendInfomsg})
                } else {

//=====================================================
                
		    let caption = `${info.data.title} ( ${arrays[indexx - 1].quality} )
      
> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`
		    
await conn.sendMessage(sendJid, {document: { url: downloadUrl }, mimetype: "video/mp4", fileName: info.data.title + ".mp4", caption: caption})

                }
                    
}
})		    
}
})
                
//============================================================
                
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
