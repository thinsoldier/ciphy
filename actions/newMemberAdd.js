const {Client} = require('discord.js');
const client = new Client();

module.exports = {
    greet: () => {
        client.on('guildMemberAdd', member => {
            const channel = member.guild.channels.find('name', 'general');
            if (!channel) return;
            channel.send(`Welcome to the server, ${member}.
                          Have a look at our #welcome channel
                          for rules and futher informations`);
            const image = `https://i.imgur.com/lGvt46k.png`;
            channel.send(image);
        });
    }
}