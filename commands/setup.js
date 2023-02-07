const { Permissions, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'setup',

    execute(client, message) {
        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.channel.send('Bu komutu kullanmak için **mesajları yönet** iznine sahip olmanız gerekir ❌');
        }

        const setupEmbed = new MessageEmbed();

        setupEmbed.setColor('GREEN');
        setupEmbed.setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        setupEmbed.setAuthor('Alpha Ticket');
        setupEmbed.setDescription('**Click 🔓 **');
        setupEmbed.setFooter(`Alpha Hosing For Ever!`)

        const ticketButton = new MessageButton();

        ticketButton.setEmoji('🔓');
        ticketButton.setStyle('SUCCESS');
        ticketButton.setLabel('Open');
        ticketButton.setCustomId('createTicket');

        const row = new MessageActionRow().addComponents(ticketButton);

        message.channel.send({ embeds: [setupEmbed], components: [row] });
    },
};




