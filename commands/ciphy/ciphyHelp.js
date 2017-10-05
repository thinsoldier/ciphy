const commando = require('discord.js-commando');
const linkData = require('./linkData');

class CiphyHelp extends commando.Command{
    constructor(client){
        super(client, {
            name : 'ciphy',
            group : 'ciphy',
            memberName : 'ciphy',
            description : 'Fetch Docs for Developers'
        });
    }

    generateInfo(topic){
        let info = `Resources on ${topic.toUpperCase()} \n\n`;
        linkData.forEach(obj => {
            if(obj.topic == topic){
                info += obj.description + '\n';
                info += '<' + obj.link + '>' + '\n\n';
            }
        });
        return info;
    }

    async run(message, args){

        const sendMessage = text => {
            const resourceChannel = message.guild.channels.find('name', 'resources');
            text += `\n\nYou can also search through our ${resourceChannel} to get more data over the topic. \n`;
            message.channel.send(text);
        };

        if(args.toLowerCase().split(' ').indexOf('help') == -1){
            message.reply('Please include "help" to get the necessary information.');
        }else if(args.toLowerCase().split(' ').indexOf('help') != -1
                && args.split(' ').length<=1){
            message.reply('Pleade mention the topic after "help" to get the results, or type `!ciphy help options` to get the list of help options!');
        }else{
            
            switch(args.toLowerCase()){
                case 'help javascript':
                    sendMessage(this.generateInfo('javascript'));
                    break;
                case 'help java':
                    sendMessage(this.generateInfo('java'));
                    break;
                default:
                    sendMessage('May be info on those is still to be uploaded!');
                    break;
            }
        }
    }
}

module.exports = CiphyHelp;