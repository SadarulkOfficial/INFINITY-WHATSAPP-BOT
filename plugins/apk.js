const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site'

cmd({
    pattern: "apk",
    desc: "Download apk",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a apk name._*")

let data = await fetchJson(`https://www.dark-yasiya-api.site/download/apk?id=${q}`)

let appdlink = data.result.dl_link

        if (!appdlink) {
            return reply("*_Can't find your apk._*");
        }

let msg = `*_INFINITY WA BOT APK DOWNLOADER_* 📥

┌───────────────────
├ 📚 *Name :* ${data.result.name}
├ 📦 *Package :* ${data.result.package}
├ ⬆ *Last update :* ${data.result.lastUpdate}
├ 📥 *Size :* ${data.result.size}
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let send = await conn.sendMessage(from,{image:{url: data.result.image},caption:msg},{quoted:mek})
        
await conn.sendMessage(from,{document: {url: appdlink },mimetype:"application/vnd.android.package-archive",fileName: data.result.name + ".apk",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: send})

}catch(e){
console.log(e)
reply(`${e}`)

}
})
