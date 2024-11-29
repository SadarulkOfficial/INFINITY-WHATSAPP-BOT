const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')
const NetworkSpeed = require('network-speed')

cmd({
    pattern: "netspeed",
    desc: "Check network speed",
    category: "other",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const testNetworkSpeed = new NetworkSpeed()

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  console.log(speed);
}
       
}catch(e){
console.log(e)
reply(`${e}`)

}
})
