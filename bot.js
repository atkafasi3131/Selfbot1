const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send({embed: {
  color: 3447003,
  Image: 'https://images-ext-2.discordapp.net/external/jdUpWkCiEKNyA-bmfBh44e1x1K-g0qCCMaXoRMDafM4/%3Fsize%3D1024/https/cdn.discordapp.com/icons/462983082438295568/377da11102430e42aad7543b9951712a.webp',
  description: `**Merhaba! Aramıza katılmak istermisin. Eğerki istersen verdiğim linke gel! Heee, yetkili olayım istiyosanda 'V |' Ekleyeblirsin ismine! Unutma, kapımız her daim açık. Bekliyoruz!  [TIKLA VE KATIL](https://discord.gg/xUw6bQ2)**`
}});

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
