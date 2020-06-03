var Discord = require("discord.js")
Discord = new Discord.Client()
Discord.on('message', async (msg) => {
    if (msg.author.bot) return;
    if (msg.content.startsWith('>remind')) {
    msg.channel.send(`WRITE, YOU FOOL, WRITE! ${msg.mentions.members.first()}`);
    }
    if (msg.content.startsWith('>moirainequote')) {
    msg.channel.send(`The Wheel weaves as the Wheel wills. ${msg.mentions.members.first()}`);
    }
    if (msg.content.startsWith('>createchannel')) {
      var name = msg.content.replace('>createchannel ', '')
      msg.guild.channels.create(name)
    }
});
Discord.login(process.env.TOKEN)
