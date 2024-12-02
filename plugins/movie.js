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
        
let msg = `*_INFINITY WA BOT Cinesubz.co SEARCH 🔎_*

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
            text: msg,
            contextInfo: contextMsg
          };
         await conn.sendMessage(from, msgBody, {
            'quoted': mek
          })
        
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

        // Check if the selected option is a valid number
        if (isNaN(index) || index < 1) {
            return reply("*_Invalid number. Please reply with a valid number._*");
        }

        // Handle cases dynamically based on the number selected
        return reply(`You selected number ${index}. Here's the result for index ${index}.`);
    }
});
	    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
