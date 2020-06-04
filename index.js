var Discord = require("discord.js")
Discord = new Discord.Client()
Discord.on('message', async (msg) => {
    if (msg.author.bot) return;
    if (msg.content.startsWith('>remind')) {
    msg.channel.send(`WRITE, YOU FOOL, WRITE! ${msg.mentions.members.first()}`);
    }
    if (msg.content.startsWith('>wotquote1')) {
    msg.channel.send(`"The Wheel weaves as the Wheel wills."`);
    }
    if (msg.content.starsWith('>WoTquote2')) {
    msg.channel.send(' "The last days are upon us. If you have grudges, put them behind you. If you have plots, bring them to completion. Make your final plays, for this... this is the end." ')
      }
    if (msg.content.startsWith('>gandalfquote1')) {
    msg.channel.send(`"FLY YOU FOOLS!"`);
      }
    if (msg.content.startsWith('>gandalfquote2')) {
    msg.channel.send('"Fool of a Took!"')
    }

    if (msg.content.startsWith('>createchannel')) {
      var name = msg.content.replace('>createchannel ', '')
      msg.guild.channels.create(name)
    }
});
Discord.login(process.env.TOKEN)
