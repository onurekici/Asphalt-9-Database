const Discord = require('discord.js');
const bot = new Discord.Client ();


bot.on('ready', () => {
  bot.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) ', 'https://www.twitch.tv/muhendisbeymuhendishanim')
  bot.user.setStatus('idle')
})




bot.login(process.env.BOT_TOKEN);
