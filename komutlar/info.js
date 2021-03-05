const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
 
  if (!message.member.roles.has("786568028018966568") && !message.member.hasPermission("MANAGE_MESSAGES") )
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "786306655583207454";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:SIFIR:786950575463858217>`,
    '1': `<a:BR:786950575337111563>`,
    '2': `<a:K_:786950575731900417>`,
    '3': `<a:UC:786950575740420126>`,
    '4': `<a:DRT:786950575635300402>`,                      
    '5': `<a:BE:786950575571992627>`,
    '6': `<a:ALTI:786950575647752222>`,
    '7': `<a:YED:786950574356168786>`,
    '8': `<a:SEKZ:786950574092451840>`,
    '9': `<a:DOKUZ:786950572262817802>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
 '0': `<a:SIFIR:786950575463858217>`,
    '1': `<a:BR:786950575337111563>`,
    '2': `<a:K_:786950575731900417>`,
    '3': `<a:UC:786950575740420126>`,
    '4': `<a:DRT:786950575635300402>`,                      
    '5': `<a:BE:786950575571992627>`,
    '6': `<a:ALTI:786950575647752222>`,
    '7': `<a:YED:786950574356168786>`,
    '8': `<a:SEKZ:786950574092451840>`,
    '9': `<a:DOKUZ:786950572262817802>`}[d];
      })
    }
 
  /////////////////////////////////////////
    var bostbasansayi = message.guild.roles.get('786532041180184616').members.size.toString().replace(/ /g, "    ")
  var üs2 = bostbasansayi.match(/([0-9])/g)
  bostbasansayi = bostbasansayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    bostbasansayi = bostbasansayi.replace(/([0-9])/g, d => {
      return {
   '0': `<a:SIFIR:786950575463858217>`,
    '1': `<a:BR:786950575337111563>`,
    '2': `<a:K_:786950575731900417>`,
    '3': `<a:UC:786950575740420126>`,
    '4': `<a:DRT:786950575635300402>`,                      
    '5': `<a:BE:786950575571992627>`,
    '6': `<a:ALTI:786950575647752222>`,
    '7': `<a:YED:786950574356168786>`,
    '8': `<a:SEKZ:786950574092451840>`,
    '9': `<a:DOKUZ:786950572262817802>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "✮";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:SIFIR:786950575463858217>`,
    '1': `<a:BR:786950575337111563>`,
    '2': `<a:K_:786950575731900417>`,
    '3': `<a:UC:786950575740420126>`,
    '4': `<a:DRT:786950575635300402>`,                      
    '5': `<a:BE:786950575571992627>`,
    '6': `<a:ALTI:786950575647752222>`,
    '7': `<a:YED:786950574356168786>`,
    '8': `<a:SEKZ:786950574092451840>`,
    '9': `<a:DOKUZ:786950572262817802>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
   '0': `<a:SIFIR:786950575463858217>`,
    '1': `<a:BR:786950575337111563>`,
    '2': `<a:K_:786950575731900417>`,
    '3': `<a:UC:786950575740420126>`,
    '4': `<a:DRT:786950575635300402>`,                      
    '5': `<a:BE:786950575571992627>`,
    '6': `<a:ALTI:786950575647752222>`,
    '7': `<a:YED:786950574356168786>`,
    '8': `<a:SEKZ:786950574092451840>`,
    '9': `<a:DOKUZ:786950572262817802>`}[d];
      })
    }
  ///codare farkıyla bebeğim
let emoji1 = `<:hac:786536920662540309>`;
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('✮ Athanasia')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n ${emoji1} **Boost Basan Toplam ** ${bostbasansayi} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
 
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668");
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}