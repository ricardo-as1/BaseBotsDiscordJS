/**
 * @author ricardo-as1
 * @instagram https://www.instagram.com/kingzin.021/
 * @github https://github.com/ricardo-as1
 * @server_support https://discord.gg/HKkHaqPNac
 * @see https://github.com/ricardo-as1/Hyouka/blob/HyoukaDefaultBranch/Src/Events/LoadEvents.js
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const { getFormattedDate } = require('../ConfigHub/TimeString.js');
const { ChalkColors: { ChalkOrange, ChalkWhite } } = require('../ConfigHub/System.js');

/**
 * Função para carregar eventos no cliente do Discord.
 * @param {Object} client - O cliente do Discord.
 */

const loadEvents = (client) => {
  // Verifica se os eventos já foram carregados para evitar duplicação
  if (client.eventsLoaded) return;

  const eventsPath = path.join(__dirname, '../Events');
  console.log(chalk.greenBright('✅ EVENTOS CARREGADOS:'));

  if (!fs.existsSync(eventsPath)) {
    console.error(chalk.red('💥 | Diretório de eventos não encontrado.'));
    return;
  }

  // Filtra apenas arquivos .js dentro do diretório de eventos
  const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

  if (eventFiles.length === 0) {
    console.warn(chalk.yellow('🚧 | Nenhum evento encontrado.'));
    return;
  }

  // Exibe a pasta de eventos
  console.log(chalk.hex(ChalkOrange)('📂 Events/'));

  // Loga os eventos encontrados no terminal, com espaçamento ajustado para a data no final
  eventFiles.forEach(file => {
    const adjustedSpacing = Math.max(0, process.stdout.columns - file.length - getFormattedDate().length - 6);
    const spacing = ' '.repeat(adjustedSpacing);

    // Exibe o nome do evento e a data
    console.log(`   └──${chalk.hex(ChalkWhite)(file)}${spacing}${chalk.hex(ChalkOrange)(getFormattedDate())}`);

    // Carrega e registra o evento
    const event = require(path.join(eventsPath, file));

    // Verifica se o evento possui um nome e uma função execute válida
    if (event.name && typeof event.execute === 'function') {
      const eventHandler = (...args) => event.execute(...args, client);

      if (event.once) {
        client.once(event.name, eventHandler);
      } else {
        client.on(event.name, eventHandler);
      }
    }
  });

  // Marca os eventos como carregados para evitar duplicação
  client.eventsLoaded = true;
};

module.exports = loadEvents;