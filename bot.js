const Discord = require('discord.js');
const bot = new Discord.Client ();


bot.on('ready', () => {
  bot.user.setGame('Çalışmalar devam ediyor. Twitch kanalımıza gitmek için İZLE butonuna basabilirsin :) :', 'https://www.youtube.com/channel/UCTyQuKVP6ePA2jgb9TE3SHg')
  bot.user.setStatus('idle')
})




bot.login(process.env.BOT_TOKEN);
