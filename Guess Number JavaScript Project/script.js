"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

// check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";

    // correct number
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✅ Correct!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }
    // too low
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low!";
      score--;
    } else {
      document.querySelector(".message").textContent = "Game over!";
      score--;
    }
  }
  document.querySelector(".score").textContent = score;
});

// again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".number").style.width = "15rem";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".guess").value = "";
});
