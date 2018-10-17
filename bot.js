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
  
  client.on('message', msg => {
  if (message.content === 'avatarım') {
    // Send the user's avatar URL
     message.reply(message.author.avatarURL);
  }
  
  
  
});



client.on('guildMemberAdd', member => {
   member.send("Discord sunucumuza hoşgeldin. Sunucudaki diğer odaları görebilmek için #rol-secimi kanalından rollerini alabilirsin.  Ayrıca #kurallar-kanaladavet kanalından sunucu kurallarını okumayı da unutma :slight_smile:  İyi eğlenceler :heart: ");
});


client.login(process.env.BOT_TOKEN);
