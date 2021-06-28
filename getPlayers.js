const prompt = require("prompt-sync")({ sigint: true });

function getPlayers(numOfPlayers = 2, players) {
  for (let i = 0; i < numOfPlayers; i++) {
    let player = prompt(`Enter Player${i + 1} name: `);
    players.push({ name: player, score: 0 });
  }
}

module.exports = getPlayers;