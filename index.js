const prompt = require("prompt-sync")({ sigint: true });
const MAX = 13;
const MIN = -5;

const players = [
  {
    player1: {
      name: "",
      score: 0,
    }
  },
  {
    player2: {
      name: "",
      score: 0,
    }
  },
];

const player1 = prompt("Enter Player1 name: ");
const player2 = prompt("Enter Player2 name: ");
players[0].player1.name = player1;
players[1].player2.name = player2;

let roundNum = 1;
while (players[0].player1.score < 3 && players[1].player2.score < 3) {
  let rnd = Math.floor(Math.random() * (MAX - MIN)) + MIN;

  if (rnd % 2 === 0) {
    players[0].player1.score++;
    console.log(
      `Round #${roundNum}, random number is ${rnd}, ${players[0].player1.name} scored!`
    );
    console.log(
      `Status: ${players[0].player1.name} ${players[0].player1.score}, ${players[1].player2.name} ${players[1].player2.score}`
    );
  } else {
    players[1].player2.score++;
    console.log(
      `Round #${roundNum}, random number is ${rnd}, ${players[1].player2.name} scored!`
    );
    console.log(
      `Status: ${players[0].player1.name} ${players[0].player1.score}, ${players[1].player2.name} ${players[1].player2.score}`
    );
  }

  roundNum++;
}
console.log(
  `${
    players[0].player1.score > players[1].player2.score
      ? players[0].player1.name
      : players[1].player2.name
  } Wins!`
);
