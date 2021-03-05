const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const kanal = ayarlar.kanal;
const moment = require("moment");
const fs = require("fs");
const db = require('quick.db')
require("./util/eventLoader")(client);
const express = require("express");
const app = express();
let prefix = ayarlar.prefix

const http = require("http");
app.get("/", (request, response) => {//splashen
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const log = message => {
  console.log(` => { ${message} } `);
  
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {//splashen
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`AKTİF: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {//splashen
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////////////////////////

client.elevation = message => {//splashen
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

client.login(ayarlar.token);


client.on("ready", () => {//splashen
  client.user.setPresence({
    game: { name: `✮ Cosmos ❤`, type: "WATCHING" },
    status: "online"
  });
});



// İSİM YAŞ İSİM DEĞİŞTİRME 

client.on("guildMemberAdd", member => {
  let tag = ayarlar.tag;
  //splashen
  member.setNickname(`${tag} İsim • Yaş`);
});

// İSİM YAŞ İSİM DEĞİŞTİRME SON






//BOT ROLÜ

client.on(`guildMemberAdd`, async member => {//splashen
  let botrol = ayarlar.botROL;
if(!member.bot) return;
member.addRole(botrol)
})

// BOT ROLÜ SON




// kayıtsız rolü

client.on(`guildMemberAdd`, async member => {
  let kayıtsızROL = ayarlar.kayıtsızROL;
if(member.bot) return;
member.addRole(kayıtsızROL)
})

/// kayıtsız rolü son
//splashen


// TAG LOG
client.on("userUpdate", async (oldUser, newUser) => {//splashen
  if (oldUser.username !== newUser.username) {
    let tag = ayarlar.tag
  
    let rol = ayarlar.tagROL;
    
    
    let embed1 = new Discord.RichEmbed()
    .setDescription(`${newUser} ${tag} tagını aldığı için <@&${rol}> rolünü kazandı!`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    
    let embed2 = new Discord.RichEmbed()
    .setDescription(`${newUser} ${tag} tagını çıkardığı için <@&${rol}> rolünü kaybetti!`)
    .setImage('https://cdn.discordapp.com/attachments/620989964104237077/766391664163029012/RDF_Barrinha-1-2-1-1-1-1-1-1.gif')
    
    if (newUser.username.includes(tag) && !client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.channels.get(ayarlar.tagLOG).send(embed1)
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).addRole(rol)
    } if (!newUser.username.includes(tag) && client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).roles.has(rol)) {
      client.guilds.get(ayarlar.sunucuID).members.get(newUser.id).removeRole(rol)
      client.channels.get(ayarlar.tagLOG).send(embed2)
    }

  }
})
// TAG LOG SON
//splashen

// BOT OTOROL

client.on('guildMemberAdd', async member => {//splashen
if(member.user.bot)
member.setRoles(['766634491502395392'])
})
// GİRİŞ 
  client.on("guildMemberAdd", member => {  
    var üyesayısı = member.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:_0:781480032052314123>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '1': `<a:_1:781480031482282014>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '2': `<a:_2:781480033956397056>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '3': `<a:_3:781480035295035392>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '4': `<a:_4:781480036900274186>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE                        
    '5': `<a:_5:781480037861556235>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '6': `<a:_6:781480037198200843>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '7': `<a:_7:781480037035278336>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '8': `<a:_8:781480037811355648>`, // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
    '9': `<a:_9:781480037622087680>`}[d]; // YAPMAYI BİLMİYORSAN VİDEOYU DİKKATLİ İZLE
      })
  
    }
    const kanal = "787636700963799040"; // HOŞ GELDİN MESAJINI NEREYE ATACAKSA O KANALIN İDSİNİ GİRİN
    let user = client.users.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
    const embed = new Discord.RichEmbed()
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = ' **<a:lord_carp:763660349072211989>**'
  if (kurulus > 1296000000) kontrol = ' **<a:onay:763034555799961631>**'
    moment.locale("tr");
    let stg = client.channels.get(kanal);
  stg.send("<a:emo4:787312865149321247> ** Hoşgeldin! " + member + " Seninle "+ üyesayısı +" Kişiyiz.**  \n\n<a:aphrodite_sonsuz:781041321636265995> **Müsait olduğunda Teyit Odalarından Birine Geçip Kaydını Yaptırabilirsin..**  \n\n<a:378:787313397447393342> **<@&787636634521960479> seninle ilgilenicektir.**\n\n<a:emo6:787312849491984385>  **Hesabını" + moment(member.user.createdAt).format(" YYYY DD MMMM dddd (hh:mm:ss) ") +  " Tarihinde Oluşturmuşsun.** \n\n<a:lord_yant:763034979306831882>  **Hesap Durumu:** "  + kontrol + "   \n\n<a:yldz:787313396935950366> **Tagımızı alarak `✮` bize destek olabilirsin.** \n\n"
    );
  });
// GİRİŞ SON
//splashen
