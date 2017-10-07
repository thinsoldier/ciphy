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
            const resourceChannel = message.guild.channels.find('id', '290854624821379072');
            text += `You can also search through our ${resourceChannel} channel to get more resources over the topic. \n`;
            message.channel.send(text);
        };

        const commands = args.toLowerCase().split(' ');

        switch (true){

            //If no arguments is passed then a message listing all the commands are send
            case args.length <= 0 :
                message.channel.send(
'Here are list of few commands that I can help you with\n\n' + '```' +
`
- !ciphy help <topic> - display resource on the topic
- !ciphy pro <topic> - _fetch names of teamleaders for the topic_
- !ciphy info - details about me
`
+ '```' + '\n Just type in the name of the command after !ciphy like `!ciphy help`'
                );
                break;

            //For the commands with help arg
            case commands.indexOf('help') != -1 :
                if(commands.indexOf('help') != -1 && commands.length==1){
                    message.channel.send(
'The topics I can help you with are:\n\n' + '```' +
`
- CSS
- C++
- Java
- JavaScript
- PHP
- Photoshop
- Python
- React
- Ruby
- Web Design
`
+'```' + '\nType in the name of topic after help like `!ciphy help <topic>`');                  
                }else{
                    
                    switch(args.toLowerCase()){
                        case 'help javascript':
                            sendMessage(this.generateInfo('javascript'));
                            break;
                        case 'help java':
                            sendMessage(this.generateInfo('java'));
                            break;
                        case 'help php':
                            sendMessage(this.generateInfo('php'));
                            break;
                        case 'help fccguide':
                            sendMessage(this.generateInfo('fccguide'));
                            break;
                        case 'help python':
                            sendMessage(this.generateInfo('python'));
                            break;
                        default:
                            sendMessage('May be info on those is still to be uploaded!');
                            break;
                    }
                }
                break;
            

            //commands for pro
            case commands.indexOf('pro') != -1 :
                if(commands.indexOf('pro') != -1 && commands.length==1){
                    message.channel.send(
'You can find Team Leader for the following: \n\n' + '```' +
`
- Front-End Web Development | fewd
- Back-End Web Development | bewd
- Web Design | wd
`
+ '```' + '\nUSAGE: `!ciphy pro fewd`'
                    );
                }else{
                    
                }
                break;
            default:
                message.channel.send(
                    `Sorry I don't know anything about that!`
                );
                break;
        }
    }
}

module.exports = CiphyHelp;