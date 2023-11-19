'use strict';

///////////////////////////////////////
// Modal window
const header = document.querySelector('.header');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// scroll-to section (Hero - links)
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// nav (for nav-fade)
const nav = document.querySelector('.nav');

////////////////////////////////////////////// Modal window
//
//
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// (Hero scroll) Function scroll link
btnScrollTo.addEventListener('click', e =>
  section1.scrollIntoView({ behavior: 'smooth' })
);

////////////////////////////////////////////// Create coockie masseg
//
//
const message = document.createElement('div');
message.classList.add('cookie-message');
//
message.innerHTML =
  'We lov cookie, Can we take some you`re? <button class="btn btn--close-cookie">Take it!</button> ';

header.prepend(message);

const btnCookieClose = document.querySelector('.btn--close-cookie');
btnCookieClose.addEventListener('click', e => {
  message.remove();
});

////////////////////////////////////////////// nav fade
//

// Refactoring
const hoverEffect = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const subling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    subling.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', hoverEffect.bind(0.5));
nav.addEventListener('mouseout', hoverEffect.bind(1));

////////////////////////////////////////////// scroll nav to section
//
// Event delegetion
// делегирование функции на родительский обьект - так же позволяет динамически при добавлении новых кнопок применять к ним эту функци.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // Mathching strategi
  // .targe() - помогает узнать на какой элемент произашел клик
  // А затем мы подвязываем к этой переменой SMOOTH_SCROLL
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); // этот трюк позволяет влять href у каждоко элемента из NodeList
    document.querySelector('.id').scrollIntoView({ behavior: 'smooth' }); // Затем добавляе к этому елементу SMOOTH_SCROLL
  }
});

////////////////////////////////////////////// NAV STICKY
//
//
// const cordinate = section1.getBoundingClientRect();
// // console.log(cordinate);

// window.addEventListener('scroll', function (e) {
//   // console.log(window.scrollY);
//   if (window.scrollY > cordinate.top) nav.classList.add('sticky');
//   if (window.scrollY < cordinate.top) nav.classList.remove('sticky');
// });

////////////////////////////////////////////// Intersection observer API
//
//
// const header = document.querySelector('.header');
const navBound = nav.getBoundingClientRect().height;

const stickyNav = function (enteries) {
  const [ent] = enteries;
  if (!ent.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navBound}px`,
});
headerObs.observe(header);

////////////////////////////////////////////// TAB CONTENT SECTION 3 (Operation)
//
//
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (el) {
  const clicked = el.target.closest('.operations__tab');
  // console.log(clicked);
  // Guard clause
  if (!clicked) return;

  // Button UI tab (Up/Down)
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activede content
  tabContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

///////////////////////////////////////////////// Reveal Section
//
//
const allSections = document.querySelectorAll('.section');
const revealSection = function (enteries, observe) {
  const [enter] = enteries;
  // console.log(enter);

  if (!enter.isIntersecting) return;
  enter.target.classList.remove('section--hidden');
  observe.unobserve(enter.target);
};

const obsSection = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  obsSection.observe(section);
  // section.classList.add('section--hidden');
});

///////////////////////////////////////////////////////// Lazy img
//
//
const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);

const loadImg = function (entries, obs) {
  const [ent] = entries;
  // console.log(ent);

  if (!ent.isIntersecting) return;

  ent.target.src = ent.target.dataset.src;

  ent.target.addEventListener('load', function () {
    ent.target.classList.remove('lazy-img');
  });

  obs.unobserve(ent.target);
};

const imgObs = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});
imgTarget.forEach(img => imgObs.observe(img));

//////////////////////////////////////////////// Slider
//
//
// slide
const slides = document.querySelectorAll('.slide');

// btn
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

// Dots interactive
const dotContainer = document.querySelector('.dots__dot');

const createDogs = function (e) {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      `<div class="dots__dot" data-slide=" ${i}"></div>`
    );
  });
};
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.5)';
// slider.style.overflow = 'visible';

slides.forEach((s, i) => (s.style.transform = `translateX( ${100 * i}% )`));

// BTN (Right)
//
let currentSlide = 0;
const maxSlide = slides.length - 1;

btnRight.addEventListener('click', function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX( ${100 * (i - currentSlide)}% )`)
  );
});

// BTN (LEFT)
btnLeft.addEventListener('click', function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  slides.forEach(
    (s, i) => (s.style.transform = `translateX( ${100 * (i - currentSlide)}% )`)
  );
});

// Key Functionality
// document.addEventListener('keydown', function (e) {
//   console.log(e);
//   if (e.key === 'ArrowLeft') {
//     slides.forEach(
//       (s, i) =>
//         (s.style.transform = `translateX( ${100 * (i - currentSlide)}% )`)
//     );

//     if (e.key === 'ArrowRight') {
//       slides.forEach(
//         (s, i) =>
//           (s.style.transform = `translateX( ${100 * (i - currentSlide)}% )`)
//       );
//     }
//   }
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lection
//
//
/////////////////////////////////////////////////////////
// Selecet , Delete , Create - Elements

// console.log(document.documentElement);
// // Вот что мы увидем в консоли
// //
// // <html>
// //     <header>...</header>
// //     <body>...</body>
// // </html>

// console.log(document.head);
// console.log(document.body);

//////////////////////////////////////////////////////////////////////////////////
//
// И это нам вернет первый элемент который подходит под ('.hader') из иирархии DOM
// const header = document.querySelector('.header');
// <header class="header">
// </header>

//////////////
//
// .querySelectorAll() - создает NodeList - и этот лист похож на ARRAY но не являеться ним
//
// при удалении или добавлении елемента с этим тегом он не обновляеться  в NodeList
// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// ////////////////////// Получем обьект по ИД
// //
// // .getElementById()
// //
// document.getElementById('section--1');

// ////////////////////// Получем обьекты по ИД
// //
// // .getElementsById()
// //
// // И в результате мы так же получаем HTMLCollection
// // HTMLCollection - это динамический лист со всеми элементами в документе с указанными тэгом
// //
// // при удалении или добавлении елемента с этим тегом он автоматически попадает в HTMLСolection
// const allButton = document.getElementsByTagName('button');
// console.log(allButton);

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// SELECT ELEMENTS IN DOM
//
// querySelector(); // - находит первый елемент в DOM с указонным в ()
// getElementById(); //  - ноходит элемент в ИД указоным в ()

// querySelectorAll(); // - создает NodeList с элементами

// getElementsByClassName(); // - Возвращяет HTMLColection(динамический список елементов) с классом указанным в ()
// getElementsByTagName(); //  - Возвращяет HTMLColection(динамический список елементов) с тегом указанным в ()

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Styling
//
//
// console.log(getComputedStyle(message).height); // Даже если мы не указали значения height в CSS браузер вышетал его по самому болощо элементу и мы можем получить это значение

// document.documentElement.style.setProperty('--color-primary', 'blue');

// ///////////////////////////////////////////////////////// HTML Atributes
// //
// //
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src); //ABSOLUT links
// console.log(logo.getAttribute('src')); // Relative links

// // Non-standart
// console.log(logo.getAttribute('zzz'));

// // Custom atribiutes
// logo.alt = 'Dupa';

// // Make custom
// logo.setAttribute('Dupa', 'DUpa');

// // ///////
// const twitter = document.querySelector('.twitter-link');
// console.log(twitter.getAttribute('href'));
// console.log(twitter.href);

// // Date Attribiuts
// console.log(logo.dataset.versionNumber);

// // Classe
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains(); //inclueds

// //////////////////////////////////////////////
//
// Smooth scroll

// btnScrollTo.addEventListener('click', e => {
//   e.preventDefault();

//   // const s1Scroll = section1.getBoundingClientRect();
//   // console.log(s1Scroll);

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current scroll X/Y :', window.pageXOffset, window.pageYOffset);

//   // console.log(
//   //   'Clients hight , whidth :',
//   //   document.documentElement.clientHeight,
//   //   document.documentElement.clientWidth
//   // );

//   // Scroll TO  OLD
//   // window.scrollTo({
//   //   left: s1Scroll.left + window.pageXOffset,
//   //   top: s1Scroll.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // NEW
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Events Type and Events Handles
//
// const h1 = document.querySelector('h1');

// первый способ создать EVENTs

// 'mouseenter' - это как hover css
// const allert1 = function (e) {
//   alert('Pidoraz');
// };

// так же мы можем передовать имя функции как переменную
// h1.addEventListener('mouseenter', allert1);

// чтоб функция не повторялась из раза в раз то мы в конце можем написать
// h1.addEventListener('mouseenter', allert1);

// Второй способ создать ивент
// OLD WAVE
// h1.onmouseenter = e => alert('Dupa RUchana ');

////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// Bubbling Face and Capturing Face (Practis)
//

// rgb(255, 255, 255);

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (min - max + 1) + max);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)} , ${randomInt(0, 255)} , ${randomInt(0, 255)})`;

// console.log(randomColor());

// document.documentElement.style.setProperty('--color-primary', randomColor());

// //
// const link = document.querySelector('.nav__link');
// link.addEventListener('click', e => {
//   link.style.backgroundColor = randomColor();

//   // e.stopPropagation();
// });

// const links = document.querySelector('.nav__links');
// links.addEventListener('click', e => {
//   links.style.backgroundColor = randomColor();
// });

// const nav = document.querySelector('.nav');
// nav.addEventListener('click', e => {
//   nav.style.backgroundColor = randomColor();
// });

// // В че прикол
// // в том что когда у каждого элемента подвязана функция начиная с радительскодо и заканчивая ребенком
// // то изза Bubling эффект, при нажжатии на ребенка активируються функции родительского элемента
// //
// // чтооб предотвратить просто - e.stopPropagetion()

// const text = document.getElementById('text-test-vania');
// const random = (min, max) => Math.floor(Math.random() * (min - max + 1) + max);

// link.addEventListener('click', function () {
//   text.textContent = random(0, 10);
// });

//
////////////////////////////////////////////////
//
//DOM Traversing
//

// const h1 = document.querySelector('h1');

// // Going Downwards: child

// console.log(h1.querySelector('.highlight'));
// console.log(h1.childNodes);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'white';

// // Going Upwards: parants
// console.log(h1.parentElement);
// console.log(h1.parentNode);

// // Pick a closes parents element
// h1.closest('.header').style.backgroundColor = 'blue';
// h1.closest('h1').style.backgroundColor = 'pink';

// // .querySelector() - находит child елемент
// // .closest() - находит родительский елемент

// // Going sideway: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// // Трюк чтоб выделить все div элементы в DIV
// // Возвращает htmlColection со всеми элементами
// console.log(h1.parentElement.children);
// // [...h1.parentElement.children].forEach(function (el) {
// //   if (el !== h1) el.style.transform = 'scale(0.5)';
// // });
