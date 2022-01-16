const Discord = require("discord.js")
require("dotenv").config()
const { Player } = require("discord-music-player");

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
})

const settings = {
    prefix: '!',
    token: 'YourBotTokenHere'
};

//client.api.applications(client.user.id).commands("932156633595772928 (interaction.data.id)").delete();
//client.application.commands.cache.find(c => c.name === 'play').delete()
//make sure that client is an instance of Client

client.on("ready", () => {
    console.log(`logged in as ${client.user.tag}`)
	
})

client.on('messageCreate', (message) => {
    if (message.content == "hi naughta"){
        message.reply("Hello!")
    }
})

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}else if (commandName === 'echo') {
		await interaction.reply(interaction.options.getString('input'));
	}
});









client.login(process.env.TOKEN)