const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')

const apilink = 'https://www.dark-yasiya-api.site'

cmd({
    pattern: "sub",
    alias: ["subtitle", "subdl"],
    desc: "Download subtitles",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a movie name to download subtitle._*")

let data = await fetchJson(`${apilink}/search/zoom?text=${q}`)
      
let subSearch = data.result.data

        if (!subSearch) {
            return reply("*_Can't find your subtitle._*");
        }

let subDl = await fetchJson(`${apilink}/download/zoom?url=${subSearch[0].url}`)
let subDLink = subDl.result.data.dl_link
let subInfo = subDl.result.data
      
if(!subDLink) return reply("_*Can't download your subtitle.*_")
      
let msg = `*_INFINITY WA BOT SUBTITLE DOWNLOADER_* 📥

*Movie name :* ${subInfo.title}

*Description :* ${subInfo.desc}

🔢 Reply Below Number :

1 || ZIP File
2 || RAR File

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`

let send = await conn.sendMessage(from,{text:msg},{quoted:mek})

conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === send.key.id) {
                switch (selectedOption) {
                    case '1':
        
await conn.sendMessage(from,{document: {url: subDLink },mimetype:"application/zip-compressed",fileName: subInfo.title + ".zip",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek});

                        break;
                     case '2':
        
await conn.sendMessage(from,{document: {url: subDLink },mimetype:"application/x-rar-compressed",fileName: subInfo.title + ".rar",caption:"> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ"},{quoted: mek});

                        break;
                    default:
                        reply("*_Invalid number.Please reply a valid number._*");
                }

            }
        });
                        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
