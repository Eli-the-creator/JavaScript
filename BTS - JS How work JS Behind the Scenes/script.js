'use strict';

// ///////////////////////
//
// !!!!!Execution Content!!!!
//
// ///////////////////////
// 1.Variables inwairments
// 2.Scope chain
// 3.This Key
// /////////////////////
//

// //////////////////////////////////////////////////////
//
// Scope in practiz
//
// //////////////////////////////////////////////////////
// const calcAge = function (birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     const output = `${firstName} you are ${age} , and in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1999 && birthYear <= 2010) {
//       // var genZ = true;  // VAR игнорирует SCOPE и ее видно везде
//       const str = `Oh and your are Gen-Z , ${firstName}`;
//       console.log(str);
//     }
//   }
//   printAge();

//   return age;
// };

// const firstName = 'Eli';
// calcAge(2001);

// //////////////////////////////////////////////////////
//
// TDZ(Tremporal Dead Zone) in HOISTING               //
//
// //////////////////////////////////////////////////////
//
// Variable TDZ
//
//
// Нельзя вызывать переменные до их обьявления
//
// console.log(inLife);
// console.log(me);
// console.log(age);

// var inLife = 'Hustler';
// let age = 22;
// const me = 'Eli';

// //////////////////////////////
//
// HOISTING in practiz
//
// //////////////////////////////

// console.log(calcDelc(2, 5));
// //
// // function declaretion
// //  Мы можем вызывать declaretion перед тем как она быдет написава , но это уже не сработает для остальных функциий
// function calcDelc(a, b) {
//   return a + b;
// }
// //
// //
// // Эти две функции попадают в TDZ и не выдны помоту что используют переменную
// //
// // function expretion
// const expReation = function (a, b) {
//   return a + b;
// };

// // function ARROW
// const addArow = (a, b) => a + b;

// // /////////////////
// //
// //
// // пример когда var возвращает undifind
// //
// //
// console.log(numProduct);

// if (!numberProd) deletShopingCart();

// var numProduct = 10;

// function deletShopingCart() {
//   console.log('No items hire');
// }

// ///////////////////////////////////////////////////
//
// Подводя итоги
//
// ///////////////////////////////////////////////////
//
// Всегда задаем переменные первые
// пишем переменные всегда в начале scope
// Обьявляем функции уже после ее написания

//
// Для удобства чтения и предсказемости кода ,
// чтоб меньше приходилость дебагать,
// И не поподать в TZN из за HOISTING
//
// Используем всегда const (в крайних случаях когда переменная булет менять значение let)

// !!!!!!!!!Никогда не используем var!!!!!!!!
// изза него переменные попадают в Global Scope и бывает куча багов
//
///////////////////////////////////////////////////

//
//
//
// //////////////////////////////
//
// THIS Key Word in practiz
//
// //////////////////////////////

// console.log(this); //В консоли высветиться Global Object (Window)

// const calcAge = function (bDay) {
//   console.log(2023 - bDay);
//   console.log(this); // В этом случии нам покажет undifinte в консоли
// };
// calcAge(2011);

// const clacAgeArrow = bDay => {
//   console.log(2023 - bDay);
//   console.log(this); // В этом случии в консоле высветиться Window Global
//   // Потому что function ARROW использует ликсическое this
//   // проще говоря оно уже вписано в функцию и берет значения уже сразу с родительского элемента в SCOPE
//   // И в этом случии родительский элемент это Window Object
// };
// clacAgeArrow(2011);

// //
// // Попробуем написать this в методе обьекта
// //
// const Eli = {
//   year: 2001,
//   lastName: 'Zakrevswki ',

//   calcAge: function () {
//     console.log(this); // В этом случии в консоле высветиться весь обьект Eli
//     // потому что метод являеться элементом обьекта
//     console.log(2023 - this.year);
//   },
// };

// Eli.calcAge();

// //
// // this  - он динамичен и его поведение зависит от контекста в котором взываеться функция (но он тоже ссылаеться на hjlbntkmcrbq ;ktvtyn)
// //

// // Method borrowed
// const ania = {
//   year: 2002,
// };

// ania.calcAge = Eli.calcAge;
// ania.calcAge();

// // пример того что this зависит от контекста
// const f = Eli.calcAge;
// f();
// // и в консоле мы получаем undifiend , тепер это f это просто обычная функция

//
//
//
// //////////////////////////////
//
// Reguilar FUNCTION vs ARROW FUNCTION
//
//и как this использовать
// //////////////////////////////

// var firstName = 'Ania';

// const Eli = {
//   //Обьект не являеться Scope
//   firstName: 'Eli ',
//   year: 2001,

//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);

// старое решение ES6<

// const self = this; //
// const isGenZ = function () {
//   console.log(self.year >= 2000 && self.year <= 2010);
// };
// isGenZ(); //изза того что isGenZ вписана а FUNCTION DICLARETION внутри обьекта она не имеет доступа и возвращает (undifind свое нормальное значение)
// чтобы этого избежать есть два решения
// СТАРЫЙ СПОСОБ  (создать дополнительную переменную вне этого обьекта котороя равна this)  const self = this , затем вписать эту переенную вместо this в FUNCTION DICLARETION

// //////////////////////////////////////////
//старое решение ES6+

// Изза того что ARROW не имеет своего this она будет испольщовать this родительского элемента (тоесть в нашем случии обьекта Eli)
//     const self = this; //
//     const isGenZ = () => {
//       console.log(self.year >= 2000 && self.year <= 2010);
//     };
//     // то есть делаея вывод
//     // Лучше использовать Arrow внутри Метода обьекта так как ARROW не имеет this и argument
//     isGenZ();
//   },

//   greet: () => console.log(`Hey my name is ${this.firstName}`), //изза того что Обьект не являеться Scope, this.firstName ,будеит искаться в Global Scope
// };
// Eli.greet(); // И в консоле мы увидем Hey my name is Ania (потому что var в записала firstName в Global)

// //
// Eli.calcAge();
// //
// // Вывод , НЕ использовать var. И НЕ использоват ARROW в обьектах
// // в Обьектах используем только FUNCTION EXPRESTION

// //////////////////////////////
//
// PRIMITIV VS OBJECT VALUES
//
//
// //////////////////////////////

// //////////////////////////////
//
// PRIMITIV
//
// Приметивные переменные записываються каждая под свой адрес в call stack
//
let lastName = 'Ivanowna';
let oldLastName = lastName;
lastName = 'Kupa';

// Что происходит в этом случии, oldLastName = lastName и оно записываеться на тот же самый адрес
// и в третей строке мы создаем новый адресс и записываем переменную на новый адрес
// Тем самым lastName = Kupa так как записа на новом адресе а oldLastName = Ivanowna

console.log(`${lastName} : new last name`);
console.log(`${oldLastName} : Old Last Name`);

// Но мы не можем делать точно так же с обьектами
// изза того что обьекты храняться в heap
// и единственное что у нас выйдет это изменить обе переменные с двух обьектах
const jess = {
  firstName: 'Jess',
  lastName: 'Bojan',
  age: '90',
};

const mariedJess = jess;
mariedJess.lastName = 'Dupa';

console.log(`${jess.lastName} : just jess`);
console.log(`${mariedJess.lastName} : maried Jess`);

// Для этого есть отдельная команда

const jess1 = {
  firstName: 'Jess',
  lastName: 'Bojan',
  age: '90',
};

const jessCopy = Object.assign({}, jess1); //этой камандой мы создаем новый пустой обьект который копирует старый но есляеться записанным на другой адрес

// теперь мы можем изменять переменные двух разных обьектов в независимости друг от друга

jessCopy.lastName = 'pupka'; // Здесь мы меняем переменную в нутри коппии обьекта

console.log('old jess1', jess1);
console.log('new jessCopy', jessCopy);

// Object.assing - работаект только на первом уровне  (не имея влияния на обьекты в нутри обьекта)
