const button = document.getElementById("show-nav-links");
const navLinks = document.querySelector(".nav-links");

button.addEventListener("click", () => {
  if (navLinks.classList.contains("show-the-links")) {
    navLinks.classList.remove("show-the-links");
  } else {
    navLinks.classList.add("show-the-links");
  }
});
