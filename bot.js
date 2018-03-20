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

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("huh")) {
               message.channel.send("We've been over this -- your mother's a giant whore!")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("lol")) {
               message.channel.send("I've seen many pigs eat many men -- it was a blood bath.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("hi")) {
               message.channel.send("What’s up bitches! I’m a man cheetah! Wanna do something with this?")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("how")) {
               message.channel.send("Only two words came up! Asians and creampies.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("do")) {
               message.channel.send("Do you have some sort of donkey-brain database?")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("why")) {
               message.channel.send("I need an Advil, a roll of duct tape, a pack of peanuts, and four beers.")
  	}

});


client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("they")) {
               message.channel.send("They say I can't drink on a plane. They say I can't bang on a plane. They say I can't be a doctor!? A pilot?!")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("like")) {
               message.channel.send("I don't like this painting, Charlie. It's smug aura mocks me.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("woah")) {
               message.channel.send("One of the things I like doing most is banging whores.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("where")) {
               message.channel.send("It's going to be a very classy affair.")
  	}

});

client.on('message', message => {
     if (message.author.bot) return;
     if(message.content.toLowerCase().includes("help")) {
               message.channel.send("Would you like an egg in this trying time?")
  	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
