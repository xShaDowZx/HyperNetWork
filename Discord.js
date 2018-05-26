const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

////testing
const ms = require("ms");

const fs = require('fs');

var user = {};
var warn = {};

client.on('message', function(message) {

    	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;

  if (message.author.id == client.user.id) return;
  if(JSON.stringify(user).indexOf(message.author.id) == -1) {
    user[message.author.id] = message.createdTimestamp;
    return;
  } else {
    if (Date.now() - user[message.author.id] < 695){
              message.author.delete

      if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
        warn[message.author.id] = 1;
      } else {
        warn[message.author.id]++;
        message.author.delete
      }
      if (warn[message.author.id] < 4) {
        message.author.delete

      }
      delete user[message.author.id];
              message.author.delete

    } else {
      delete user[message.author.id];
              message.author.delete

    }
  }
  if (warn[message.author.id] == 4) {		   
     if (!message.channel.guild) return;
             message.author.delete

let muteRole1 = message.guild.roles.find("name", "Muted");
     if (!muteRole1) return;
    var guild = message.channel.guild;
          var currentTime = new Date(),
                   Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes()+1,
            seconds = currentTime.getSeconds();

           if (!message.channel.guild) return;
     if (!muteRole1) return;
    var guild = message.channel.guild;
    message.guild.members.get(message.author.id).addRole(muteRole1);
    
     var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);

delete warn[message.author.id];
    delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
     .setTitle(`Sender ${message.author.username}#${message.author.discriminator} `)
      .setDescription(":white_check_mark:  | `Try Spam '\ n \ nName: \ n"+`${message.author.username}#${message.author.discriminator}`+"\ n Punishment: \ nMute Chat \ n")
      .setFooter("Discord.js")
      .setColor("c91616")
    message.channel.send(embed500)
    	const embed20 = new Discord.RichEmbed()
      .setTitle(":scales: | Punished")
      .setDescription(`**You have violated the server rules ** \ n \ nIt has been penalized before :\nDotBot\n Type of punishment: \ nMute Chat \ nThe date of the sentence:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`If the penalty is wrong, continue with the administration`")
          .setFooter("Discord.js")
      .setColor("c91616")
    
     message.author.send(embed20)
  
  }
});
















///Managment Codes

//mute
client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "#mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** There is no Mute Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You must mention person first**').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Use:', 'Shut up / tell')
    .addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You dont have permission Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:white_check_mark: .. The member was given Muted**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. Done The member got muted**").catch(console.error);
});
  }

};

});

//unmute

client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === "#unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** There is no Mute Role 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** You must mention person first**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('User:', 'Shut up / tell')
    .addField('Unmuted:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('By:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** You dont have permission Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. Done Unmuted **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. Done Unmuted **").catch(console.error);
});
  }

};

});

//mutechannel and unmutechannel

client.on('message', message => {

    if (message.content === "#mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' You do not have permissions');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("Chat has been closed :white_check_mark: ")
           });
             }
if (message.content === "#unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You do not have permissions');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("Chat has been opened:white_check_mark:")
           });
             }

});

//kick

  client.on('message', (message) => {
    if (message.content.startsWith('#kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' This person has been kicked from the server');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 

//ban

client.on('message', (message) => {
    if (message.content.startsWith('#ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('This property is for management only');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'This person has been banned from the server');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});

//jail

client.on("message", (message) => {
var prefix = "#";
      if (message.content.startsWith(prefix+"jail")) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
    if (message.author.bot) return;
      if (!message.channel.guild) return;
      var mention = message.mentions.members.first
      let role = (message.guild.roles.find("name","jail"));      
      if (!role) message.guild.createRole({ name:'jail', permissions:[1] });
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
      if(!message.mentions.members.first()) return message.reply("Mention player ??")
      let member = message.mentions.members.first()
member.addRole(message.guild.roles.find("name","jail")).catch(console.error);
const ra3d = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('The person entered the jail ?') 
             .setColor('RANDOM')
              message.channel.sendEmbed(ra3d);    
  }
});

//unjail

client.on("message", (message) => {
var prefix = "#";
      if (message.content.startsWith(prefix+"unjail")) {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** You dont have permission 'Manage Roles' **").catch(console.error);
          if (message.author.bot) return;
      if (!message.channel.guild) return;
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("This is for management");
      if(!message.mentions.members.first()) return message.reply("Mention player ??");
      let member = message.mentions.members.first()
member.removeRole(message.guild.roles.find("name","jail")).catch(console.error);
const ra3d = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle('You were released ??')
             .setColor('RANDOM')  
              message.channel.sendEmbed(ra3d);    
  }
});

//clear

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Set the number of messages you want to delete 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\n The number of messages that have been cleared: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

//delete All channels are rolles

client.on('message', omar => {
var prefix = "#";
if(omar.content.split(' ')[0] == prefix + 'delchannel') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});
}
if(omar.content.split(' ')[0] == prefix + 'delroles') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});
omar.reply("`**All roles got deleted**`")
}
});

//bc

client.on('message', message => {
 var prefix = "#"
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » Your Message : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
///////////////////////////////////////////

//Change the bot stats

const devs = ['236192758765715456' , '' , '' , ''];
const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });

//tag

const figlet = require('figlet');
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('Please write the text you want');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});

///general Codes

//ping

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

//roll

client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Subtract a certain number from which to withdraw**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//avatar 

client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//server

client.on('message', function(msg) {
         var prefix = "#"
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** Server Type**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ Number of members__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ Number of members online__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ Text Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ Voice Channels__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ Owner__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ Server Id__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ The server was done in__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//id

  client.on('message', message => {
    var prefix = "#"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |??.";
}
if (z.bot) {
var w = 'Bot';
}else {
var w = 'Member';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('| Your Name:',`**<@` + `${z.id}` + `>**`, true)
.addField('| ID:', "**"+ `${z.id}` +"**",true)
.addField('| Playing:','**'+y+'**' , true)
.addField('| Your account type:',"**"+ w + "**",true)    
.addField('| The code is right for your account:',"**#" +  `${z.discriminator}**`,true)
.addField('**The date in which your account was created | ?? **: ' ,year + "-"+ month +"-"+ day)    
.addField("**The date you entered the server ?   :**", message.member.joinedAt.toLocaleString())    

.addField('**? | The date of creating your full account:**', message.author.createdAt.toLocaleString())
.addField("**The last message for you | ??  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**Mention correctly   ? **').catch(console.error);

}

});


//roles

client.on('message', message => {
    if (message.content === '#roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});

//bot

client.on('message', message => {
     if (message.content === "#bot") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers:**" , client.guilds.size)
  .addField("**Users:**", client.users.size)
  .addField("**channels:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});

//invite my to your discord server

             client.on('message', message => {
				    var prefix = "#"
                if(message.content === prefix + "inv") {
                    if (!message.member.hasPermission('MOVE_MEMBERS')) return message.reply("** You dont have permission **").catch(console.error);
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite Discord.js Bot!**")
                    .setURL("https://discordapp.com/api/oauth2/authorize?client_id=449341428171014144&permissions=8&scope=bot");
                   message.channel.sendEmbed(embed);
                  }
});

//member

client.on('message', message => {
    if(message.content == '#member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info??
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });



//website search

 const googl = require('goo.gl');
client.on('message', message => {
	var prefix = "#"
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'website')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

const sql = require("sqlite");
client.on("message", async message => {
  var prefix = "#"
    if (message.content.startsWith(prefix + "achieve")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("Put something you want to achieve!");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});

//calculate

const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
	var prefix = "#"
 if (msg.content.startsWith(prefix + 'calculate')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});

//uptime

client.on('message', message => {
    var prefix = "#"
if (message.content.startsWith(prefix + "uptime")) {
   let uptime = client.uptime;

   let days = 0;
   let hours = 0;
   let minutes = 0;
   let seconds = 0;
   let notCompleted = true;

   while (notCompleted) {

       if (uptime >= 8.64e+7) {

           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {

           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }

       if (uptime < 1000)  notCompleted = false;

   }

   message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

//discrim

client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = "#";
                  if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
    
    if (message.author.bot) return;
    
    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);
}
});


///////////////////////////////////////

///Important Channels

//Welcome

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '👋-welcome'); //channel name
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | Welcome to Discord.js' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('?| You are the member number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

//GoodBye
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`Good Bye! :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`Good bye Nice to meet you :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   remain',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== We wish you the best ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', '😢-good-bye') //channel name
    if (!channel) return;
    channel.send({embed : embed});
    })   
  
//Suggest

    var prefix = "#"
client.on('message', message => {

  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("449243876817895434").send( //Room ID
      "\n" + "**" + "Server :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + "  Proposal : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " Suggestion : " + "**" +
      "\n" + "**" + args + "**")
  }
  });
  
//Report

client.on('message', msg => { 
if (msg.content.startsWith(`#report`)) {

   let args = msg.content.split(" ").slice(1);

  if (!msg.mentions.members.first()) return msg.reply(`You must mention person first`)

  if (!args[1]) return msg.reply(`Ummm .. Write your message`)

  if (msg.guild.channels.find('name', '📝-report')) { //channel name

    msg.guild.channels.find('name', '📝-report').send(`
  Report : ${msg.mentions.members.first()}
  Reported by:  : ${msg.member}
  Room : ${msg.channel.name}
  Reason : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
  `)
  }
}
}) 
  
/////////////////////////


//////////////////

///Help Codes

client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
      .addField("**:globe_with_meridians: General commands**","** **")
      .addField("**#ping :stopwatch:**","**Check your connection speed**")
      .addField("**#avatar :camping:**","**Pictures of the chosen person**")
      .addField("**#bot :1234:**","**Info about Discord.js Bot**")
      .addField("**#server :recycle:**","**For server information**")
      .addField("**#roles :medal: **","**Show Roles**")
      .addField("**#id :arrows_counterclockwise: **","**Show your id**")
      .addField("**#member :hearts: **", "**Shows who everyone Status**")
      .addField("**#uptime :timer:  **", "**This code tells you how many days/hours/seconds the bot is working**")
      .addField("**#inv :knife: **", "**Invite Discord.js bot to your discord server**")
      .addField("**#achieve :fireworks: **", "**Put something you want to achieve!**")
      .addField("**#sug :notepad_spiral: **", "**Do #sug {Write your suggestion}**")
      .addField("**#calculate :pencil: **", "**Example: #calculate 1+1**") 
      .addField("**#website :map: **", "**website Search**")
      .addField("**#tag :ideograph_advantage: **", "**write the text you want**")
      .addField("**#report :pencil: **","**Report members**") 
      .addField("**#MusicCommands :musical_note: **", "**Music Commands**")
      .addField("**#StaffCommands :radioactive: **", "**Management orders (Staff Commands)**")
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
}); 
  
//Admin commands 
 
 client.on('message', message => {
            if (message.content.startsWith(prefix + "StaffCommands")) {
               if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('This property is for management only');
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
      .addField("**:radioactive: Management orders**","** **")
      .addField("**#bc  :mega:**","**For Broadcast**")
      .addField("**#clear :octagonal_sign:**","**Clear Chat**")
      .addField("**#kick  :outbox_tray:**","**Kick memebers**")
      .addField("**#ban  :no_entry:**","**Ban members**")
      .addField("**#mute  :mute: **","**Mute members**")
      .addField("**#mutechannel  :mute: **","**Mute channels**")
      .addField("**#jail   :skull_crossbones: **","**Jail members**")
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
}); 
   
//Music commands 
  
client.on('message', message => {
            if (message.content.startsWith(prefix + "MusicCommands")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
      .addField("** :musical_note: Music Commands (Not available right now) **","** **")
      .addField("**#play :musical_note:**","**Turn on the desired**")
      .addField("**#stop  :musical_keyboard:**","**Stop required**")
      .addField("**#pause :musical_score:**","**Turn off the temp timer**")
      .addField("**#resume :mute: **","**Turn on the desired after the stop**")
	  .addField("**#skip :left_right_arrow:**","**Skip the song**")
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
}); 

























































 //bot ready 
 client.on('ready',  () => {
  console.log('By : _xShaDowZx');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
}); 

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Made By _xShaDowZx - Script By : _xShaDowZx`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : _xShaDowZx ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(` ON ${client.guilds.size} Servers - Prefix #help`,"Type #help")
client.user.setStatus("Online")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});


client.login('process.env.token');
