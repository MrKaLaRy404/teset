const { Client, Intents } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.config = require('./config');

require('./src/loader');

client.login("MTA2Nzg4MDYxNDY1ODgzNDU5Mw.GLXmjz.PMvgfTVGP-9Q_tmO97tt6tqbIZD_6ABX7BMKWY")