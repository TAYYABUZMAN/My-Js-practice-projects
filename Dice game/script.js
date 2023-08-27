'use strict';
const scoreEL0 = document.querySelector('#score--0');
const scoreEL1 = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const currentScoreE0 = document.getElementById('current--0');
const currentScoreEl = document.getElementById('current--1');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
let score, activeplayer, currentScore, playing;
const init = function () {
  currentScore = 0;
  activeplayer = 0;
  score = [0, 0];
  playing = true;
  scoreEL0.textContent = 0;
  scoreEL1.textContent = 0;
  diceEL.classList.add('hidden');
  currentScoreE0.textContent = 0;
  currentScoreEl.textContent = 0;
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};

init();
console.log(init());
const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  playerEl0.classList.toggle('player--active');
  playerEl1.classList.toggle('player--active');
};

btnroll.addEventListener('click', function () {
  if (playing) {
    diceEL.classList.remove('hidden');
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);

    diceEL.src = `dice-${diceNumber}.png`;
    if (diceNumber !== 1) {
      currentScore = currentScore + diceNumber;

      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnhold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentScore;
    console.log(score[activeplayer]);
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];
    if (score[activeplayer] >= 100) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
btnnew.addEventListener('click', init);
