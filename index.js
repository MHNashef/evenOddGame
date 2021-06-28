const getPlayers = require("./getPlayers");
const roundWinner = require("./roundWinner");
const args = require("minimist")(process.argv);

const MAX = 13;
const MIN = -5;
const players = [];
const bestOf = args.b || 5;

getPlayers(args.n, players);

function winnerDecided() {
  let foundWinner = false;
  players.forEach((player) => {
    if (player.score === Math.ceil(bestOf / 2)) {
      foundWinner = true;
    }
  });
  return foundWinner;
}

let roundNum = 1;
while (!winnerDecided()) {
  let rnd = Math.floor(Math.random() * (MAX - MIN)) + MIN;
  let p1 = 0;
  let p2 = 1;

  if (players.length > 2) {
    p1 = Math.floor(Math.random() * players.length);
    do {
      p2 = Math.floor(Math.random() * players.length);
    } while (p1 == p2);
  }

  roundWinner(rnd, p1, p2, players, roundNum);

  roundNum++;
}
console.log(
  `${
    players[0].score > players[1].score ? players[0].name : players[1].name
  } Wins!`
);
console.table(players);
