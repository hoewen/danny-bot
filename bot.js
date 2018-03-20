const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("made"))
               message.channel.send("That's right, a maid. A maid I can bang.")
        }

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("kid"))
               message.channel.send("We gotta definitely write a song about how we do not diddle kids! 'Do not diddle kids, it's no good diddling kids.'")
       }        

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("oof"))
               message.channel.send("Ah! Oh! Oh! Botched toe! I botched that one. Oh, that's a botch job. That's bleeding. I need some trash to plug up the cut.")
       }        

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("who"))
               message.channel.send("He's the mortician. I invited him.")
       }

});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
