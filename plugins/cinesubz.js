const { cmd, commands } = require('../command')
const { fetchJson } = require('../lib/functions')
const { readEnv } = require('../lib/database')

const apilink = 'https://rest-api-dark-shan.vercel.app/'

cmd({
    pattern: "cinesearch",
    desc: "Search movies in Cinesubz.co",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

	let code = await conn.groupInviteCode('120363355439809658@g.us')
        const config = await readEnv();
        if (config.BLOCK_JID.includes(from)) return
        if (!q) return reply("*_Please give me a movie name._*")
        
        const search = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)
        const array = search.data

        if (array === 'No results found.') {
            return reply("*_Can't find your movie._*")
        }

 const movieDetails = array.map((movie, index) => {
           return `${index + 1}. *Movie Name :* ${movie.title}\n*Type :* ${movie.category}\n*Year :* ${movie.year}\n*Link :* ${movie.link}`
        }).join("\n\n")
        
let searchMsg = `*_INFINITY WA BOT Cinesubz.co SEARCH 🔎_*

${movieDetails}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
        
        const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel
          };
          const msgBody = {
            text: searchMsg,
            contextInfo: contextMsg
          };
         let inf = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

//================================================================================================================
	    
conn.ev.on('messages.upsert', async (msgUpdate) => {
            let msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            let selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === inf.key.id) {

		    let index = parseInt(selectedOption);

		    let info = await fetchJson(`${apilink}download/cinesubz-dl?q=${array[index-1].link}`)
		   
		    let arrays =  info.data.download
        
      if (!arrays || arrays.length === 0) {
            return reply("*_No download links available._*")
        }

        const downloadLinks = arrays.map((link, index) => {
            return `${index + 1} || ${link.quality} ( ${link.size} )` 
        }).join("\n")
	    
let msg = `*_INFINITY WA BOT Cinesubz.co DOWNLOADER 📥_*

🍟 *Movie Name :* ${info.data.title}

🧿 *Release Date :* ${info.data.date}

🌍 *Country :* ${info.data.country}

⏱ *Duration :* ${info.data.duration}

⭐ *IMDB Rate :* ${info.data.rating}

🖇️ *Link* : ${array[index-1].link}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

_🔢 Reply Below Number :_

${downloadLinks}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel,
	        externalAdReply: { 
		                title: 'INFINITY WHATSAPP BOT',
				body: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ',
				mediaType: 1,
				sourceUrl: `https://chat.whatsapp.com/${code}` ,
                		thumbnailUrl:  info.data.image,
				renderLargerThumbnail: true,
          			showAdAttribution: true
	    		}
          };
          const msgBody = {
            text: msg,
            contextInfo: contextMsg
          };
         let send = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

conn.ev.on('messages.upsert', async (msgUpdate) => {
            let msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            let selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {

		    const indexx = parseInt(selectedOption);
console.log(downloadLinks.length)
		    if (indexx >= downloadLinks.length) {
			    return reply("*_Invalid number.Please reply a valid number._*")
		    }
		   if(arrays[indexx - 1].downloadDetails.error === 'Failed to fetch download links.') return reply("*Direct download server error.Please try again after few hours :(*")
		    let downloadUrl = arrays[indexx - 1].downloadDetails.DIRECT_LINK
		    console.log(downloadUrl)
if(!downloadUrl) {
	return reply("*_Can't download your movie in this quality.Please try another quality._*")
}	    
		    let caption = `${info.data.title} ( ${arrays[indexx - 1].quality} )
      
> ɪɴꜰɪɴɪᴛʏ ᴡᴀ ʙᴏᴛ ᴍᴏᴠɪᴇ ᴅʟ`
		    
await conn.sendMessage(from, {document: { url: downloadUrl }, mimetype: "video/mp4", fileName: "🎬 INFINITY WA BOT 🎬" + info.data.title + ".mp4", caption: caption}, { quoted: send })

}
})		    
}
})

//===============================================================================================================
	    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

cmd({
    pattern: "cinedl",
    desc: "Download movies in Cinesubz.co",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let code = await conn.groupInviteCode('120363355439809658@g.us')
	    
        const config = await readEnv();
        if (config.BLOCK_JID.includes(from)) return
        if (!q) return reply("*_Please give me a movie name._*")

    const search = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)
    const searchResult = search.data

        if (searchResult === 'No results found.') {
            return reply("*_Can't find your movie._*")
        }
        
    const info = await fetchJson(`${apilink}download/cinesubz-dl?q=${searchResult[0].link}`)

const array =  info.data.download
        
      if (!array || array.length === 0) {
            return reply("*_No download links available._*")
        }

        const downloadLinks = array.map((link, index) => {
            return `${index + 1} || ${link.quality} ( ${link.size} )` 
        }).join("\n")
	    
let msg = `*_INFINITY WA BOT Cinesubz.co DOWNLOADER 📥_*

🍟 *Movie Name :* ${info.data.title}

🧿 *Release Date :* ${info.data.date}

🌍 *Country :* ${info.data.country}

⏱ *Duration :* ${info.data.duration}

⭐ *IMDB Rate :* ${info.data.rating}

🖇️ *Link* : ${searchResult[0].link}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

_🔢 Reply Below Number :_

${downloadLinks}

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

const fdChannel = {
            newsletterJid: "120363352976453510@newsletter",
            newsletterName: "INFINITY WA BOT",
            serverMessageId: 999
          };
          const contextMsg = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: fdChannel,
	        externalAdReply: { 
		                title: 'INFINITY WHATSAPP BOT',
				body: 'ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ',
				mediaType: 1,
				sourceUrl: `https://chat.whatsapp.com/${code}` ,
                		thumbnailUrl:  info.data.image,
				renderLargerThumbnail: true,
          			showAdAttribution: true
	    		}
          };
          const msgBody = {
            text: msg,
            contextInfo: contextMsg
          };
         let send = await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {

		    const index = parseInt(selectedOption);

		    if (index >= downloadLinks.length) {
			    return reply("*_Invalid number.Please reply a valid number._*")
		    }
		   if(array[index - 1].downloadDetails.error === 'Failed to fetch download links.') return reply("*Direct download server error.Please try again after few hours :(*")
		    let downloadUrl = array[index - 1].downloadDetails.DIRECT_LINK
if(!downloadUrl) {
	return reply("*_Can't download your movie in this quality.Please try another quality._*")
}	    
		    let caption = `${info.data.title} ( ${array[index - 1].quality} )
      
> ɪɴꜰɪɴɪᴛʏ ᴡᴀ ʙᴏᴛ ᴍᴏᴠɪᴇ ᴅʟ`
		    
await conn.sendMessage(from, {document: { url: downloadUrl }, mimetype: "video/mp4", fileName: "🎬 INFINITY WA BOT 🎬" + info.data.title + ".mp4", caption: caption}, { quoted: send })

    }
})
	    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
