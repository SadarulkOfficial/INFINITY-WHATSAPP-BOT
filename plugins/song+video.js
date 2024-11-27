const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')
const { ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js')
const yts = require('yt-search')



//=====audio-dl=====

cmd({
    pattern: "song",
    alias: ["mp3", "ytmp3", "audio"],
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
    
if(!q) return reply ("*_Please give me a title or url._*")


if(q.startsWith("https://")) {

const data = await ytmp3(q)

let desc = `
*_INFINITY WA BOT AUDIO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.result.title}
├ 👤 *Author:* ${data.result.author.name}
├ 👁️‍🗨️ *Views:* ${data.result.views}
├ 🕘 *Duration:* ${data.result.timestamp}
├ 📌 *Upload on:* ${data.result.ago}
├ 🖇️ *Link:* ${data.result.url}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

await conn.sendMessage(from, { image : { url : data.result.image } , caption : desc } , { quoted : mek })

//send audio+document
    
await conn.sendMessage(from,{audio: {url: data.download.url },mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url: data.download.url },mimetype:"audio/mpeg",fileName: data.result.title + ".mp3",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted:mek})
    

} else {

const search = await yts(q)
const data = search.videos[0];

    if (!data || data.length === 0) {
            return reply("*_Can't find anything._*");
        }


let desc = `
*_INFINITY WA BOT AUDIO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
├ 🖇️ *Link:* ${data.url}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})
    
//download audio

const yturl = data.url
const audio = ytmp3(yturl)

//send audio+document
    
await conn.sendMessage(from,{audio: {url: audio.download.url },mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url: audio.download.url },mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted:mek})
    
}

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//=====video-dl=====

cmd({
    pattern: "video",
    alias: ["mp4", "ytmp4", "ytv"],
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
    
if(!q) return reply ("*_Please give me a title or url._*")


if(q.startsWith("https://")) {

const quality = "360p";
const data = ytmp4(q, quality);

let desc = `
*_INFINITY WA BOT VIDEO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.result.title}
├ 👤 *Author:* ${data.result.author.name}
├ 👁️‍🗨️ *Views:* ${data.result.views}
├ 🕘 *Duration:* ${data.result.timestamp}
├ 📌 *Upload on:* ${data.result.ago}
├ 🖇️ *Link:* ${data.result.url}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

await conn.sendMessage(from,{image:{url: data.result.image},caption:desc},{quoted:mek})


//send video+document
    
await conn.sendMessage(from,{video: {url: data.download.url },mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url: data.download.url },mimetype:"video/mp4",fileName:data.result.title + ".mp4",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted:mek})


} else {

const search = await yts(q)
const data = search.videos[0];

     if (!data || data.length === 0) {
            return reply("*_Can't find anything._*");
        }

let desc = `
*_INFINITY WA BOT VIDEO DOWNLOADER_* 📥

┌───────────────────
├ ℹ️ *Title:* ${data.title}
├ 👤 *Author:* ${data.author.name}
├ 👁️‍🗨️ *Views:* ${data.views}
├ 🕘 *Duration:* ${data.timestamp}
├ 📌 *Upload on:* ${data.ago}
├ 🖇️ *Link:* ${data.url}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek})

const yturl = data.url
const quality = "360p";
const video = ytmp4(yturl, quality);

//send video+document
    
await conn.sendMessage(from,{video: {url: video.download.url },mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url: video.download.url },mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted:mek})

}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
