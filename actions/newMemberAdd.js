const {Client} = require('discord.js');
const client = new Client();

module.exports = {
    greet: () => {
        client.on('guildMemberAdd', member => {
            const channel = member.guild.channels.find('name', 'general');
            if (!channel) return;
            channel.send(`Welcome to the server, ${member}`);
            const image = `https://image.ibb.co/nmxhqb/Welcome.png`;
            channel.send(image);
        });
    }
}