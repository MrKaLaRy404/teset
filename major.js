const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2NjQzNTQxODMxMDA1MzkzOA.GBvl_v.n2_aAHMx645sdbjMejFhPf0keFumOY6_5YS0CM")