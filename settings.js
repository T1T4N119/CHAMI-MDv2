const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙲𝙷𝙰𝙼𝙸-𝙼𝙳=zIEEFAZT#rGUvVVTbqwyV08UBP-A9SuvsloI2unuEBFMDhDvZWIs' : process.env.SESSION_ID,
PREFIX: process.env.PREFIX || '.' ,
MODE: process.env.MODE === undefined ?"groups" : process.env.MODE,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS === undefined ?"true" : process.env.AUTO_READ_STATUS
};
