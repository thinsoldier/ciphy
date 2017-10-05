module.exports = client => {
    client.on('guildMemberAdd', member => {

        const generalChannel = member.guild.channels.find('id', '290833497373802496');
        if (!generalChannel) return;
        //The random numbers are channel ID
        const welcomeChannel = member.guild.channels.find('id', '363967155634438144');

        let devRole = member.guild.roles.find('name', 'Developer');
        member.addRole(devRole);
        
        generalChannel.send(`Welcome to the server, ${member}. Have a look at our ${welcomeChannel} channel for rules and futher informations`);
        const image = `https://i.imgur.com/lGvt46k.png`;
        generalChannel.send(image);
      });
}