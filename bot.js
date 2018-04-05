const discord = require('discord,js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(Íam ready!');
});

client.on('message', message => {
    if (message.context === 'ping') {
    message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
