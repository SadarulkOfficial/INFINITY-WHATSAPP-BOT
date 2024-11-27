const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=bmIG0ByA#qWrNL2hA6eZe0vS57b6DNypSm2PiRn9RZDUt7h05VkM",
MONGODB: process.env.MONGODB || "mongodb://mongo:eurOZzzjLqxxITWuuVDoKCpsvFvvAYop@autorack.proxy.rlwy.net:47304",
};
