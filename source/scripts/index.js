/*сюда добалвяют скрипт*/
const navMain = document.querySelector('.main-header__container');
const navToggle = document.querySelector('.main-header__toggle');
const slider = document.querySelector('.slider');
const curtain = slider.querySelector('.slider__thumb');
const sliderStyles = getComputedStyle(slider);
let curtainPlaceStart;
let clientX;


navMain.classList.remove('main-header__container--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-header__container--closed')) {
    navMain.classList.remove('main-header__container--closed');
    navMain.classList.add('main-header__container--opened');
  } else {
    navMain.classList.add('main-header__container--closed');
    navMain.classList.remove('main-header__container--opened');
  }
});

window.addEventListener('pointerup', stopTheCurtainShifting);
curtain.addEventListener('pointerdown', startTheCurtainShifting);

function startTheCurtainShifting (event) {
  curtainPlaceStart = +(sliderStyles.getPropertyValue('--curtain-place'));
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = curtainPlaceStart + deltaX / slider.clientWidth;
  const curtainPlace = Math.min(Math.max(cursorPlace, 0), 1);
  slider.style.setProperty('--curtain-place', `${curtainPlace}`);
}

function stopTheCurtainShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}
