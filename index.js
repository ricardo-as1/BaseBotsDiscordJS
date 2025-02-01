/**
 * @author ricardo-as1
 * @instagram https://www.instagram.com/kingzin.021/
 * @github https://github.com/ricardo-as1
 * @server_support https://discord.gg/HKkHaqPNac
 * @see https://github.com/ricardo-as1/BaseBotsDiscordJS/blob/main/index.js
 */

const Discord = require("discord.js");
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent ]});

const loadEvents = require("./Src/Events/LoadEvents.js");
const loadCommands = require("./Src/Events/LoadCommands.js");
const handleMessage = require("./Src/Events/Handlemessage.js");
const { Sync: { token } } = require("./Src/ConfigHub/System.js");

// Tratamento de erros não capturados e promisses rejeitadas
process.on('uncaughtException', (error) => {
  console.error('⭕・Erro não capturado:', error);
});
process.on('unhandledRejection', (reason, promise) => {
  console.error('⭕・Promisse rejeitada:', promise, '🔴・Razão:', reason);
});

// Carregamento de eventos, comandos e faz o login do bot
loadEvents(client);
loadCommands(client);

// Adiciona o listener para o evento messageCreate
client.on('messageCreate', (message) => handleMessage(message, client));

client.login(token);