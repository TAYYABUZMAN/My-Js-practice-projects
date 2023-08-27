'use strict';
const closemodal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const showmodal = document.querySelectorAll('.show-modal');

open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showmodal.length; i++) {
  showmodal[i].addEventListener('click', open);
}
close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closemodal.addEventListener('click', close);
overlay.addEventListener('click', close);
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
