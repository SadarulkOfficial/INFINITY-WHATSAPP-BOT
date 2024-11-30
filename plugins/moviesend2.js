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
            return reply(`*Can't send your movie in this quality.*`)
        }

        const downloadUrl = filteredLinks.downloadDetails.DIRECT_LINK

        const caption = `${mv.data.title} ( ${filteredLinks.quality} )\n\n> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

if(!sendJid) {

        await conn.sendMessage(
            id,
            {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: mv.data.title + ".mp4",
                caption: caption
            }
        )

} else {

await conn.sendMessage(
            sendJid,
            {
                document: { url: downloadUrl },
                mimetype: "video/mp4",
                fileName: mv.data.title + ".mp4",
                caption: caption
            }
                      )
       }

    } catch (e) {
        console.error(e)
        reply(`${e}`)
    }
})