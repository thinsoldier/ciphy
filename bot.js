const Discord = require('discord.js');
const client = new Discord.Client();

//Greet and set the role to developer for every new member.
require('./modules/functions')(client);

client.login(process.env.BOT_TOKEN);
