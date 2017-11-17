const commando = require('discord.js-commando')
const discord = require('discord.js')
const timezones = require('./timezones.js')

class Timezone extends commando.Command{
	constructor(client){
		super(client, {
			name: 'zone',
			group : 'zone',
			memberName : 'zone',
			description : 'timezone commands'
		})
	}

	async run(message, args){
		if(!args){
			message.channel.send(`
Usage : **!zone <username>**
			`)
			return
		}

		const all_users = []
		const username_passed = args.split(' ')[0]

		timezones.forEach(user => {
			if(username_passed.toLowerCase() == user.name){
				message.channel.send('Timezone that **${user.name}** lives in, is ' + '`${user.zone}`')
			}
			all_users.push(user.name)
		})

		if(all_users.indexOf(username_passed) == -1){
			message.channel.send(`:bangbang: User not found. Try again`)
		}
	}
}

module.exports = Timezone