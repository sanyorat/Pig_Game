'use strict';

let scores, currentScore, activePlayer, playing;
//Elemet Selecting for dom manupulation
const scorePl1El = document.querySelector('#score--0');
const scorePl2El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnrollDiceEl = document.querySelector('.btn--roll');
const btnnewGameEl = document.querySelector('.btn--new');
const btnholdEl = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = Math.trunc(Math.random() * 2);
  playing = true;
  scorePl1El.textContent = 0;
  scorePl2El.textContent = 0;
  diceEl.classList.add('hidden');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.remove('player--active');
  player1.classList.remove('player--active');
  console.log(activePlayer);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};
init();

const switchPlayer = function () {
  activePlayer ? (activePlayer = 0) : (activePlayer = 1);
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  return activePlayer;
};

//dice roll functionality
btnrollDiceEl.addEventListener('click', function () {
  if (playing == true) {
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
      activePlayer = switchPlayer();
    }
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
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.getElementById(`score--${activePlayer}`).textContent = 'Winner';
    diceEl.classList.add('hidden');
  }
  activePlayer = switchPlayer();
});

// resetting the game
btnnewGameEl.addEventListener('click', init);
