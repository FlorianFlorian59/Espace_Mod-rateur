const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot Pret!');
  });

client.login('NTQwMjAwOTA5ODI1NjM4NDEw.DzNc-Q.l_vdC-Z5ZR1gb5dP24Fxgr2WFyA');

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Raison facultative à afficher dans les journaux d\'audit').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`kick réussi ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('Je suis incapable de frapper le membre');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('Cet utilisateur n\'est pas dans cette guilde!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('Vous n\'avez pas mentionné l\'utilisateur à été kick');
    }
  }
});
  
  client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;
  
    // if the message content starts with "!ban"
    if (message.content.startsWith('!ban')) {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Ban the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           * Read more about what ban options there are over at
           * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
           */
          member.ban({
            reason: 'Ils étaient mauvais!',
          }).then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Banni avec succès ${user.tag}`);
          }).catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('J\'ai été incapable de ban le membre');
            // Log the error
            console.error(err);
          });
        } else {
          // The mentioned user isn't in this guild
          message.reply('Cet utilisateur n\'est pas dans cette guilde!');
        }
      } else {
      // Otherwise, if no user was mentioned
        message.reply('Vous n\'avez pas mentionné l\'utilisateur à ban!');
      }
    }
  });
  