'use strict';

let winningNum = Math.trunc(Math.random() * 20) + 1;

let msg = document.querySelector('.message');
let highscore = document.querySelector('.highscore');
let score = document.querySelector('.score');
let winningNumHidden = document.querySelector('.number');
//Adding Event listener

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    msg.textContent = ' ⛔ Not a number!!';
  } else if (
    Number(score.textContent) === 1 ||
    Number(score.textContent) === 0
  ) {
    msg.textContent = ' Sorry you lost :(';
    score.textContent = 0;
  } else if (guess === winningNum) {
    msg.textContent = ' 🎉 You won !!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    winningNumHidden.textContent = winningNum;
    winningNumHidden.style.width = '30rem';

    score.textContent > highscore.textContent
      ? (highscore.textContent = score.textContent)
      : (highscore.textContent = highscore.textContent);
  } else if (guess > winningNum) {
    msg.textContent = ' To high!';
    score.textContent--;
  } else if (guess < winningNum) {
    msg.textContent = ' To low!';
    score.textContent--;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  msg.textContent = 'Start guessing...';
  score.textContent = 20;
  winningNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  winningNumHidden.textContent = '?';
  winningNumHidden.style.width = '15rem';
  document.querySelector('.guess').value = '';
  console.log(typeof document.querySelector('.guess').value);
});
