var hiddenNumber = Math.floor(Math.random() * 100 + 1);
var userInput = prompt((message = "Enter your guess:"));
// document.getElementById("userIn").value;
while (true) {
  if (userInput == hiddenNumber) {
    console.log("You won!!");
    break;
  }
  if (
    (hiddenNumber - 10 <= userInput && userInput < hiddenNumber) ||
    (hiddenNumber + 10 >= userInput && userInput > hiddenNumber)
  ) {
    console.log("Your guess is really close try again:");
    userInput = prompt((message = "Enter your guess:"));
    console.log(userInput);
  } else {
    if (hiddenNumber > userInput) {
      console.log("Not even close! Make the number way bigger!");
      userInput = prompt((message = "Enter your guess:"));
    } else {
      console.log("Not even close! Make the number way smaller!");
      userInput = prompt((message = "Enter your guess:"));
    }
  }
}

// if (smallerThan50) {
//   if (hiddenNumber - 40 <= userInput && userInput != hiddenNumber) {
//     console.log("Not even close");
//     userInput = prompt((message = "Enter your guess:"));
//     console.log(userInput);
//   }
//   if (biggerThan50) {
//     if (hiddenNumber + 40 >= userInput && userInput != hiddenNumber) {
//       console.log("Not even close");
//       userInput = prompt((message = "Enter your guess:"));
//       console.log(userInput);
//     }
//   }
// }