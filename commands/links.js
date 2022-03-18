const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Links - Tech Snwy")
            .setDescription('Je kan mij vinden op diverse platformen en contacten of deze platformen of via deze contactgegevens, zie hieronder alle Socials & Contactgegevens van mij!\n\n<:SNWY_Instagram:880139714571669524> Instagram\nnhttps://www.instagram.com/tech_snwy/\n<:SNWY_TikTok:880139656778358904> TikTok\nhttps://www.tiktok.com/@.tech_snwy\n<:SNWY_TikTok:880139656778358904> Clips TikTok\nhttps://www.tiktok.com/@techsnwy.clips\n<:SNWY_Youtube:880139682091003954> Youtube\nhttps://www.youtube.com/channel/UCKLov_tz9ZJMtp9GCclExTg\n<:SNWY_Twitter:880139666886639648> Twitter\nhttps://twitter.com/.tech_snwy\n<:SNWY_Twitch:880139696070594591> Twitch\nhttps://www.twitch.tv/tech_snwyy\n\n:e_mail: Zakelijke Mail\n``t.snwy.management@gmail.com``\n:e_mail: Mail Manager\n``koenvianen28@gmail.com``')
            .setAuthor("Snwy Discord", "https://images-ext-2.discordapp.net/external/I2ZYn5h72yExewguZzpWhObtsXHNf5H-yuBZWy-YkNw/%3Fsize%3D256/https/cdn.discordapp.com/banners/845678808857051146/29290c6892cf37941c542a77146da8dc.png")
            .setThumbnail("https://media.discordapp.net/attachments/909564426657620048/950685682144276480/kisspng-computer-icons-hyperlink-link-vector-5adab241aa34c1.8222734715242819216972.png")
            .setFooter("Snwy Management");

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "links"
}