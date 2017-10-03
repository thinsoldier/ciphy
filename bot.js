const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
  let devRole = member.guild.roles.find('name', 'Developer');
  member.addRole(devRole);
  const channel = member.guild.channels.find('name', 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}. Have a look at our ${channel} channel for rules and futher informations`);
  const image = `https://i.imgur.com/lGvt46k.png`;
  channel.send(image);
});


client.login('process.env.BOT_TOKEN');
