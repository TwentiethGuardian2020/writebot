var Discord = require("discord.js")
Discord = new Discord.Client()
Discord.on('message', async (msg) => {
    if (msg.author.bot) return;
    if (msg.content.startsWith('>remind')) {
    msg.channel.send(`WRITE, YOU FOOL, WRITE! ${msg.mentions.members.first()}`);
    }
    if (msg.content.startsWith('>moirainequote')) {
    msg.channel.send(`The Wheel weaves as the Wheel wills.`);
    }
    if (msg.content.startsWith('>gandalfquote1')) {
    msg.channel.send(`Here is your flaw, Shaitan, Lord of the Dark, Lord of Envy, Lord of Nothing, here is why you fail. It was not about me. It’s never been about me.”
    It was about a woman, torn and beaten down, cast from her throne and made a puppet. A woman who had crawled when she had to. That woman still fought.
    It was about a man that love repeatedly forsook. A man who found relevance in a world that others would have let pass them by. A man who remembered stories and who took fool boys under his wing when the smarter move would have been to keep on walking. That man still fought.
    It was about a woman with a secret, a hope for the future. A woman who had hunted the truth before others could. A woman who had given her live, then had it returned. That woman still fought.
    It was about a man whose family was taken from him, but who stood tall in his sorrow and protected those he could.
    It was about a woman who refused to believe that she could not help, could not heal those who had been harmed.
    It was about a hero who insisted with every breath that he was anything but a hero.
    It was about a woman who would not bend her back while she was beaten, and who shown with a light for all who watched, including Rand.
    It was about them all.`);
    }
    if (msg.content.startsWith('>randquote')) {
    msg.channel.send(`YOU...SHALL NOT... PASS!`);
      }
    if (msg.content.startsWith('>createchannel')) {
      var name = msg.content.replace('>createchannel ', '')
      msg.guild.channels.create(name)
    }
    
});
Discord.login(process.env.TOKEN)
