const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.json');


//932156633595772928

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	//new SlashCommandBuilder().setName('echo').setDescription('Replies with your input!').addStringOption(option =>
		//option.setName('input')
			//.setDescription('The input to echo back')
			//.setRequired(true)),
	new SlashCommandBuilder().setName('play').setDescription('Play Music!'),
	new SlashCommandBuilder().setName('stop').setDescription('Stop Music!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);


	