const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')

const apilink = 'https://www.dark-yasiya-api.site'

cmd({
    pattern: "xvsearch",
    desc: "search xvideos",
    category: "search",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

let dt = `*_INFINITY WA BOT XVIDEO SEARCH 🔎_*\n\n`
let cap = `\n\n> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

if(!q) return reply("*_Please give me a text._*")

const xv = await fetchJson(`${apilink}/search/xvideo?text=${q}`)


const array = xv.result;
        
if (!array || array.length === 0) {
            return reply("*_Can't find anything._*");
        }

const result = array.map((xvideo, index) => `${index + 1}. *Title :* ${array[index].title}\n*Duration :* ${array[index].duration}\n*Link :* ${array[index].url}`).join("\n\n");

await conn.sendMessage(from, { text: `${dt} ${result} ${cap}` }, {quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)

}
})


cmd({
    pattern: "xvideo",
    desc: "download xvideos",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(q.startsWith("https://www.xvideos.com/")) {

let xv = await fetchJson(`${apilink}/download/xvideo?url=${q}`)

let xvdlink = xv.result.dl_link

        if (!xvdlink) {
            return reply("*_Can't download your video._*");
        }

let msg = `*_INFINITY WA BOT XVIDEO DOWNLOADER 📥_*

┌───────────────────
├ ℹ️ *Title:* ${xv.result.title}
├ 👁️‍🗨️ *Views:* ${xv.result.views}
├ 👍 *Likes:* ${xv.result.like}
├ 🖇️ *Url:* ${q}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let send = await conn.sendMessage(from,{image:{url: xv.result.image},caption:msg},{quoted:mek})
        
await conn.sendMessage(from,{document: {url: xvdlink },mimetype:"video/mp4",fileName: xv.result.title + ".mp4",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: send})

} else if (!q.startsWith("https://")) {

let xvs = await fetchJson(`${apilink}/search/xvideo?text=${q}`)

if (!xvs) {
            return reply("*_Can't find anything._*");
        }

let xvUrl = xvs.result[0].url

let xv = await fetchJson(`${apilink}/download/xvideo?url=${xvUrl}`)

let xvdlink = xv.result.dl_link

        if (!xvdlink) {
            return reply("*_Can't download your video._*");
        }

let msg = `*_INFINITY WA BOT XVIDEO DOWNLOADER 📥_*

┌───────────────────
├ ℹ️ *Title:* ${xv.result.title}
├ 👁️‍🗨️ *Views:* ${xv.result.views}
├ 👍 *Likes:* ${xv.result.like}
├ 🖇️ *Url:* ${xvUrl}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let sendd = await conn.sendMessage(from,{image:{url: xv.result.image},caption:msg},{quoted:mek})
        
await conn.sendMessage(from,{document: {url: xvdlink },mimetype:"video/mp4",fileName: xv.result.title + ".mp4",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted:sendd})

} else if(!q){
return reply("*_Please give me a text or xvideos.com url._*")
}
}catch(e){
console.log(e)
reply(`${e}`)

}
})
