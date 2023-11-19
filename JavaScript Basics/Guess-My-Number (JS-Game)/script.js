'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Yeah! This is my number 🏆';

// document.querySelector('.number').textContent = '22';
// document.querySelector('.score').textContent = '11';

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//
// Random Number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Score
let score = 10;

// // //
// document.querySelector('.number').textContent = secretNumber;

// // //

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  //
  // Wrong input
  if (guess > 20 || !guess) {
    document.querySelector('.message').textContent = 'Chooshe between 1 and 20';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess == secretNumber) {
    //
    // Winn logic
    document.querySelector('body').style.backgroundColor = '#60d347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent =
      'Yeah! This is my number 🏆';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // Wrong Number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' Looser 😆';
      document.querySelector('.score').textContent = 0;
    }

    // Old vertion
    //
    //
    //   } else if (guess > secretNumber) {
    //     // Too high
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too high';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'Looser 😆';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       // Too low
    //       //
    //       document.querySelector('.message').textContent = '📉 Too low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = ' Looser 😆';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //       document.querySelector('.message').textContent = ' Looser 😆';
    //       document.querySelector('.score').textContent = 0;
  }
});

//
//
// challenges #1
//Again Button
//
//
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').value = secretNumber;

  //
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Guess my number 🏆';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '10';
  document.querySelector('.number').textContent = '?';
});

// document.querySelector('message').textContent = 'Looser 😆';
