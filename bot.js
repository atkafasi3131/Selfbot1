const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send({embed: {
  color: 3447003,
  image: `https://cdn.discordapp.com/attachments/463275621137514496/463284034160689152/REEESSS.png`,
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
