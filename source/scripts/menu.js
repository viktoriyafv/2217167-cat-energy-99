/*сюда добалвяют скрипт*/
const navMain = document.querySelector('.main-header__container');
const navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__container--nojs');

navToggle.onclick = function () {
  navMain.classList.toggle('main-header__container--opened');
};
