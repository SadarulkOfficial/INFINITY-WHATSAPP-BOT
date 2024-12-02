const { cmd, commands } = require('../command')
const { fetchJson } = require('../lib/functions')
const {readEnv} = require('../lib/database')

const apilink = 'https://rest-api-dark-shan.vercel.app/'

cmd({
    pattern: "movie",
    desc: "Download movies in sinhalasub.lk",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

const search = await fetchJson(`${apilink}download/cinesubz-search?q=${q}`)
console.log(search)
const movieUrl = search.data[0].link
const mv = await fetchJson(`${apilink}download/cinesubz-dl?q=${movieUrl}`)        
console.log(mv)
           
}catch(e){
console.log(e)
reply(`${e}`)
}
})


cmd({
    pattern: "infosend",
    desc: "get movie details",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        const config = await readEnv();
if(config.BLOCK_JID.includes(from)) return

        let code = await conn.groupInviteCode('120363355439809658@g.us')

        let x = q
        
let a = x.split(" & ")

let b = a[0]
let c = a[1]


if(!c) {


let id = config.MV_SEND_JID

if (!q && !q.startsWith("https://sinhalasub.lk/")) {

return reply("*_Please give me a movie name or sinhalasub.lk url._*")

} else if (q.startsWith("https://")) {

let mv_info = await SinhalaSub.movie(q)

let msg = `🍟 *${mv_info.result.title}*

🧿 *Release Date :* ${mv_info.result.release_date}

🌍 *Country :* ${mv_info.result.country}

⏱ *Duration :* ${mv_info.result.duration}

🎀 *Categories :* ${mv_info.result.categories}

⭐ *IMDB Rate :* ${mv_info.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info.result.director.name}

🖇️ *Link* : ${b}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(id ,{image:{url: mv_info.result.images[0]},caption:msg})

} else {

let mv = await SinhalaSub.get_list.by_search(q)

let mv_info2 = await SinhalaSub.movie(mv.results[0].link)

let msg2 = `🍟 *${mv_info2.result.title}*

🧿 *Release Date :* ${mv_info2.result.release_date}

🌍 *Country :* ${mv_info2.result.country}

⏱ *Duration :* ${mv_info2.result.duration}

🎀 *Categories :* ${mv_info2.result.categories}

⭐ *IMDB Rate :* ${mv_info2.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info2.result.director.name}

🖇️ *Link* : ${mv.results[0].link}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage(id ,{image:{url: mv_info2.result.images[0]},caption:msg2})

}
} else {

if (!q && !q.startsWith("https://sinhalasub.lk/")) {

return reply("*_Please give me a movie name or sinhalasub.lk url._*")

} else if (q.startsWith("https://")) {

let mv_info = await SinhalaSub.movie(q)

let msg = `🍟 *${mv_info.result.title}*

🧿 *Release Date :* ${mv_info.result.release_date}

🌍 *Country :* ${mv_info.result.country}

⏱ *Duration :* ${mv_info.result.duration}

🎀 *Categories :* ${mv_info.result.categories}

⭐ *IMDB Rate :* ${mv_info.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info.result.director.name}

🖇️ *Link* : ${b}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( c ,{image:{url: mv_info.result.images[0]},caption:msg})

} else {

let mv = await SinhalaSub.get_list.by_search(q)

let mv_info2 = await SinhalaSub.movie(mv.results[0].link)

let msg2 = `🍟 *${mv_info2.result.title}*

🧿 *Release Date :* ${mv_info2.result.release_date}

🌍 *Country :* ${mv_info2.result.country}

⏱ *Duration :* ${mv_info2.result.duration}

🎀 *Categories :* ${mv_info2.result.categories}

⭐ *IMDB Rate :* ${mv_info2.result.IMDb_Rating}

🤵‍♂ *Director* : ${mv_info2.result.director.name}

🖇️ *Link* : ${mv.results[0].link}

▬▬▬▬▬▬▬▬▬▬▬▬▬▬

● ɢʀᴏᴜᴘ ʟɪɴᴋ : https://chat.whatsapp.com/${code}

> ɪɴꜰɪɴɪᴛʏ ᴍᴏᴠɪᴇ ᴡᴏʀʟᴅ`

await conn.sendMessage( c ,{image:{url: mv_info2.result.images[0]},caption:msg2})

}
}
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
