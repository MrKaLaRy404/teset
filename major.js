const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2NTY5NjAyMzMwMjkwNTkyNw.GlyTvh.W4obxTQ87mJM95HJbZsZ0MgFZq_0A7o3QkY0Kw")