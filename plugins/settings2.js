const { updateEnv, readEnv } = require('../lib/database')
const { cmd, commands } = require('../command')
const EnvVar = require('../lib/mongodbenv')
const {sleep} = require('../lib/functions')
const {exec} = require("child_process")

cmd({
    pattern: "settings2",
    desc: "Change bot settings",
    category: "owner",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
	    
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const prefix = config.PREFIX
const ars = config.AUTO_READ_STATUS
const mode = config.MODE
const aai = config.AUTO_AI
const as = config.AUTO_STICKER
const av = config.AUTO_VOICE
const ar = config.AUTO_REPLY

const key1 = `AUTO_READ_STATUS`
const value1 = `true`
const value1_1 = `false`
const key2 = `AUTO_REPLY`
const value2 = `true`
const value2_1 = `false`
const key3 = `AUTO_VOICE`
const value3 = `true`
const value3_1 = `false`
const key4 = `AUTO_STICKER`
const value4 = `true`
const value4_1 = `false`
const key5 = `AUTO_AI`
const value5 = `true`
const value5_1 = `false`
const key6 = `MODE`
const key6_1 = `public`
const key6_2 = `private`
const key6_3 = `only_groups`
const key6_4 = `inbox`

let settingMsg = `*_Infinity whatsapp bot settings ⚙_*

*PREFIX :* ${prefix}
*MODE :* ${mode}
*AUTO READ STATUS :* ${ars}
*AUTO REPLY :* ${ar}
*AUTO VOICE :* ${av}
*AUTO STICKER :* ${as}
*AUTO AI :* ${aai}

If you want to update your settings, Reply a below number.

*➤ BOT WORK TYPE*

┌───────────────────
├ 1.1 || _PUBLIC_
├ 1.2 || _PRIVATE_
├ 1.3 || _ONLY GROUPS_
├ 1.4 || _ONLY INBOX_
└───────────────────

*➤ AUTO STATUS SEEN*

┌───────────────────
├ 2.1 || _ON_
├ 2.2 || _OFF_
└───────────────────

*➤ AUTO REPLY*

┌───────────────────
├ 3.1 || _ON_
├ 3.2 || _OFF_
└───────────────────

*➤ AUTO VOICE*

┌───────────────────
├ 4.1 || _ON_
├ 4.2 || _OFF_
└───────────────────

*➤ AUTO STICKER*

┌───────────────────
├ 5.1 || _ON_
├ 5.2 || _OFF_
└───────────────────

*➤ AUTO AI*

┌───────────────────
├ 6.1 || _ON_
├ 6.2 || _OFF_
└───────────────────

> ɪɴꜰɪɴɪᴛʏ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ꜱᴀᴅᴀʀᴜ`
        
        const msg2 = await conn.sendMessage(from, {image: { url: 'https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true' },caption: settingMsg}, { quoted: mek })

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === msg2.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        await updateEnv(key6, value6_1)
                        reply(`*Settings updated ✅*\n\n*${key6}* ➠ ${value6_1}`)
			await delay(2000)
			reply("*_Infinity whatsapp bot is restarting..._*")
			await sleep(1500)
			exec("pm2 restart all")
                        break;
                    case '1.2':
                       await updateEnv(key6, value6_2)
                        reply(`*Settings updated ✅*\n\n*${key6}* ➠ ${value6_2}`)
			await delay(2000)
			reply("*_Infinity whatsapp bot is restarting..._*")
			await sleep(1500)
			exec("pm2 restart all")
                        break;
                    case '1.3':
                       await updateEnv(key6, value6_3)
                        reply(`*Settings updated ✅*\n\n*${key6}* ➠ ${value6_3}`)
			await delay(2000)
			reply("*_Infinity whatsapp bot is restarting..._*")
			await sleep(1500)
			exec("pm2 restart all")
                        break;
                    case '1.4':
                        await updateEnv(key6, value6_4)
                        reply(`*Settings updated ✅*\n\n*${key6}* ➠ ${value6_4}`)
			await delay(2000)
			reply("*_Infinity whatsapp bot is restarting..._*")
			await sleep(1500)
			exec("pm2 restart all")
                        break;
                    case '2.1':
                        await updateEnv(key1, value1)
                        reply(`*Settings updated ✅*\n\n*${key1}* ➠ ${value1}`)
                        break;
                    case '2.2':
                        await updateEnv(key1, value1_1)
			reply(`*Settings updated ✅*\n\n*${key1}* ➠ ${value1_1}`)
                        break;
                    case '3.1':
                        await updateEnv(key2, value2)
                        reply(`*Settings updated ✅*\n\n*${key2}* ➠ ${value2}`)
                        break;
                    case '3.2':
                        await updateEnv(key2, value2_1)
                        reply(`*Settings updated ✅*\n\n*${key2}* ➠ ${value2_1}`)
                        break;
                    case '4.1':
                        await updateEnv(key3, value3)
                        reply(`*Settings updated ✅*\n\n*${key3}* ➠ ${value3}`)
                        break;
                    case '4.2':
                        await updateEnv(key3, value3_1)
                        reply(`*Settings updated ✅*\n\n*${key3}* ➠ ${value3_1}`)
                        break;
                    case '5.1':
                        await updateEnv(key4, value4)
                        reply(`*Settings updated ✅*\n\n*${key4}* ➠ ${value4}`)
                        break;
                    case '5.2':
                        await updateEnv(key4, value4_1)
                        reply(`*Settings updated ✅*\n\n*${key4}* ➠ ${value4_1}`)
                        break;
                    case '6.1':
                        await updateEnv(key5, value5)
                        reply(`*Settings updated ✅*\n\n*${key5}* ➠ ${value5}`)
                        break;
                    case '6.2':
                        await updateEnv(key5, value5_1)
                        reply(`*Settings updated ✅*\n\n*${key5}* ➠ ${value5_1}`)
                        break;
                    default:
                        reply("*_Invalid number.Please reply a valid number_*");
                }
            }
        });

}catch(e){
console.log(e)
reply(`${e}`)
}
})
