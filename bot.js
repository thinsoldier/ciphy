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

client.login('MzU1MzgxMDUwNjk4MTA0ODM1.DLe4aw.9DXMnYF6GYj7c_pULKkFeq9mPY8');
