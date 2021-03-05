const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let enAltYetkiliRolü = message.guild.roles.cache.get("787636629720399892"); // en alttaki rol id
  let yetkililer = message.guild.members.cache.filter(uye => uye.roles.highest.position >= enAltYetkiliRolü.position);
  let embed = new Discord.MessageEmbed().setTitle(message.guild.name + " Yetkili Sayımı").setTimestamp().setFooter(message.author.tag + " tarafından istendi!")
  .setDescription(`Toplam Yetkili Sayısı: ${yetkililer.size}\nAktif Yetkili Sayısı: ${yetkililer.filter(uye => uye.presence.status !== "onliene").size}\nSesli Kanalda Bulunanlar: ${yetkililer.filter(uye => uye.voice.channel).size} | Bulunmayanlar: ${yetkililer.filter(uye => !uye.voice.channel).size}`)
  // Online Üye Sayısı: ${message.guild.members.cache.filter(uye => uye.presence.status !== "offline").size}
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'yetkilisay', 
  description: 'Yetkilileri sayar.', 
  usage: 'yetkilisay',
  kategori: 'yetkili'
};