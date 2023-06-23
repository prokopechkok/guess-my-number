'use strict';

// //GUESS MY NUMBER GAME

// // console.log(document.querySelector('.message').textContent);
// // document.querySelector('.message').textContent = 'Correct Number';
// // document.querySelector('.number').textContent = 13;
// // document.querySelector('.score').textContent = 100;
// // console.log(document.querySelector('.guess').value);
// // document.querySelector('.guess').value = 77;

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// //event handler to .check button
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   //When no number is entered
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'No number!';
//     displayMessage('No number!');

//     //When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = 'Correct Number!';
//     displayMessage('Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     //When guess number is too high
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent=guess > secretNumber ? 'Too high!' : 'Too low!';
//       displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = 'You lost the game!';
//       displayMessage('You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // } else if (guess > secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Too high!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }

//   //   //When guess number is too low
//   // } else if (guess < secretNumber) {
//   //   if (score > 1) {
//   //     document.querySelector('.message').textContent = 'Too low!';
//   //     score--;
//   //     document.querySelector('.score').textContent = score;
//   //   } else {
//   //     document.querySelector('.message').textContent = 'You lost the game!';
//   //     document.querySelector('.score').textContent = 0;
//   //   }
//   // }
// });
// //event handler function to .again button
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
