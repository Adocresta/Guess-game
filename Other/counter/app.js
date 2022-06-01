let number = 0;

document.getElementById("dcr-btn").addEventListener("click", function () {
  number--;
  document.getElementById("number").textContent = number;
});
document.getElementById("inc-btn").addEventListener("click", function () {
  number++;
  document.getElementById("number").textContent = number;
});
document.getElementById("reset-btn").addEventListener("click", function () {
  number = 0;
  document.getElementById("number").textContent = number;
});
