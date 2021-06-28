function roundWinner(rnd, p1, p2, players, roundNum) {
    if (rnd % 2 === 0) {
      players[p1].score++;
      console.log(
        `Round #${roundNum}, random number is ${rnd}, ${players[p1].name} scored!`
      );
    } else {
      players[p2].score++;
      console.log(
        `Round #${roundNum}, random number is ${rnd}, ${players[p2].name} scored!`
      );
    }
    console.log(
      `Status: ${players[p1].name} ${players[p1].score}, ${players[p2].name} ${players[p2].score}`
    );
  }


module.exports = roundWinner;