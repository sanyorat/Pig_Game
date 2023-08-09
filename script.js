'use strict';
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Elemet Selecting for dom manupulation
const scorePl1El = document.querySelector('#score--0');
const scorePl2El = document.getElementById('score--1');
const currScoreP1 = document.getElementById('current--0');
const currScoreP2 = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnrollDiceEl = document.querySelector('.btn--roll');
const btnnewGameEl = document.querySelector('.btn--new');
const btnholdEl = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Starting conditions
scorePl1El.textContent = 0;
scorePl2El.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function (activePlayerpoo) {
  activePlayerpoo ? (activePlayerpoo = 0) : (activePlayerpoo = 1);
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  return activePlayerpoo;
};

//dice roll functionality
btnrollDiceEl.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  console.log('clicked');
  diceEl.src = `dice-${dice}.png`;
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = switchPlayer(activePlayer);
  }
});

btnholdEl.addEventListener('click', function () {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  }
  activePlayer = switchPlayer(activePlayer);
});
