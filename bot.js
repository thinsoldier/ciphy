const Discord = require('discord.js');
const client = new Discord.Client();

require('./modules/functions')(client);

client.login(process.env.BOT_TOKEN);
