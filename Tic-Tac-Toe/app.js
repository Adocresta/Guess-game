const gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

// player choose X or O
let gameOver = false;
let playerInputOne = null;
let playerInputTwo = null;
let isValidInput = false;

while (!gameOver) {
  // *player X Turn
  console.log("Turn of 'X'");
  // player input for row and column number

  // check the number it should be between 1 and 3 (-1 for array logic)
  while (1) {
    while (!isValidInput) {
      playerInputOne = parseInt(prompt("Enter Row"));
      playerInputTwo = parseInt(prompt("Enter Column"));
      console.log(`your inputs are ${playerInputOne} and ${playerInputTwo}`);
      if (playerInputOne < 4 && playerInputTwo < 4) {
        if (playerInputOne > 0 && playerInputTwo > 0) {
          playerInputOne--;
          playerInputTwo--;
          isValidInput = true;
          console.log("valid input!");
          break;
        }
        console.log("invalid input!");
      } else {
        console.log("invalid input!");
      }
    }

    isValidInput = false;
    // check if the space is not null or isNotOccupied
    if (gameBoard[playerInputOne][playerInputTwo] === null) {
      // change the value with X
      gameBoard[playerInputOne][playerInputTwo] = "X";
      console.log(gameBoard);
      break;
    } else {
      console.log("space is taken come again");
    }
  }

  //check rows for 3 matching X end turn
  // 1st row
  if (
    gameBoard[0][0] === gameBoard[0][1] &&
    gameBoard[0][1] === gameBoard[0][2]
  ) {
    if (gameBoard[0][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 2nd row
  } else if (
    gameBoard[1][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[1][2]
  ) {
    if (gameBoard[1][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[1][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 3rd row
  } else if (
    gameBoard[2][0] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[2][2]
  ) {
    if (gameBoard[2][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[2][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 1st column
  } else if (
    gameBoard[0][0] === gameBoard[1][0] &&
    gameBoard[1][0] === gameBoard[2][0]
  ) {
    if (gameBoard[0][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 2dn column
  } else if (
    gameBoard[0][1] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][1]
  ) {
    if (gameBoard[0][1] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][1] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 3rd column
  } else if (
    gameBoard[0][2] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[2][2]
  ) {
    if (gameBoard[0][2] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][2] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // diagonally from left top to right bottom
  } else if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    if (gameBoard[0][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // diagonally from right top to left bottom
  } else if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0]
  ) {
    if (gameBoard[0][2] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][2] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
  } else {
    console.log("no winner");
  }

  // *Player O turn
  console.log("Turn of 'O'");
  while (1) {
    while (!isValidInput) {
      playerInputOne = parseInt(prompt("Enter Row"));
      playerInputTwo = parseInt(prompt("Enter Column"));
      console.log(`your inputs are ${playerInputOne} and ${playerInputTwo}`);
      if (playerInputOne < 4 && playerInputTwo < 4) {
        if (playerInputOne > 0 && playerInputTwo > 0) {
          playerInputOne--;
          playerInputTwo--;
          isValidInput = true;
          console.log("valid input!");
          break;
        }
        console.log("invalid input!");
      } else {
        console.log("invalid input!");
      }
    }

    isValidInput = false;
    // check if the space is not null or isNotOccupied
    if (gameBoard[playerInputOne][playerInputTwo] === null) {
      // change the value with X
      gameBoard[playerInputOne][playerInputTwo] = "O";
      console.log(gameBoard);
      break;
    } else {
      console.log("space is taken come again");
    }
    //same stuff with O
    console.log(gameBoard);
  }

  //check rows for 3 matching O end turn
  // 1st row
  if (
    gameBoard[0][0] === gameBoard[0][1] &&
    gameBoard[0][1] === gameBoard[0][2]
  ) {
    if (gameBoard[0][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 2nd row
  } else if (
    gameBoard[1][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[1][2]
  ) {
    if (gameBoard[1][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[1][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 3rd row
  } else if (
    gameBoard[2][0] === gameBoard[2][1] &&
    gameBoard[2][1] === gameBoard[2][2]
  ) {
    if (gameBoard[2][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[2][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 1st column
  } else if (
    gameBoard[0][0] === gameBoard[1][0] &&
    gameBoard[1][0] === gameBoard[2][0]
  ) {
    if (gameBoard[0][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 2dn column
  } else if (
    gameBoard[0][1] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][1]
  ) {
    if (gameBoard[0][1] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][1] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // 3rd column
  } else if (
    gameBoard[0][2] === gameBoard[1][2] &&
    gameBoard[1][2] === gameBoard[2][2]
  ) {
    if (gameBoard[0][2] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][2] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // diagonally from left top to right bottom
  } else if (
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    if (gameBoard[0][0] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][0] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
    // diagonally from right top to left bottom
  } else if (
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0]
  ) {
    if (gameBoard[0][2] === "X") {
      console.log("X WINS");
      break;
    } else if (gameBoard[0][2] === "O") {
      console.log("O WINS");
      break;
    } else {
      console.log("no winner");
    }
  } else {
    console.log("no winner");
  }
}

console.log(gameBoard);
console.log("game end");
