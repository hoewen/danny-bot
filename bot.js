const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("who")) {
               message.channel.send("He's the mortician. I invited him.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("wow")) {
               message.channel.send("We gotta definitely write a song about how we do not diddle kids! 'Do not diddle kids, it's no good diddling kids.'")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("made")) {
               message.channel.send("That's right, a maid. A maid I can bang.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("man")) {
               message.channel.send("I'm the Trash Man! I come out, I throw trash all over the- all over the ring! And then I start eatin' garbage! And then I pick up the trash can, and I bash the guy on the head.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("what")) {
               message.channel.send("You got to pay the troll toll if you want to get into this boy's hole!")
  	}

});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
