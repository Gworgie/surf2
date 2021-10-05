   
// >8ball I am a coder
// yes, no, maybe, I don't know
const Discord = require('discord.js')

module.exports = {
    name: '8ball',
    description: 'The 8ball shall predict your future🎱',
    execute: async (message, args) => {
        // responses
     const responses = [
          "No",
          "Yes",
          "I don't know",
          "Probably",
          "Not at all",
          "Never ever ever ever ever",
          "Yessir",
          "There is a small chance",
          "Maybe" // we don't use , in the last one
        ];
        // this will randomize the responses
        const randomresponses = responses[Math.floor(Math.random() * responses.length)]
        const question = args.join(" ")
        const embed = new Discord.MessageEmbed()
        .setTitle('8Ball Says🎱')
        .setDescription(`Question: ${question}\n Answer: ${randomresponses}`)
        
        message.channel.send(embed)
    }
}