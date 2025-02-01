/**
 * @author ricardo-as1
 * @instagram https://www.instagram.com/kingzin.021/
 * @github https://github.com/ricardo-as1
 * @server_support https://discord.gg/HKkHaqPNac
 * @see https://github.com/ricardo-as1/BaseBotsDiscordJS/blob/main/Src/Events/Ready.js
 */

const chalk = require("chalk");
const { ActivityType } = require("discord.js");
const { ChalkColors: { ChalkBlue } } = require("../ConfigHub/System.js");

// Use se caso queira adicionar uma database ao bot
const { notifyDatabaseStatus } = require('../Database/Database.js');

module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    // Definindo as atividades do bot
    const activities = [
      {
        name: `Hello! I'm ${client.user.username}`,
        type: ActivityType.Streaming,
      },
      // Podem ser adicionadas aqui: Watching, Listening, Playing, Streaming, etc.
    ];

    let currentActivity = 0;

    // Função para atualizar a presença do bot
    function updatePresence() {
      client.user.setPresence({
        activities: [activities[currentActivity]],
        status: 'online'
      });
      currentActivity = (currentActivity + 1) % activities.length;
    }

    // Atualiza a presença do bot a cada 10 segundos
    setInterval(updatePresence, 10000);
    updatePresence();

    // Função para imprimir um separador no console
    function printSeparator() {
      console.log(chalk.hex(ChalkBlue)("═".repeat(process.stdout.columns)));
    }

    printSeparator();

    // Exibe informações sobre o bot no console
    const userCount = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);
    const serverCount = client.guilds.cache.size;
    const uptime = process.uptime().toFixed(2);
    const Database = notifyDatabaseStatus(true); // Você pode passar true ou false com base no estado da conexão.

    // Grupo de informações sobre a database
    console.group(chalk.greenBright.bold.italic('✔ Database Status'));
    console.log(chalk.white.italic("🗃️ "), chalk.hex(ChalkBlue).underline.italic(Database));
    console.groupEnd();

    console.log('');

    // Grupo de informações sobre o bot
    console.group(chalk.greenBright.bold.italic(`✔ BOT STATUS`));
    console.log(('🤖 ') + chalk.hex(ChalkBlue).underline.italic("Logado como:"), chalk.white.italic(client.user.tag));
    console.log(('🆔 ') + chalk.hex(ChalkBlue).underline.italic("Id do bot:"), chalk.white.italic(client.user.id));
    console.log(('🟢 ') + chalk.hex(ChalkBlue).underline.italic("Atual status:"), chalk.green.italic(client.user.presence.status));
    console.groupEnd();

    console.log('');

    // Grupo de informações sobre servidores
    console.group(chalk.greenBright.bold.italic('✔ INFORMAÇÕES SOBRE SERVIDORES'));
    console.log(('🌐 ') + chalk.hex(ChalkBlue).underline.italic("Servidores:"), chalk.white.italic(serverCount));
    console.log(('👥 ') + chalk.hex(ChalkBlue).underline.italic("Usuários:"), chalk.white.italic(userCount));
    console.groupEnd();

    console.log('');

    // Grupo de informações sobre o sistema
    console.group(chalk.greenBright.bold.italic('✔ INFORMAÇÕES DO SISTEMA'));
    console.log(
      "📦",
      `${chalk.hex(ChalkBlue).underline.italic("Discord.js")} ${chalk.white.italic(require("discord.js").version)}`,
      "/",
      "📦",
      `${chalk.hex(ChalkBlue).underline.italic("NodeJs")} ${chalk.white.italic(process.versions.node)}`,
      "/",
      "📦",
      `${chalk.hex(ChalkBlue).underline.italic("Uptime")} ${chalk.white.italic(uptime + 's')}`
    );
    console.groupEnd();

    printSeparator();
  }
};
