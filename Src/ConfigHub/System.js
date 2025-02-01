/**
 * @author ricardo-as1
 * @github https://github.com/ricardo-as1/Hyouka.git
 * @support https://discord.gg/5MWurPkP6S
 * @see https://github.com/ricardo-as1/Hyouka/blob/HyoukaDefaultBranch/Src/ConfigHub/System.js.yaml
 */

// Crie um bot: https://discord.com/developers/applications
// Biblioteca de cores: https://coolors.co/colors

module.exports = {
  Sync: {
    token: process.env.token || "Coloque o token do bot aqui!",
    defaultPrefix: "Coloque o prefixo padrão do bot aqui!",
    botInvite: "Coloque o link de convite do seu bot aqui!",
    supportServer: "Coloque o link do seu servidor de suporte aqui!",
    idOwner: "Coloque o id do seu bot aqui!",
  },

  Colors: {
    defaultEmbedColor: "#5865F2",
    errorEmbedColor: "#FF0000",
    successEmbedColor: "#00FF00",
    warningEmbedColor: "#FFA500",
    infoEmbedColor: "#DFDB00FF",
  },

  Logs: {
    kickChannel: "Coloque aqui o id do canal de kick!",
    banChannel: "Coloque aqui o id do canal de ban!",
    warnChannel: "Coloque aqui o id do canal de aviso!",
    deleteMessagesChannel: "Coloque aqui o id do canal de Delete Messages!",
    joinChannel: "Coloque aqui o id do canal de join(Entrada)!",
    leaveChannel: "Coloque aqui o id do canal de leave(Saida)!",
  },

  // Cores localizadas em: LoadCommands.js, LoadEvents.js, Ready.js.
  ChalkColors: {
    ChalkWhite: "#e3edf7",
    ChalkOrange: "#FFA500",
    ChalkBlue: "#5865F2",
  }
}