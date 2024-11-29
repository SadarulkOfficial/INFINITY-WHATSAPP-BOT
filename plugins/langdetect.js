const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

cmd({
    pattern: "test",
    desc: "Check network speed",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

console.log(lngDetector.detect('පෙම් සිහිනේ', 5));
       
}catch(e){
console.log(e)
reply(`${e}`)

}
})
