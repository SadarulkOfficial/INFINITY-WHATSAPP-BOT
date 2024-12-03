const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=azB0GB4C#YC-bNtFnrUiXs7UPNxcsgp1DpwM190rKwNFE7s1jBgE",
MONGODB: process.env.MONGODB || "mongodb://mongo:eurOZzzjLqxxITWuuVDoKCpsvFvvAYop@autorack.proxy.rlwy.net:47304",
};
