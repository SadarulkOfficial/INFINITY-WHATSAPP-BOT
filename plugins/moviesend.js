const { fetchJson } = require('../lib/functions');
const config = require('../config');
const { cmd, commands } = require('../command');
const {readEnv} = require('../lib/database');

const apilink = 'https://www.dark-yasiya-api.site';
const config = await readEnv();
const id = config.MV_SEND_JID

cmd({
    pattern: "moviesend",
    desc: "movie send to grp jid",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

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

        const caption = `${mv.result.data.title} ( SD 480p )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`

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

        const caption2 = `${mv2.result.data.title} ( SD 480p )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ʙᴏᴛ`

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