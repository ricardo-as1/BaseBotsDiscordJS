/**
 * @author ricardo-as1
 * @github https://github.com/ricardo-as1/Hyouka.git
 * @support https://discord.gg/5MWurPkP6S
 * @see https://github.com/ricardo-as1/Hyouka/blob/HyoukaDefaultBranch/Src/Commands/Admin/resetprefix.js
 */

/**
 * Placeholder command
 * @type {import("../../Base/BaseCommands.js")}
 */

const { removePrefix } = require('../../Database/Database.js');
const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { Sync: { defaultPrefix }, Colors: { errorEmbedColor, successEmbedColor } } = require('../../ConfigHub/System.js');

module.exports = {
  name: "resetprefix",
  description: "Reseta o prefixo para o padrão.",
  aliases: ['prefixreset'],
  usage: `${defaultPrefix}resetprefix`,
  category: "Admin",
  permission: ["Administrator"],

  async run(client, message) {
    const guildIconURL = message.guild.iconURL({ dynamic: true }) || client.user.displayAvatarURL();

    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
      const noPermissionEmbed = new EmbedBuilder()
        .setTitle(`❌ **${message.author.username}**`)
        .setColor(errorEmbedColor)
        .setDescription(`**❌ Vocês precisa ser Administrador para usar este comando!**`)
        .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL({ dynamic: true }) })
        .setTimestamp();

      return message.channel.send({ embeds: [noPermissionEmbed] });
    }

    removePrefix(message.guild.id);

    const successEmbed = new EmbedBuilder()
      .setTitle(`✅ Prefixo Resetado`)
      .setColor(successEmbedColor)
      .setDescription(`✅ **O prefixo foi resetado para o padrão: \`${defaultPrefix}\`**`)
      .setFooter({ text: `${message.guild.name}`, iconURL: guildIconURL })
      .setTimestamp()

    return message.channel.send({ embeds: [successEmbed] });
  }
};
