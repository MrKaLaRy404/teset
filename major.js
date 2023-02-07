const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2Nzg4MDYxNDY1ODgzNDU5Mw.GrXol8.qjh1dM1BChLP_0anjmabwjNz69ZQyy9RwUFbJ8")