/**
 * @author ricardo-as1
 * @instagram https://www.instagram.com/kingzin.021/
 * @github https://github.com/ricardo-as1
 * @server_support https://discord.gg/HKkHaqPNac
 * @see https://github.com/ricardo-as1/BaseBotsDiscordJS/blob/main/Src/Events/LoadCommands.js
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const { Collection } = require('discord.js');
const { getFormattedDate } = require('../ConfigHub/TimeString.js');
const { ChalkColors: { ChalkOrange, ChalkWhite } } = require('../ConfigHub/System.js');

/**
 * Carrega os comandos do bot e organiza por categorias.
 * @param {Object} client - O cliente do Discord.
 */

const loadCommands = (client) => {
  // Verifica se os comandos foram carregados para evitar duplicação
  if (client.commandsLoaded) return;

  client.commands = new Collection();
  client.aliases = new Collection();
  const commandsPath = path.join(__dirname, '../Commands');

  console.log(chalk.greenBright('✅ COMANDOS CARREGADOS:'));

  if (!fs.existsSync(commandsPath)) {
    console.error(chalk.red('💥 | Diretório de comandos não encontrado.'));
    return;
  }

  const categorias = fs.readdirSync(commandsPath);
  client.categories = categorias;

  categorias.forEach((category) => {
    const categoryPath = path.join(commandsPath, category);
    const commandFiles = fs.readdirSync(categoryPath).filter(file => file.endsWith('.js'));

    if (commandFiles.length > 0) {
      console.log(chalk.hex(ChalkOrange)(`📂 ${category}/`));

      commandFiles.forEach((file) => {
        const adjustedSpacing = Math.max(0, process.stdout.columns - file.length - getFormattedDate().length - 7);
        const spacing = ' '.repeat(adjustedSpacing);

        console.log(`   └── ${chalk.hex(ChalkWhite)(file)}${spacing}${chalk.hex(ChalkOrange)(getFormattedDate())}`);
        
        const command = require(path.join(categoryPath, file));
        if (command.name) {
          client.commands.set(command.name, command);
        }

        if (command.aliases && Array.isArray(command.aliases)) {
          command.aliases.forEach(alias => client.aliases.set(alias, command.name));
        }
      });
    }
  });

  client.commandsLoaded = true;
};

module.exports = loadCommands;