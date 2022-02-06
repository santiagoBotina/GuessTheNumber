let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
let score = 6;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number!⛔");

    //When player wins
  } else if (guess === randomNumber) {
    displayMessage("Correct number!🎉");
    document.body.style.backgroundColor = "#50CB93";
    document.querySelector(".number").textContent = randomNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? "Too high📈" : "Too low📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You've lost the game🙁";
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 6;
  randomNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
});
