const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// find and save button and span for showing the color
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get a number number between 0-3
  let newNumber = getRndInteger(0, 4);
  let randomNumber = getRndInteger(0, 4);
  console.log(`random number : ${randomNumber} `);
  if (newNumber === randomNumber) {
    randomNumber = getRndInteger(0, 4);
    console.log(`random number was same new number assigned: ${randomNumber} `);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  } else {
    randomNumber = newNumber;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
  }
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
