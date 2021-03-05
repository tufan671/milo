const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.cache.size;
      const emoji = client.emojis.cache.find(emoji => emoji.name === "0");
      const emoji1 = client.emojis.cache.find(emoji => emoji.name === "1");
      const emoji2 = client.emojis.cache.find(emoji => emoji.name === "2");
      const emoji3 = client.emojis.cache.find(emoji => emoji.name === "3");
      const emoji4 = client.emojis.cache.find(emoji => emoji.name === "4");
      const emoji5 = client.emojis.cache.find(emoji => emoji.name === "5");
      const emoji6 = client.emojis.cache.find(emoji => emoji.name === "6");
      const emoji7 = client.emojis.cache.find(emoji => emoji.name === "7");
      const emoji8 = client.emojis.cache.find(emoji => emoji.name === "8");
      const emoji9 = client.emojis.cache.find(emoji => emoji.name === "9");
  const arvelosembed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setAuthor('Bilgi', `${message.author.displayAvatarURL()}`)
        .addField(` <a:mavitick:695220466360647720> Ses kanallarında ${count} kişi bulunmaktadır.`)
        .setThumbnail("https://media.discordapp.net/attachments/733804050490982430/733820926558208042/giphy_9.gif")
        .setTimestamp()
        .setFooter(`Cosmos imp`, `https://cdn.discordapp.com/avatars/434767868589113345/a_0ba16a5345e708d04448643345f658b0.gif?size=2048`)
 
  message.channel.send(arvelosembed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ses-say',
  description: 'kullanıcıyı susturur.',
  usage: '(d!say'
};