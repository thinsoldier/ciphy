const commando = require('discord.js-commando');
const client = new commando.Client();

//Greet and set the role to developer for every new member.
require('./modules/functions')(client);

client.login('MzY0MzAzMDUzOTE2MjA5MTUy.DLd91A.VCQ2oe1-Au7551ku2PdZ2x_p5EE');
