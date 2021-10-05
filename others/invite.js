const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Surfs? Great, Thank you! Consider adding it to your server")
      .setColor("#F0EAD6")
      .setAuthor('Surfs','https://i.gifer.com/BCGc.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Surfs to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=888046743315443733&permissions=379839318544&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};