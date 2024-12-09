/**
 * @author ricardo-as1
 * @instagram https://www.instagram.com/kingzin.021/
 * @github https://github.com/ricardo-as1
 * @server_support https://discord.gg/HKkHaqPNac
 * @see https://github.com/ricardo-as1/BaseBotsDiscord/blob/main/Src/ConfigHub/System.js
 */

// Crie um bot: https://discord.com/developers/applications
// Biblioteca de cores: https://coolors.co/colors

module.exports = {
  Sync: {
    token: process.env.token || "Coloque o token do seu bot aqui!",
    defaultPrefix: "Coloque o prefixo do seu bot aqui!",
    botInvite: "Coloque o link de convite do seu bot aqui!",
    supportServer: "Coloque o link do seu servidor de suporte aqui!",
    idOwner: "Coloque o id do seu bot aqui!",
  },

  Colors: {
    defaultEmbedColor: "Coloque aqui e a baixo a cor padrão dos embeds!",
    errorEmbedColor: "Coloque aqui e a baixo a cor de erro dos embeds!",
    successEmbedColor: "Coloque aqui e a baixo a cor de sucesso dos embeds!",
    warningEmbedColor: "Coloque aqui e a baixo a cor de aviso dos embeds!",
    infoEmbedColor: "Coloque aqui e a baixo a cor de info dos embeds!",
  },

  Logs: {
    kickChannel: "Coloque aqui o id do canal de kick!",
    banChannel: "Coloque aqui o id do canal de ban!",
    warnChannel: "Coloque aqui o id do canal de aviso!",
    deleteMessagesChannel: "Coloque aqui o id do canal de Delete Messages!",
    joinChannel: "Coloque aqui o id do canal de join(Entrada)!",
    leaveChannel: "Coloque aqui o id do canal de leave(Saida)!",
  },

  // Cores localizadas em: LoadCommands.js & LoadEvents.js.
  ChalkColors: {
    ChalkWhite: "#e3edf7",
    ChalkOrange: "##FFA500",
    ChalkBlue: "#5865F2",
  }
}