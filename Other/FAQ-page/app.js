const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector("#btn");

  btn.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    answer.classList.toggle("answer-show");
  });
});
