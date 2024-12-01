const {cmd , commands} = require('../command')
const {readEnv} = require('../lib/database')
const { downloadContentFromMessage } = require("@whiskeysockets/baileys")

const _0x450e37 = {
  pattern: 'vv',
  desc: "Anti vv"
};
function _0x5b91ac(_0x5593df, _0x4ca466, _0x3055a7, _0x1788cb, _0x4bc351) {
  return _0x4ab5(_0x1788cb - 0x2c, _0x5593df);
}
_0x450e37.category = "main";
_0x450e37.use = ".vv";
_0x450e37.filename = __filename;
cmd(_0x450e37, async (_0x4aa785, _0x5eca09, _0x5407ba, {
  from: _0x578557,
  quoted: _0x157359,
  body: _0x3178d9,
  isCmd: _0xb3e668,
  command: _0x1af028,
  args: _0x2229df,
  q: _0x25a70a,
  isGroup: _0x58bbf9,
  sender: _0x34d51f,
  senderNumber: _0x1fbcee,
  botNumber2: _0x2d3987,
  botNumber: _0x1f62bf,
  pushname: _0x1f9eb0,
  isMe: _0x1de64c,
  isOwner: _0x6a896f,
  groupMetadata: _0x38fa68,
  groupName: _0x539c76,
  participants: _0x765dc7,
  groupAdmins: _0x16cf66,
  isBotAdmins: _0x417bd9,
  isAdmins: _0xf41ce1,
  reply: _0x2903dc
}) => {
  try {
    const _0x2241ca = _0x5407ba.msg.contextInfo.quotedMessage.viewOnceMessageV2;
    if (_0x2241ca) {
      if (_0x2241ca.message.imageMessage) {
        console.log("Quot Entered");
        let _0x56da86 = _0x2241ca.message.imageMessage.caption;
        let _0x1e57bf = await _0x4aa785.downloadAndSaveMediaMessage(_0x2241ca.message.imageMessage);
        const _0x2f8d10 = {
          url: _0x1e57bf
        };
        const _0x16ed4c = {
          image: _0x2f8d10,
          caption: _0x56da86
        };
        return _0x4aa785.sendMessage(_0x5407ba.chat, _0x16ed4c);
      }
      if (_0x2241ca.message.videoMessage) {
        let _0x5c4833 = _0x2241ca.message.videoMessage.caption;
        let _0x41268a = await _0x4aa785.downloadAndSaveMediaMessage(_0x2241ca.message.videoMessage);
        const _0x42888b = {
          url: _0x41268a
        };
        const _0x5096bc = {
          video: _0x42888b,
          caption: _0x5c4833
        };
        return _0x4aa785.sendMessage(_0x5407ba.chat, _0x5096bc);
      }
    }
  } catch (_0x170461) {
    console.log("error", _0x170461);
  }
  if (!_0x5407ba.quoted) {
    return _0x5407ba.reply("```Uh Please Reply A ViewOnce Message```");
  }
  if (_0x5407ba.quoted.mtype === "viewOnceMessage") {
    console.log("ViewOnce Entered");
    if (_0x5407ba.quoted.message.imageMessage) {
      let _0x55540b = _0x5407ba.quoted.message.imageMessage.caption;
      let _0x496715 = await _0x4aa785.downloadAndSaveMediaMessage(citel.quoted.message.imageMessage);
      const _0x24ac60 = {
        url: _0x496715
      };
      const _0x3b2afc = {
        image: _0x24ac60,
        caption: _0x55540b
      };
      _0x4aa785.sendMessage(_0x5407ba.chat, _0x3b2afc);
    } else {
      if (_0x5407ba.quoted.message.videoMessage) {
        let _0x340968 = _0x5407ba.quoted.message.videoMessage.caption;
        let _0x2fe2cd = await _0x4aa785.downloadAndSaveMediaMessage(citel.quoted.message.videoMessage);
        const _0x26acbc = {
          url: _0x2fe2cd
        };
        const _0x598f03 = {
          video: _0x26acbc,
          caption: _0x340968
        };
        _0x4aa785.sendMessage(_0x5407ba.chat, _0x598f03);
      }
    }
  } else {
    return _0x5407ba.reply("```This is Not A ViewOnce Message```");
  }
});
