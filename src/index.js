const {Client, IntentsBitField} = require('discord.js');
require('dotenv').config();
const token = process.env.TOKEN;
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
});
//main code here 
client.on('ready', (c) => {
    console.log('bot is ready');
});
console.log(token);
client.login(token);