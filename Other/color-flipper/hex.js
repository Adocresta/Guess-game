const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get a number number between 0-3
  let hexCodeString = "#";
  for (let i = 0; i < 6; i++) {
    hexCodeString += hex[getRndElementFromArray()];
    console.log(`hex code is now : ${hexCodeString} `);
  }
  document.body.style.backgroundColor = hexCodeString;
  color.textContent = hexCodeString;
});

function getRndElementFromArray() {
  return Math.floor(Math.random() * hex.length);
}
