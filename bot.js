const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply(' Aleyküm selam hoşgeldin :slight_smile: ');
  }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'avatarım') {
    // Send the user's avatar URL
    const attachment = new Attachment(message.author.avatarURL);
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
   
  }
});

client.login(process.env.BOT_TOKEN);
