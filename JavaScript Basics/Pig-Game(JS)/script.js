'use strict';

// Players
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//selecting element
const score0El = document.querySelector('#score--0'); //# чтоб достать обьект по ID
const score1El = document.getElementById('score--1'); // еще один способ чтоб взять элемент по ID .getElementById

// Current Score
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');

// Dice Element
const diceEl = document.querySelector('.dice');

// BOTTON
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Total Players score
let totalScore = [0, 0];

//Current score
let currentScorr = 0;
//
//
let activePlayer = 0;

let playing = true;

// New game function
const init = function () {
  currentElement0.textContent = '0';
  currentElement1.textContent = '0';
  //
  score0El.textContent = '0';
  score1El.textContent = '0';
  playing = true;
  totalScore = [0, 0];
  //
  document.querySelector('#name--0').textContent = 'PLAYER 1';
  document.querySelector('#name--1').textContent = 'PLAYER 2';
  //
  player0.classList.add(`player--active`);
  player1.classList.remove(`.player--active`);
  //
  //
  player0.classList.remove(`player--winner`);
  player1.classList.remove(`player--winner`);

  diceEl.classList.add('hidden');
};
init();

// Swict Players
const switchPlayers = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScorr = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Rolling Dice functionality
//
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 Generat random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2 Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3 Check for roller 1 : if it
    if (dice !== 1) {
      currentScorr += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScorr;
    } else {
      // swhitch to the next player
      switchPlayers();
    }
  }
});

// New Game Reset
btnNew.addEventListener('click', init);

// Hold Botton
btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to total score
    totalScore[activePlayer] += currentScorr;

    document.getElementById(`score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    currentScorr = 0;
    console.log(currentScorr);
    document.querySelector('#current--1').textContent = '0';
    document.querySelector('#current--0').textContent = '0';

    // Winner when 100points
    if (totalScore[activePlayer] >= 100) {
      playing = false;
      //   diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document.querySelector(`#name--${activePlayer}`).textContent = 'Winner';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //Switch to the next Player
      switchPlayers;
    }
  }
});
