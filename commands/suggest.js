const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    
    if (!args[0]) return message.reply(":x: **-** Geef een suggestie op!");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("**ERROR SNWY38**, meldt deze foutcode bij een Developer.");

    var Suggestie = args.join(" ");

    var embed = new discord.MessageEmbed()
            .setThumbnail(message.author.displayAvatarURL())
            .setTitle("Snwy Discord - Suggestie")
            .setDescription(`Nieuwe Suggestie!\n\n**Suggestie:** ${Suggestie}\n**Ingezonden door:** ${message.author}\n\nLaat jou suggestie/idee weten met *!suggestie (suggestie)*`)
            .setColor("RANDOM")
            .setFooter(`${message.member.displayName} • Snwy Discord`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();

            var channel = message.member.guild.channels.cache.get("953648197656526848");
    
        channel.send(embed).then(async (msg) => {
            await msg.react('✅');
            await msg.react('❌');
            message.delete();
            message.channel.send(":white_check_mark: **||** Done!");
        }).catch(err => {
            console.log(err);
        });
    
}


module.exports.help = {
    name: "suggest"
}