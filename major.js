const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2NDYxNDY1ODgzNDU5Mw.GM-HUM.QiKXxQoWppDRdSAw9E7KCirxqYRx1sXJNVVSNw")