'use strict';

////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Function
////////////////////////////////////////////////////////
//
//
// defaulte parametr
//

// defaulte paremetr in function (
//   flyNumber,
//   passangerNum = 1,                // Если при вщятии параметров, параметр окажеться пустым то он принемает дефолтное значение
//   price = 199 * passangerNum       // так же можно проводит расчеты (но только с параметрами которые указаны в переметрах функции перед)
// )

// const bookings = [];

// const createBookimg = function (
//   flyNumber,
//   passangerNum = 1,
//   price = 199 * passangerNum
// ) {
//   const booking = {
//     flyNumber,
//     passangerNum,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBookimg('LH123');

////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// How passing the arrguments :
////////////////////////////////////////////////////////
//
//
// Value vs Reference
//

// const fly = 'LH134';

// const eliasz = {
//   name: 'Eliasz',
//   passport: '31432332',
// };

// const checkIn = function (flyNumber, passenger) {
//   flyNumber = 'Lh999';
//   passenger.name = 'Mr.' + passenger.name;

//   if (passenger.passport === 31432332) {
//     alert('Welcom on a board');
//   } else {
//     alert('👮‍♂️');
//   }
// };

//
// When we call the object or variable inside a function like a parametr we make a reference of this.
// Its like a link to the object/Array where function can get the information abou
//
//все это происходи изза того как работает память HEAP мы не делаем новую переменную а просто создаем еще один линк к ней

// Изменения Object/Array в функции повлечет за собой измененяю оригинального Object/Array
// Но это не повлияет на переменные typeOf (boolean , pirmetiv , number ect)
// checkIn(fly, eliasz);

// console.log(fly);
// console.log(eliasz);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Как избежать проблем с копированием Object
// (Чтоб случайно не сломать терабайтную базу данных с кодом)
//

// Например если несколько функций манипулируют одни и тем же обьектом

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(eliasz);
// checkIn(fly, eliasz);

// console.log(fly, eliasz);

//
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// First-class function / Higher-Order Function
////////////////////////////////////////////////////////

// JavaScript treats function as first-class-citizen -
// First class citizen значит что язык JS рассматривает function как variabl/value
// Xто ее можно применять в Object/Array/ передовать ее в другие функции в качестве аргумента

// This mean function just a value

// Function is just anouret 'Type of object'
// Изза того что Function являеться уще обним обьектом для нее тоже существуют Method (.bind)

//
////////////////////////////
//////////////////////////// Higher-Order Function
////////////////////////////
//
//
// Благодаря First-Class-Citizen

// Мы можем писать Higher-Order Function
// Функции которые возвращают другую функцию в качастве переменной

// .addEventLister

//
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// CallBack Function
////////////////////////////////////////////////////////
//

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const uppFirstWord = function (str) {
//   const [first, ...last] = str.split(' ');
//   return [first.toUpperCase(), ...last].join(' ');
// };

// // higer order function
// const transform = function (str, fn) {
//   console.log(`Orininal string : ${str}`);
//   console.log(`Transform srting : ${fn(str)}`);

//   console.log(`Transform by : ${fn.name} `); //.name - Function METHOD которая возвращяет имя функции
// };

// //
// transform('JavaScript is cool', uppFirstWord);

// //
// transform('JavaScript is cool', oneWord);

// addEventListnere call the outher function потому что в JS вункции имеют статус Higer-Class Citizen
//

// const lov = function () {
//   console.log('❤️');
// };
// document.body.addEventListener('click', lov); //Hieght Order Function

// Higer-Class Citizen , JS do the call-back all the time
// и блягодоря Higer-Class Citizen и Постоянному call-back появляеться возможность ABSTRACTION(Абстракции)

//

//
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Function Reterning Function
////////////////////////////////////////////////////////
//

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// Точно так де только теперь с - ARROW FUNCTION RETERN FUNCTION (challenge)
// const greet = greeting => name => console.log(`${greeting} , ${name}`);
// //

// const greeting = greet('Hey'); //Здесь мы записываем первую property function

// greeting('Eli'); //Здесь мы уже обращаемся ко второй части FUNCTION

// // Так же это можно сделать по другомы
// greet('Fofki')('Duda'); // в первой скобках для первой функции во вторых для второй функции

// Functional Programming

// Clousure -

//
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// CALL and APPLY (Methods)
////////////////////////////////////////////////////////
//

//
// .Call(ObjectName, propertis1, proprety2)

// const ryinair = {
//   airline: 'ryinair',
//   iaitCODE: 'RN',
//   booking: [],
//   book(flyNumber, name) {
//     console.log(`${name} book a seat ${this.iaitCODE}${flyNumber} `);
//   },
// };

// ryinair.book(445, 'Eliasz');

// const gownoLet = {
//   airline: 'gownoLet',
//   iaitCODE: 'GL',
//   booking: [],
//   book(flyNumber, name) {
//     console.log(`${name} book a seat ${this.iaitCODE}${flyNumber} `);
//     this.booking.push(`flyNumber :${this.iaitCODE}${flyNumber} , ${name}`);
//   },
// };

// //
// // .Call(ObjectName, propertis1, proprety2)
// //
// // .call - принемает в аргументы имя массива и проперты для функции
// const luftHANDZ = {
//   airline: 'luftHANDZ',
//   iaitCODE: 'HZ',
//   booking: [],
// };

// const book = gownoLet.book; // В этом случии book больше не являеться медодом а обычной функциие

// book.call(luftHANDZ, 453, 'Hoiuk');
// console.log(luftHANDZ);

//
// .Apply(ObjectName , ARRAY-DATA)
// в современном ES6 никто практически не работает с .apply (после появления Distraktoring)
// ---------------------------------------------------------------------------------------
// .apply - принемает в аргументы в виде массива

//
//
// ES6 - .call() + destructoring
// /////////////////////////////////////////////////////////////
// В современно JS никто не использует .apply
// Так как ест деструктуризация и можно использовать ее в месте с .Call() если переменные с данными находяться в отдельном массиве

//
// .bind() - автоматически припимывает this. для параметров заданных в функции что позволяет создать метод для обьекта за приделами его самого

// Так де .bind создает новую функцию а не вызывает ее в месте где прописываеться этот METHOD

// const bindFunctionHZ = book.bind(luftHANDZ);
// bindFunctionHZ(23, 'ZopaPopa');

// //
// //Например можно задать уже определенные параметры для конкретной функции
// const bindFFly4 = book.bind(luftHANDZ, 456);
// bindFFly4('Rura');
// bindFFly4('Bobunda');
//
//
///////////////////////////////////////////////////////////////////// .bind + Event Lisner
//
//
// luftHANDZ.plane = 300;
// luftHANDZ.buyPlane = function () {
//   console.log(this);

//   this.plane++;
//   console.log(this.plane);
// };

// luftHANDZ.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', luftHANDZ.buyPlane.bind(luftHANDZ));

// // Parcial application
// // Суть в том что мы создаем функцию на основе главной функции только с дефолтными параметрами не затрагивая оснавную функицю
// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.2, 40000));

// // const addVAT = addTax.bind(null, 0.23); //Сдесь мы задаем дефолтный параметр

// // console.log(addVAT(100000)); //И в дальнейшем мы можем рабоатть уже с совершенно другой функциие не затрагивая оснавную

// // Challenge (переделать это в Reterning function)
// const addTaxR = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addTAX = addTaxR(0.2);
// const addVAT = addTaxR(0.23);

// console.log(addTAX(44135));
// console.log(addVAT(44135));

//
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//CHALLENG #1

// const poll = {
//   quiestion: 'What is youre favorite programming languiech',
//   option: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   ansver: new Array(4).fill(0),

//   registerNewAnswer: function () {
//     const promtQ = Number(
//       prompt(
//         `${this.quiestion} \n${this.option[0]} \n${this.option[1]} \n${this.option[2]}\n${this.option[3]}  \n(Wright youre ansver)`
//       )
//     );

//     // if (promtQ == 'resolt') {
//     //   document.getElementById(
//     //     'p1'
//     //   ).textContent = `Poll results are ${this.ansver.join(',')}`;
//     // }

//     typeof promtQ === 'number' &&
//       promtQ < this.ansver.length &&
//       this.ansver[promtQ]++;
//     document.getElementById(
//       'p1'
//     ).textContent = `Poll results are ${this.ansver.join(',')}`;

//     console.log(poll.ansver);
//   },
// };

// const promtOUT = poll.registerNewAnswer;

// document.querySelector('.poll').addEventListener('click', promtOUT.bind(poll));

// const [a, b, c, d] = [...poll.option];

// const promtAnsver = prompt(
//   `${poll.quiestion} \n${a} \n${b} \n${c}\n${d}  \n(Wright youre ansver)`
// );

// poll.registerNewAnswer.call({ ansver: [1, 5, 3, 9, 6, 1] });

//
//
/////////////////////////////////////////////////////////
// НАПОМИНАНИЕ
// .bind(ObjectName) - он привязывет this к тому обьекту к которому указывают в скобках
// .call()
//
// ПОВТОРИТЬ string METHOD
/////////////////////////////////////////////////////////
//
//

//
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Immediately invoking Function
////////////////////////////////////////////////////////
//

// Иногда нужна функция которая булет применяться только раз а затем "испоряться" после того так используем ее раз

// IIFE - immedietly invoking function Expression

// IIFE - делали когда то для того чтобы сделать DATA Privecy
// (function () {
//   console.log(`This function EXPRETION is never run again`);
//   const isPrivet = 22; //Инкапсуляция - Защита переменных
// })();
// // OR
// (() => console.log(`This function ARROW ALSO is never run again`))();

// // Modern WAY
// //
// // В современном JS  мы создаем SCOPE для DATA Privice ⬇️
// {
//   const isPrivet = 22; //Инкапсуляция - Защита переменных
//   let this_is_Privet = 23;
//   var this_is_Privet_NOT = 23; // но с var не рсаботает так как она записываеться с разу в Global Scope
// }
// console.log(this_is_Privet_NOT);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Clouseru
////////////////////////////////////////////////////////
//
// Clouser (Замыкание) - это механиз, позволяющий манипулировать переменными написанными во внешней функции внутренней функции а затем возвращать измененную переменную

// Чтобы сделать это более понятным,
// мы также можем сказать, что благодаря замыканию
// функция не теряет связь с переменными,
// которые существовали в месте её создания.

// 🚶🏼‍♂️- function 🎒-closure 📝-function
// So in this analogy, a function has a backpack,
// which it carries around wherever it goes.
// And this backpack contains all the variables
// that were present in the environment
// in which the function was created.

// 🚶🏼‍♂️- function 🎒-closure 📝-function
// Таким образом, по этой аналогии, функция имеет рюкзак,
// который она носит с собой, куда бы она ни пошла.
// И в этом рюкзаке содержатся все переменные,
// которые были присутствовали в окружении,
// в котором функция была создана.

// const passeger = function () {
//   let pass = 0;

//   return function () {
//     pass++;
//     console.log(` ${pass}`);
//   };
// };

// const calcPass = passeger(); //Переменная первого Function SCOPE записана в переменной calcPass

// calcPass(); //А здесь мы активируем внутренную функцию и манипулируем переменной из первой Function SCOPE
// calcPass();
// calcPass();

// console.dir(calcPass);

// ////////////////////////////////////////////////////////

// // Example 1
// let f;
// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 999;

//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();

// // Re-assignint f() function

// h();
// f();

// console.dir(f);

// // Example 2
// const boardingPassenger = function (n, wait) {
//   // const bording = n / 3;

//   setTimeout(function () {
//     console.log(`We are now bording ${n} passenger`);
//     console.log(`Now it's a ${bording} of 3 group`);
//   }, wait * 1000);

//   console.log(`we start boarding at ${wait} second`);
// };

// // Наглядное доказательство того что

// // Внутренная функция setTimeout() имеет приемузества над SCOPE функции boardingPassenger()
// // B берет переменные из Global Scoup
// const bording = 1000;
// boardingPassenger(180, 3);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Challeng 2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
