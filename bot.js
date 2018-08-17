const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.sendsend({embed: {
  color: 3447003,
  description: `**Merhaba! Aramıza katılmak istermisin. Eğerki istersen verdiğim linke gel! Heee, yetkili olayım istiyosanda 'V |' Ekleyeblirsin ismine! Unutma, kapımız her daim açık. Bekliyoruz!  https://discord.gg/xUw6bQ2**`
}});

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
   
});



bot.on('ready',()=> {
console.log('NEGRONN');

});

bot.login(process.env.BOT_TOKEN);
