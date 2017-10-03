module.exports = client => {
    client.on('guildMemberAdd', member => {

        const generalChannel = member.guild.channels.find('name', 'general');
        if (!generalChannel) return;

        const welcomeChannel = member.guild.channels.find('name', 'welcome');

        let devRole = member.guild.roles.find('name', 'Developer');
        member.addRole(devRole);
        
        generalChannel.send(`Welcome to the server, ${member}. Have a look at our ${welcomeChannel} channel for rules and futher informations`);
        const image = `https://i.imgur.com/lGvt46k.png`;
        channel.send(image);
      });
}