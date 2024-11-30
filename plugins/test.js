const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')

cmd({
    pattern: "test",
    desc: "test",
    category: "owner",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  
const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return
if(!isOwner) return reply("*_This is an owner cmd._*")

let test5 = `Test footer`;
    
const test = [{
      'title': '',
      'rows': [{
        'title': '1',
        'rowId': "." + "song " + "https://youtube.com/watch?v=FCbdpvexz4Q",
        'description': "Audio file"
      }, {
        'title': '2',
        'rowId': "." + "video " + "https://youtube.com/watch?v=FCbdpvexz4Q",
        'description': "Video file"
      }]
    }];

let test3 = "Hello there, This is test.";

const test4 = {
      url: "https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true"
    };
    
await conn.sendMessage(from, {
      caption: test3,
      image: test4,
      footer: test5,
      title: '',
      buttonText: "*🔢 Reply below number*",
      sections: test
    }, {
      quoted: mek
    });
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
