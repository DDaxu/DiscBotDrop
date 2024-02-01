const {Client, IntentsBitField} = require('discord.js');
require('dotenv').config({path: '../.env'});
const token = process.env.TOKEN;
const fs = require('fs');
const words = '../tulla.txt';
var wordList = '';
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
    //reading file on start and converting it to string for later usage
    var tempWords = fs.readFileSync(words);
    wordList = tempWords.toString()
        .split("\n")
        .map(val => val.replace(/\r$/, ''));
    console.log(wordList);
});
client.on('messageCreate', (msg) => {
    var userMessage = msg.toString().toLowerCase();
    var bool = false;
    wordList.forEach(item => {
        if(userMessage.includes(item)){
            bool = true;
        }
    });
    if(bool === true){
        msg.react('💦');
    }
});
client.login(token);