const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const EnvVar = require('../lib/mongodbenv');

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

let settingMsg = `*_Infinity whatsapp bot settings ⚙_*

◤ *PREFIX :* ${prefix} ◢
◤ *MODE :* ${mode} ◢
◤ *AUTO READ STATUS :* ${ars} ◢
◤ *AUTO REPLY :* ${ar} ◢
◤ *AUTO VOICE :* ${av} ◢
◤ *AUTO STICKER :* ${as} ◢
◤ *AUTO AI :* ${aai} ◢

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
                        reply('.update MODE:public');
                        reply('.restart');
                        break;
                    case '1.2':
                        reply('.update MODE:private');
                        reply('.restart');
                        break;
                    case '1.3':
                        reply('.update MODE:only_groups');
                        reply('.restart');
                        break;
                    case '1.4':
                        reply('.update MODE:inbox');
                        reply('.restart');
                        break;
                    case '2.1':
                        await updateEnv(key1, value1)
                        reply('`Settings updated ✅`')
                        break;
                    case '2.2':
                        await updateEnv(key1, value1_1)
			reply('`Settings updated ✅`')
                        break;
                    case '3.1':
                        reply('.update AUTO_REPLY:true');
                        break;
                    case '3.2':
                        reply('.update AUTO_REPLY:false');
                        break;
                    case '4.1':
                        reply('.update AUTO_VOICE:true');
                        break;
                    case '4.2':
                        reply('..update AUTO_VOICE:false');
                        break;
                    case '5.1':
                        reply('.update AUTO_STICKER:true');
                        break;
                    case '5.2':
                        reply('.update AUTO_STICKER:false');
                        break;
                    case '6.1':
                        reply('.update AUTO_AI:true');
                        break;
                    case '6.2':
                        reply('.update AUTO_AI:false');
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
