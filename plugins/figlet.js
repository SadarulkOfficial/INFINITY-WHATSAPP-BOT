const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const figlet = require('figlet')

cmd({
    pattern: "figlet",
    desc: "text to figlet",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

if(!q) return reply("*_Please give me a text._*")

figlet(q, function (err, data) {
  if (err) {
    reply("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data)
  reply(data)
});
        
}catch(e){
console.log(e)
reply(`${e}`)

}
})
