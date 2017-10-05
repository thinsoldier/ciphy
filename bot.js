const commando = require('discord.js-commando');
const path = require('path');
const client = new commando.Client({
    owner : '274434863711518722'
});

//Greet and set the role to developer for every new member.
require('./modules/functions')(client);

client.registry
    .registerGroup('ciphy', 'ciphy commands')
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname+'/commands'));

client.login(process.env.BOT_TOKEN);
