
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Started');
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
    const image = `https://image.ibb.co/nmxhqb/Welcome.png`;
    channel.send(image);
  });


client.login(process.env.BOT_TOKEN);
