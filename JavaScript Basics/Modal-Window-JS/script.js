'use strict';

//
//
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// query Selector All (создает массив с классоми)
const btnOpenModal = document.querySelectorAll('.show-modal');
// теперь его видно с консоли
console.log(btnOpenModal);

// Open variable function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// Close variable function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// одно строчковая функция , которая поможет достать все классы с массива btnOpenModal
for (let i = 0; i < btnOpenModal.length; i++)
  // Теперь добовляем каждой кнопки мобытие которое убирает класс HIDDEN

  //
  //   теперт с помощью переменной мы убераем класс hidden
  btnOpenModal[i].addEventListener('click', openModal);

//теперт с помощью переменной мы добовляем класс hidden
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Это глобальная настройка которая будет ожидать нажатия на кнопку во всем сайте
// Escape button close
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
