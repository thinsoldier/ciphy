
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot Started');
});

client.login(process.env.BOT_TOKEN);
