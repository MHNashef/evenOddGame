const prompt = require("prompt-sync")({ sigint: true });
const MAX = 13;
const MIN = -5;

const players = {
  player1: {
    name: "",
    score: 0,
  },
  player2: {
    name: "",
    score: 0,
  },
};

const player1 = prompt("Enter Player1 name: ");
const player2 = prompt("Enter Player2 name: ");
players["player1"].name = player1;
players["player2"].name = player2;


let roundNum = 1;
while (players.player1.score < 3 && players.player2.score < 3) {
  let rnd = Math.floor(Math.random() * (MAX - MIN)) + MIN;

  if (rnd % 2 === 0) {
    players["player1"].score++;
    console.log(
      `Round #${roundNum}, random number is ${rnd}, ${players.player1.name} scored!`
    );
    console.log(
      `Status: ${players.player1.name} ${players.player1.score}, ${players.player2.name} ${players.player2.score}`
    );
  } else {
    players["player2"].score++;
    console.log(
      `Round #${roundNum}, random number is ${rnd}, ${players.player2.name} scored!`
    );
    console.log(
      `Status: ${players.player1.name} ${players.player1.score}, ${players.player2.name} ${players.player2.score}`
    );
  }

  roundNum++;
}
console.log(
  `${
    players.player1.score > players.player2.score
      ? players.player1.name
      : players.player2.name
  } Wins!`
);
