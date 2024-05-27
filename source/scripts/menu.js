/*сюда добалвяют скрипт*/
const navMain = document.querySelector('.main-header__container');
const navToggle = document.querySelector('.main-header__toggle');
const partnerShip = document.querySelector('.partnership');

navMain.classList.remove('main-header__container--nojs');
partnerShip.classList.remove('partnership--nojs');

navToggle.onclick = function () {
  navMain.classList.toggle('main-header__container--opened');
};
