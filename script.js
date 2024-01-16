console.log("File is running perfectly");
let turn = "X";
let gameover = false;
//function to change turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//Function to check for a win
const chekcWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxTexts[e[0]].innerText + " Win";
      gameover = true;
    }
  });
};
//Game Logic
let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText == "") {
      boxText.innerText = turn;
      turn = changeTurn();
      chekcWin();
      if (!gameover) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach((e) => {
    e.innerText = "";
  });
  turn = "X";
  gameover = false;
  document.querySelector(".info").innerText = "Turn for " + turn;
});
