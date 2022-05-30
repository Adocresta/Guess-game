const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// player choose X or O
let gameOver = false;
let playerInputOne = null;
let playerInputTwo = null;

while (!gameOver) {
  // *player X Turn
  // player input for row and column number

  // check the number it should be between 1 and 3 (-1 for array logic)
  while (1) {
    playerInputOne = parseInt(prompt("Enter Row"));
    playerInputTwo = parseInt(prompt("Enter Column"));
    console.log(`your inputs are ${playerInputOne} and ${playerInputTwo}`);
    if (0 < playerInputOne < 4) {
      console.log("valid input");
    } else if (0 > playerInputTwo > 3) {
      console.log("invalin column input!");
    } else {
      console.log("invalin row input!");
    }
  }

  gameBoard[playerInputOne][playerInputTwo] = "X";

  // check if the space is not null or isNotOccupied
  // change the value with X
  //check rows for 3 matching X end turn

  // O turn
  //same stuff with O
  gameBoard[prompt("Enter Row") - 1][prompt("Enter Column") - 1] = "O";
  console.log(gameBoard);
}

console.log(gameBoard);
