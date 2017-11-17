const commando = require('discord.js-commando');
const path = require('path');
const clientInfo = require('./client.json');

const client = new commando.Client({
    owner : '274434863711518722'
});

//Greet and set the role to developer for every new member.
require('./modules/functions')(client);

client.registry
    .registerGroups([
        ['ciphy', 'ciphy commands'],
        ['zone', 'timezone commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname+'/commands'));

let jsonToken = false;
if(clientInfo){
    jsonToken = clientInfo.token;
}

const token = jsonToken || process.env.BOT_TOKEN;

if(token){
    console.log('Bot Start attempted...');
    console.log('connecting to the discord api...');
    client.login(token).then(() => {
        console.log('Bot is online\nWARNING : runtime errors will be displayed on the server');
    });
}else{
    console.log('Discord Token not set!');
}


