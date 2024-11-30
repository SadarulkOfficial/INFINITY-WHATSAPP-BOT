
const os = require('os');
const {
  cmd,
  commands
} = require("../command");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
cmd({
  'pattern': "test",
  'alias': ["online", 'test', "bot"],
  'desc': "Check bot online or no.",
  'filename': __filename
}, async (_0x2e4d84, _0xabc9bf, _0x5c1373, {
  from: _0xe3bd1d,
  prefix: _0x40d520,
  l: _0x4da493,
  quoted: _0x26791c,
  body: _0x5975d0,
  isCmd: _0x50fbeb,
  command: _0x13a8a2,
  args: _0x1ea5ed,
  q: _0x4368f3,
  isGroup: _0x18cc48,
  sender: _0x15f446,
  senderNumber: _0x4154ef,
  botNumber2: _0x478c8d,
  botNumber: _0x5d6c75,
  pushname: _0x272a7c,
  isMe: _0x11c2f7,
  isOwner: _0x1557e2,
  groupMetadata: _0x22825b,
  groupName: _0x13d097,
  participants: _0x3f68e9,
  groupAdmins: _0x1295a0,
  isBotAdmins: _0x232da2,
  isAdmins: _0x326490,
  reply: _0x399095
}) => {
  try {
    if (os.hostname().length == 0xc) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 0x24) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 0x8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }

if(!isOwner) return reply('*_This is an owner cmd._*')
    
      const _0x229759 = [{
        'buttonId': _0x40d520 + "menu",
        'buttonText': {
          'displayText': "COMMANDS MENU"
        },
        'type': 0x1
      }, {
        'buttonId': _0x40d520 + 'ping',
        'buttonText': {
          'displayText': "BOT'S SPEED"
        },
        'type': 0x1
      }];
      const _0x215078 = {
        'image': {
          'url': "https://github.com/Sadarulk/QueenMatheeDB/blob/main/botlogos/infinitybotlogo.png?raw=true"
        },
        'caption': "*DARK SHUTER MD ONLINE NOW 🚄*\n\n_*This whatsapp bot is made for your easy use. This bot is currently active💗🪄*_\n\n*☘️ Follow our chanal :* *https://whatsapp.com/channel/0029VamYYhw2kNFiA46kfl3X*",
        'footer': "test footer",
        'buttons': _0x229759,
        'headerType': 0x4
      };
      return await _0x2e4d84.buttonMessage2(_0xe3bd1d, _0x215078);
   
  } catch (_0xe91622) {
    _0x399095("*Error !!*");
    _0x4da493(_0xe91622);
  }
});
