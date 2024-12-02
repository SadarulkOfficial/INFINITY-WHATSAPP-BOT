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
            `${index + 1}. *Movie Name :* ${movie.title}\n*Year :* ${movie.year}\n*Link :* ${movie.link}`
        }).join("\n\n");

let msg = `*_INFINITY WA BOT CINESUBZ.CO SEARCH 🔎_*

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
        
        const config = await readEnv();
        if (config.BLOCK_JID.includes(from)) return
        if (!q) return reply("*_Please give me a movie name._*")

    const search = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)
    const array = search.data

        if (array === 'No results found.') {
            return reply("*_Can't find your movie._*")
        }
        
    const info = await fetchJson(`${apilink}download/cinesubz-dl?q=${array[0].link}`)

        console.log(info)
        
}catch(e){
console.log(e)
reply(`${e}`)
}
})
