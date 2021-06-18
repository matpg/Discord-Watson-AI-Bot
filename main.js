
/* Watson Discord BOT
  First 3 lines, npm modules imports
*/
const { Client, MessageEmbed, Collection } = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');
const fs = require('fs');
require('dotenv').config()

const client = new Client();

//prefix for the commands
const prefix = '!'

const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file =>  file.endsWith('.js'))

for(let file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

//Turn on the bot user
client.on('ready', () => {
  console.log(`💯 Watson AI Bot is online!`);
});

//👨‍💻💉🍔🍕🌭🍙🍱🍣💯❓💝🤖👾👁

//Summary of all bot responses and actions
client.on('message', async msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // list of commands after prefix
    if (command === 'ping'){
      client.commands.get('ping').execute(msg, args);

    } else if (command === 'hi') {
      msg.reply('👁‍🗨🐝Ⓜ Hello friend!');

    } else if (command === 'cat') {
      const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
      msg.channel.send(file);

    } else if (command === 'urban') {
      if (!args.length) { return msg.reply('You need to supply a search term!'); }
      //Query has the search text, natural text, etc
      const query = querystring.stringify({ term: args.join(' ') });
      const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
      if (!list.length) { return msg.reply(`No results found for **${args.join(' ')}**.`); }
      const [answer] = list;
      console.log(answer);
      //Template of info
      const embed = new MessageEmbed()
        .setColor('#EFFF00')
        .setTitle(answer.word)
        .setURL(answer.permalink)
        .addField('Definition', trim(answer.definition, 1024))
        .addField('Example', trim(answer.example, 1024))
        .addField('Rating', `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`);
        msg.reply(embed);

    } else if (command === 'mood'){
      if (!args.length) { return msg.reply('You need to supply a valid mood sentence!'); }
      const mood_comm_text = args.join(' ');
      client.commands.get('Tone Analyzer').execute(msg, mood_comm_text);

    } else if (command === 'topic') {
      if (!args.length) { return msg.reply('You need to supply a URL!'); }
      //const topic_comm_text = querystring.stringify({ term: args.join(' ') });
      const topic_comm_text = args[0]
      client.commands.get('Natural Language Understanding Concepts').execute(msg, topic_comm_text);
        
    } else if (command === 'related') {
      if (!args.length) { return msg.reply('You need to supply a URL!'); }
      //const topic_comm_text = querystring.stringify({ term: args.join(' ') });
      const related_comm_text = args[0]
      client.commands.get('Natural Language Understanding Categories').execute(msg, related_comm_text);
        
    } else if (command === 'translate') {
      if (!args.length) { return msg.reply('You need to supply a valid sentence to be translated!'); }
      const translate_comm_text = args.join(' ');
      client.commands.get('Language Translator').execute(msg, translate_comm_text);
      
    }

});

token = process.env.DISCORD_TOKEN;
client.login(token);