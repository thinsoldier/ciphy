const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}.
                Have a look at our #welcome channel
                for rules and futher informations`);
  const image = `https://i.imgur.com/lGvt46k.png`;
  channel.send(image);
});


client.login('MzU1MzgxMDUwNjk4MTA0ODM1.DLUItQ.GwwGXgskuoWFAfC50VgE8CqD9zo');
