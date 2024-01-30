const {Client, IntentsBitField} = require('./discord.js');
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
client.login(token);