const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')
});

client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'sa') {
    // Send "pong" to the same channel
    message.channel.send('Aleyküm Selam hoşgeldin :slight_smile:  ');
  }
});



client.on('guildMemberAdd', member => {
   member.send("Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için #rol-secimi kanalından rollerini alabilirsin.  Ayrıca #kurallar-kanaladavet kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart: ");
});


client.login(process.env.BOT_TOKEN);
