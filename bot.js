const Discord = require('discord.js');
const client = new Discord.Client();

require('./actions/newMemberAdd').greet();

client.login('process.env.BOT_TOKEN');
