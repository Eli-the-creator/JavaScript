// 'use strict';

// //
// //
// // /////////////////////////////////////
// //
// // ///////////////////////////////////////////////////// Enchenc Object Literals ///////////////////////////////////////////
// //
// // //////////////////////////////////// Мы може добоавлять обьекты просто вписываю переменную обьекта в другой обьект
// //
// // Мы можем ваисывать в обьекты переменные других обьектов

// const weeksDay = ['mon', 'the', 'whe', 'thu', 'fri', 'sat', 'san'];
// const openHours = {
//   //ES6 enhance
//   [weeksDay[3]]: {
//     open: 12,
//     close: 22,
//   },
//   //ES6 enhance
//   [weeksDay[4]]: {
//     open: 11,
//     close: 23,
//   },
//   //ES6 enhance
//   [weeksDay[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 enhance
//   openHours,
//   //ES6 enhance
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`This is youre pasta whith ${ing1} , ${ing2} , ${ing3}`);
//   },

//   orderPizza: function (mainIng, ...otherIng) {
//     console.log(mainIng);
//     console.log(otherIng);
//   },
// };

// /////////////////////////////////////
//
// ////////////////////////////////////////////////// Optional chailing (?.)  ES6 enhance ///////////////////////////////////////////
//

// if (restaurant.openHours.mon) console.log(restaurant.openHours.mon.open);

// // [restaurant.openHours.sat] && console.log(restaurant.openHours.sat.close);

// console.log(restaurant.openHours?.mon?.open); // ? - вернет значение undifynt даже если значение равно 0 или ''

// // Example
// const days = ['mon', 'the', 'whe', 'thu', 'fri', 'sat', 'san'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openHours[day]?.open ?? 'We close';
//   // const close = restaurant.openHours[day]?.close;
//   console.log(`On ${day} we open ${open}`);
// }

// // Method
// console.log(restaurant.order?.(2, 1));
// console.log(restaurant.orderDupy?.(2, 1) || 'Order is not here et');

// // Arrya
// const user = [{ name: 'Eli', status: 'Billioner-Super-star', dupy: 'Durzo' }];

// console.log(user[0]?.name ?? 'No name hire');

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Rinicycki',
//   starterIndex: 2,
//   mainIndex: 0,
// }); //Из лекции диструкторизации обьектов

// /////////////////////////////////////
//
// // ////////////////////////////////////// ////////Диструкторизация массива// ////////////////////////////////////
//
//разберания массива на более меньшие цасти
// ////////////////////////////////////
// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2]; //Например кат

// const [x, y, z] = arr; // или так
// console.log(x, y, z);
// const [a, b, c] = arr; //distructoring assingment
// console.log(a, b, c);
// console.log(arr); // оригинальный массив не щзатронут

// let [first, , second] = restaurant.categories;

// [first, second] = [second, first];

// console.log(first, second);

// console.log(arr); //Если ми разбираем массив на более меньшие части это ни как не повлияет на сам массив

// //

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// // const temp = first;
// // first = second;
// // second = temp;
// // console.log(first, second); // старый способ которым можно было помемнять переменные в масиве

// //  мо благодоря деструктуризации можно это сделать проще

// [first, second] = [second, first]; // В одну строчку мы поменяли местами переменные в масиве местами
// console.log(first, second);

// // благодаря distracturing array мы получили две переменные из одного метода в обьекте
// const [starter, main] = restaurant.order(2, 0);
// console.log(main, starter);

// // Nested distratroring
// const nestted = [2, 3, [4, 5]];
// // const [i, , j] = nestted;
// // console.log(i, j); // благодаря диструкции мы теперь модем получать данные из массива в ичен простой способ

// const [i, , [j, k]] = nestted;
// console.log(i, j, k); // Так же доступро дистракуия в дистракции
// // что позволяет достать переменные из масива в массиве

// // defalt value
// const [q = 1, t = 1, o = 1] = [9, 3];
// console.log(q, t, o); // о - будет undefined , но мы можем в диструкции задать значение по умолчанию и тогда он вернет нам это заданное значение
// //  и вместо undefined мы получим занадое дифолтное значение

//
//
//
// /////////////////////////////////////
//
// /////////////////////////////////////////////////////Диструкторизация Object///////////////////////////////////////////
//
// ////////////////////////////////////

// с обьектами все гораздо проще так как не имеет значения номерной порядок в обьекте , только имена
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// это очень удобно при работе с API
// но предположим мы хотим сменить имя переменных и назвать их по другому

// const {
//   name: restaurantName,
//   openingHours: openH,
//   categories: meniu,
// } = restaurant;
// console.log(restaurantName, openH, meniu);

// //
// // пишем оригинальное имя переменной и через : указываем новое
// //мы не всегда можем увидеть что за обьект так что лучше устанавливать пустые значения

// // default value
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// // Muteted variables
// let a = 111;
// let b = 222;
// const obj = { a: 47, b: 89, c: 14 };

// ({ a, b } = obj);
// console.log(obj);

// // nested object
// const {
//   fri: { open, close },
// } = openH;
// console.log(open, close);
//

//
//
///////////////////////////
///////////////////////////
///////////////////////////// ES6+ упрощает все и сейчас будем учиться нового синтаксиса и фичь
//
//
///////////////////////////////////////////////// Spread Operetor(...) //////////////////////////////////////////////////////////////
//... - с его помощью мы можем достить индивидуально каждый элемент массива
// он очень помогает когда нужно дость все элементы масиива
// или написать функции в которой нужно задать много значений
//
// Spread Operetor - работает со всеми iteragles
//
// strings, num , array , map , set
//
// iteragles !== object

// ////////////////////////////////////////// ///////////////////////////////////////////////////////spread operator in array
// const arr = [7, 8, 9];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr); //Здесь мв консоли высвитеться все елемены масиива как цифры

// // Copy array
// // Мы скопировали массив в одну переменную (оригинальный массив не затронут)
// const mainCopyMenu = [...restaurant.mainMenu];
// console.log(...mainCopyMenu);

// //предположим нужно совместить два масива в обьекте
// const bigMenu = [...restaurant.mainMenu, ...restaurant.starterMenu, 'Dupa'];
// // в результате мы достали каждый элемент массива и поместилу его в другой массив
// console.log(bigMenu);

// //
// // ... не создает переменную он достоет значение разделяя их ,
// //
// //

// //// ////////////////////////////////////////// //////////////////////////////////////// Spread Operetor - работает со всеми iteragles
// const eli = 'Mam durzego';
// console.log(...eli); //M a m   d u r z e g o

// const letter = [...eli, '', 34];
// console.log(letter);

// // //////////////
// // ... - работает хорошо в тех местах где нужно вписать много данных через запятую (function, array)
// //
// // //////////////////////////////////////// spread opetrator in function

// // мы создали переменную с масивом promt и по вписанию этого они перемещаються в массив
// // const ingridients = [
// //   prompt("Les's make pasta , ingridient1"),
// //   prompt("Les's make pasta , ingridient2"),
// //   prompt("Les's make pasta , ingridient3"),
// // ];

// // console.log(ingridients);

// // // ... багодоря нам не надо выписывать весь массив и мы можем сделать так
// // restaurant.orderPasta(...ingridients); //и теперь обращаемся к функции в каторую передаем три значения из массива

// // //////////////
// //
// //
// // ////////////////////////////////////////// //////////////////////////////////////// spread opetrator in object

// // мы можем создать копию обьекта и это будет соверщенно новый обьект И ИЗМЕНЯТЬ ИХ В НЕ ЗАВИСИМОМТИ ДРУГ ОТ ДРУГА
// //
// const newRestrant = {
//   fouder: 'Gugaliar Alanio',
//   foudet: 1990,
//   ...restaurant,
// };

// console.log(newRestrant);

// /////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// Rest and Parametter ///////////////////////////////////////////////////////////
// //

// // /////////////// ///////////////  ////distryctoring array / object

// //  Array

// // Spread
// const spread = [1, 2, ...[3, 4]]; //1 ,2 ,3, 4
// console.log(spread);

// // Rest
// const [a, b, ...otherNumber] = [1, 2, 3, 4, 5];
// console.log(a, b, otherNumber);

// // rest and spread
// const [Pizza, rizotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(Pizza, rizotto, ...otherFood);

// // Object

// // Object in rest
// const { sat: saturday, ...weeksDay } = restaurant.openingHours;
// console.log(saturday, weeksDay);

// //////////////////////// /////////////// Function Rest/Spread
// //

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 4, 5);
// add(2, 3, 4, 5, 6, 7);

// //spread
// const x = [23, 5, 4, 3];
// add(...x);

// // function order pizza - первый параметр будет записан в отдельный а ослальные в записанны в другой массив
// restaurant.orderPizza('cheez'); //cheez и пустой массив []
// restaurant.orderPizza('bacon', 'origano', 'tomato'); //cheez и пустой массив []
//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////  Подводя Итог ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////// Spread
// используеться чтоб собрать массива или свойства обьекта и расделить их запятой
//
// Часто применяеться в :

// В Function чтоб передать много аргументов в обном | Function(...args)

// Для обьединения массивов  |  const newArray = [...array1, ...array2];

// Для распределения свойств объекта | const objCopy = {...oldObj , newProp: 'value' }; }

// Для создания копии массива или объекта: const copyArray = [...originalArray];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Rest
//но он применяется в аргументах функции или деструктуризации для сбора оставшихся элементов в массив.
//
// Часто применяеться в :

// В функциях: function myFunction(arg1, arg2, ...restArgs) { ... }

// В деструктуризации массивов: const [first, second, ...rest] = myArray;

// В деструктуризации объектов: const { prop1, prop2, ...restProps } = myObject;

//
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Short circuting  (&& , ||) ////////////////////////////////////////////////
// ||  ,  &&

// console.log('---OR---');
// // || (OR) - Возвращяет первое true значение из поданных даже если осталье правильные
// console.log(3 || 'Eli');
// console.log('' || 'Eli');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || null || '' || 'hello ' || true); // В консоле высветиться hello потому что это первое true значение

// //
// restaurant.Guest = 0;
// const guest1 = restaurant.guest ? restaurant.guest : 10;
// console.log(guest1);

// const guest2 = restaurant.Guest || 10;
// console.log(guest2);

// console.log('---AND---');
// // && (AND) - возвращает первое false значение
// console.log(3 && 'Eli');
// console.log('' && 'Eli');
// console.log(true && 0);
// console.log(undefined && null);

/////////////////////////////////////////////////// Nullish Operator ?? ////////////////////////////////////////////////
// Hаботает точно так же  как и OR || только для него (0  ,  '') являютсья правдой
// console.log('---Nullish---');
// const guestCOrrect = restaurant.Guest ?? 10;
// console.log(guestCOrrect);
/////////////////////////////////////////////////// Logical Assingment Operator////////////////////////////////////////////////
//

// const rest1 = {
//   name: 'Pizza Tutai',
//   numberGuest: 20,
// };

// const rest2 = {
//   name: 'Pasta Fourti',
//   founder: 'Gosinni Baku',
// };

// rest1.numberGuest = rest1.numberGuest || 10;
// rest2.numberGuest = rest2.numberGuest || 10;

// rest2.numberGuest ||= 10

// console.log(rest1);
// console.log(rest2);
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
// CHALLENG

// GOOD LUCK 😀

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];

// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1; // const gk1 = game.team1;
// // const gk2 = game.team2;
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...players1];
// console.log(players1Final);

// // 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // const {
// //   odds: { team1, x = draw, team2 },
// // } = game;

// // 6
// const printGoal = function (...players) {
//   console.log(`${players.length} shoot the goal ${game.score}`);
// };
// // 7
// team1 < team2 && console.log('team1 is more likely to win');
// team1 > team2 && console.log('team2 is more likely to win');

/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
//
//
// /////////////////////////////////////
//
// ///////////////////////////////////////////////////// Loop Array ///////////////////////////////////////////
//
// //////////////////////////////////// for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// /////////////////////////////////////
//
// //////////////////////////////////////////////// Looping Object (Keys, Value, Enteries) ///////////////////////////////////////////
//
// Object не является Eterables - но все равно сушествеут способ применить loop для него
// Это можно сделать по трем вещять

/////////////////////////////////////////////////// Property Name - (Keys) = Object.keys
// const promerty = Object.keys(openHours);
// console.log(promerty);

// let openStr = `We open at on ${promerty.length} days : `;
// // console.log(openStr);

// // Property - (Keys) = Object.keys
// for (const day of promerty) {
//   openStr += `${day} , `;
// }

// console.log(openStr);

// /////////////////////////////////////////////////// Property Value = Object.values
// const values = Object.values(openHours);
// console.log(values);

// // Entries = Property Name + Property Value
// const entries = Object.entries(openHours);
// console.log(entries);

// for (let [key, { open, close }] of entries) {
//   console.log(`At ${key} we open : ${open} ,and close ${close}`);
// }

/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
//
// Challeng 2
//

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// 1
// const scoder = game.scored;

// for (let [x, print] of scoder.entries()) {
//   console.log(`Goal ${x + 1} : ${print}`);
// }

// // 2
// const odd = Object.values(game.odds);

// const clalAvr = function (...odd) {
//   let sum = 0;
//   for (let i = 0; i < odd.length; i++) sum += odd[i];

//   const avr = sum / odd.length;
//   console.log(avr);
// };

// clalAvr(...odd);

// // 3
// const [draw, team1, team2] = Object.entries(game.odds);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const string = team === 'x' ? 'drwa' : `winn' ${game[team]} `;
//   console.log(`Odd to ${string} ${odd}`);
// }

// // 4

// const scorers = {};
// const scored = game.scored;

// for (const player of scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }

// console.log(scorers);
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////   SET   ///////////////////////////////////////////////////////////////////
//
//
// Set (тоже iterabels) - это встроенный объект в JavaScript, предназначенный для хранения уникальных значений. Он представляет собой коллекцию    значений, где каждое значение может присутствовать только один раз. Это означает, что в Set нельзя иметь дублирующиеся элементы.

//Уникальные значения:
// В Set каждое значение уникально, и дублирующиеся элементы автоматически игнорируются.

// Порядок вставки:
// Set сохраняет порядок вставки элементов, что означает, что элементы перечисляются в том порядке, в котором были добавлены.

// Методы итерации:
//  Set реализует протокол итерации, поэтому вы можете легко перебирать его элементы с помощью циклов for...of или методов, поддерживающих итерацию.

// Методы работы с множествами:
// Set предоставляет методы для добавления, удаления и проверки наличия элементов, такие как add, delete, has и другие.
//////////////////////////////////////////////////////// ////////////////////////////////////////////////////////
//
//
// Syntaxsis

// const orderSet = new Set([
//   'pizza',
//   'passta',
//   'rissotto',
//   'pizza',
//   'passta',
//   'rissotto',
// ]);

// console.log(new Set('eli')); //Set (тоже iterabels)

// // Повторяющаися знацения просто проигнорируються и в результате получем всеголишь 3 значения
// // Set(3) {'pizza', 'risotto', 'pasta'}
// console.log(orderSet);

// //.size - показывает сколько значений находяться в Set
// console.log(orderSet.size); //Можно тоже узнать сколько уникальных значений находиться в SET

// // has(-) - покажет true/false
// console.log(orderSet.has('Bread'));

// // add - Жобовляет значения в SET в конец сета
// console.log(orderSet.add('Bread'));

// .delete - удаляет значение

// .clear - удалит все значения
// console.log(orderSet.clear('pizza'));
// console.log(orderSet);

///////////////////////////////////////////////
//
// Как достовать значения из set?
// В set нету Индекса хранения так что если надо хранить данные а потом их доставать то set не подойдет
//
//
//
// Изза того что set являеться iterables - мы можем применить к нему for-of

// for (const order of orderSet) console.log(order);

///////////////////////////////////////////////
//
// В основном set используют чтобы удалять переменные из array и получения только уникальных значений
//
// Пример - мы из массива с разными данными сделали уникальный массив переместив все переменные из set в array
//
///////////////////////////////////////////////
//
//
//Лучший пример когда можно использовать set
// Этого когда нужно избавиться от повторения значений в массиве

// const stuff = [
//   'Waiter',
//   'Manager',
//   'Chef',
//   'Chef',
//   'Waiter',
//   'Bartender',
//   'Bartender',
// ];

// сконвертируем ARRYA -> set
// И в результате получаем сет с уникальными значениями из arrya
// const uniqStuff = new Set(stuff);

// // сконвертируем ARRYA -> set -> uniqArrya
// const uniqStuff = [...new Set(stuff)];
// console.log(uniqStuff);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// ////////////////////////////////////////////////   Maps   ///////////////////////////////////////////
//

// Создвем MAPS

// const rest = new Map();

// // set(['keyName', value]) - добавить елемент в maps (keyName - CAN BE A ANY DATA_TYPE)
// rest.set('name', 'ClassicoDeBurdel');
// rest.set(1, 'LizaPlaza');
// rest.set(2, 'Guirana');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are clsoe :(');

// console.log(rest);

// // get() - получчить по названию ключа
// console.log(rest.get('name'));
// // console.log(rest.get(true));

// const time = 10;
// console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

// // has() - проверка есть ли такой элемент - в консоле покажет true/false
// console.log(rest.has('categories'));

// delete() - удалить по названию ключа
// size() - проверка сколько элементов находиться в maps

//////////////////////////////////////////////////////
//
//Так же в MAPS могут быть использованы ARRAY / OBJECT
//
// Чтоб поместить ARRAY в MAPS а затем использовать егоб , ARRAY нудно поместить в переменную
// const arr = [1, 2, 3];
// rest.set(arr, 'test');
// console.log(arr);
//////////////////////////////////////////////////////

// мы так же можем добавить querySelector с DOM
// rest.set(document.querySelector('h1'), 'Heading');

////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Maps Iteration
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// И мы можем при Сonvert Object to Map
// Благодоря этому методу можно конвертировать обьект в Maps

///////////////// Maps Iteration
//
///////////////////////////////////// практитчный пример
//
//Созжание нового MAPS([[key, value], [key,value]])
// const quiz = new Map([
//   ['question', 'What the best programmer langueg on the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Yeah is correct'],
//   [false, 'Nope , Try again'],
// ]);
// console.log(quiz);

// // Object можно конвертировать тоде в Key
// const hoursMaps = new Map(Object.entries(openHours));
// console.log(hoursMaps);

////////////////////////////////////////////////////////// в Maps можно так же применять itaration (for-of)
//
// Quiz APP

// console.log();

// for (const [key, value] of quiz) {
//   if (typeof key === 'number') console.log(`Ansver ${key} : ${value}`);
// }

// const ansver = Number(prompt(`You ansver`));
// console.log(ansver);

// console.log(quiz.get(ansver === quiz.get('correct')));

// if (ansver == 3) {
//   console.log(quez.get(true));
// } else {
//   console.log(quez.get(false));
// }

// Object.enteries() - выглядит очень похоже на Maps
// (3) [Array(2), Array(2), Array(2)]
// 0 : (2) ['thu', {…}]
// 1 : (2) ['fri', {…}]
// 2 : (2) ['sat', {…}]
// length : 3

// Но так же через можно и обратно из MAPS to Object

// console.log(quez.entries());

/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
//
//
//
// Когда использовать какую DATA-Stractur

//3 Sourse of data

// 1 . Fromthe program it self -  (DATA wrigting in source program)
// (e.g STATUS MESSEG, ERROR)

// 2. FROM UI - (Data input from user or DATA whird in DOM)
//(e.g task todo app)

// 3. FROM external source  - DATA fetch from web API (API)
//

// В основном наше решение должно базироваться на том какого рода DATA мы хотим принемать и нужно ли нам потом ее использовать далее

// Если нам надо простой LIST OF VALUES  - ARRAY / set

// Если нам нужна пара и нам нудно достовать и использовать далее эти KEY/VALUE  - OBJECT/MAPS

////////////////////////////////////////////////////////////
// Array или SET

/////////////Array -
// Когда нужно иметь ORDERET-LIST с values
// И когда нужно дальнейшем манипулировать данными

/////////////set -
// Когда нужна быстроя производительность
// Когда нужно  иметь лист с уникальными VALUES
// Когда нужно избавиться от повторяющихся VALUES
///////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Object или MAPS

///////////// Object
// Simple key/value store
// - Более традиционный key/value store
// - Более легкий и доступ до value
// - Когда надо использоват METHOD
// - При работе в JSON (В дальнейщем можно конвертировать в MAPS)

///////////// MAPS
// Advance key/value store
// - Лучшая производительность
// - Key - могут иметь лубое значение (num , str , boolean )
// - Easy to iterate
// - Easy to pomniut the size
////////////////////////////////////////////////////////////

//
//
////////////////////////////////////////////////////////////
// В JS есть еще Biuld-in DATA Structur
//  - Array
//  - Set
//  - Object
//  - Maps
//  - WeakMap
//  - WeakSet
////////////////////////////////////////////////////////////
// Так же не встроенный
// - Stack
// - Queue
// - Linked-list
// - Trees
// - Hash tables
////////////////////////////////////////////////////////////

/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
// Challeng 3

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1 - Convert Maps to uniqArr
// const noDubGameEvents = new Set();

// for (const [key, value] of gameEvents) {
//   noDubGameEvents.add(value);
// }

// const arr = [...noDubGameEvents];
// console.log(arr);

// Alternativ to 1
// const events = new Set(gameEvents.values());
// console.log(events);

// 2
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3

// console.log(
//   `An eventh appened, on average, every ${90 / gameEvents.size} minutes`
// );

// // 4
// // First half
// for (let [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key} : ${value} `);
//   }
// }

// // Second half
// for (let [key, value] of gameEvents) {
//   if (key < 90) {
//     console.log(`[SEOCND HALF] ${key} : ${value} `);
//   }
// }

// // Extra Time
// for (let [key, value] of gameEvents) {
//   if (key > 90) {
//     console.log(`[EXTRA TIME] ${key} : ${value} `);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// STRING //////////////////////////////////////////////////////////////////
//
// Если мы задаем METHOD для STRING то тогда JS автоматически конвертиркет его в обьект с темени самыми значениями что и оригинальный стринг
//
// const airline = 'TAP Air Portugal';
// const plane = 'A32neo';

// // Мы можем получить любую буквы , просто вписав ее индекс
// console.log(plane[0]);
// console.log(Number(plane[1])); //Конвертация в NUMBER
// console.log(plane[2]);
// //
// console.log('B373'[0]);

// // Так же мы можем узнать сколько символов содержит .leght
// console.log('Eliasz'.length); //6

// // indexOf
// console.log(airline.indexOf('r'));

// //lastIndexOf
// console.log(airline.lastIndexOf('r')); //покажет индекс где находиться последний элемент ("r")

// // Эти методы key sensetiv - (P) !=== (p)
// console.log(airline.indexOf('Portugal'));

// // slice() - В скобках указываем индекс с которого начнеться стринг (часть перед этим индексом отрежеться)
// console.log(airline.slice(4));

// // slice (4,7) - так же можно указать стартовый и конечный идекс
// console.log(airline.slice(4, 7));

// // Как получить первое слово - Комбинировать значения
// console.log(airline.slice(0, airline.indexOf(' ')));

// // как получить последнее слово
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Последний параметр даже не надо указывать так как он просто возьмет все от послежнего пробкла и до конца

// //Мы так же можем указать негативный параметр slice(-1)
// console.log(airline.slice(-3)); // gal - результат с консоли

// //
// // Real Life exzample
// //

// // функцию котороя проверяет будем ли мы сидеть в середине ряда или нет
// const tiketChecker = function (ticket) {
//   const seat = ticket.slice(-1);
//   if (seat === 'B' || seat === 'E')
//     console.log(`Unlicky , you seat on the middle`);
//   else console.log(`Leaky you`);
// };

// tiketChecker('15B');
// tiketChecker('41C');
// tiketChecker('21A');
// tiketChecker('11E');
///////////////////////////////////////////////////////// STRING (2) ////////////////////////////////////////////////////////////////
//

// const airline = 'TAP Air Portugal';

// // toLowerCase
// console.log(airline.toLowerCase());

// // toUpperCase
// console.log(airline.toUpperCase());

// // Fix capitalization
// const namePassenger = 'eLiaSz';
// const fixToLower = namePassenger.toLowerCase();
// const correct = fixToLower[0].toUpperCase() + fixToLower.slice(1);

// console.log(correct);

// /////////////////////////////// Extra task
// const fixer = function (name) {
//   const fix = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
//   console.log(fix);
// };
// fixer('eLiaSz');
// //

// // Compair email
// const email = 'hello@gmail.com';
// const email1 = '    Hello@gMail.com  \n';

// // trim() - метод который убирает пробелы в начале и в конце
// //
// // trimStart() , trimEnd()
// const fix1 = email1.toLocaleLowerCase().trim();

// console.log(fix1);
// // console.log(fix1 === email);

// // Extra Taske (Email Compairing Function)
// const emailCompair = function (email, emailToCompair) {
//   const normalizer = emailToCompair.trim().toLowerCase();
//   const arTheyTheSame = email === normalizer;
//   return arTheyTheSame;
// };

// console.log(emailCompair('hello@gmail.com', '    Hello@gMail.com  \n'));

// // replace/replaceAll ('элемент который надо изменить ',' на который будем менять')

// //replace
// const priceEU = '299,90€';
// const priceUS = priceEU.replace('€', '$').replace(',', '.');

// console.log(priceEU);
// console.log(priceUS);

// // replaceAll()
// const messeg = 'Back door : back door is opnenig at 15:30';
// // console.log(messeg.replaceAll('door', 'gate'));

// // regular Expretion
// console.log(messeg.replaceAll(/door/g, 'gate'));

// // BOOLEAN
// //
// // .inclued (BOOLEAN)
// const ticket = 'AirBuss A32neo';
// console.log(ticket.includes('A32')); // Это вернет нам значение true

// //  .startWith
// console.log(ticket.startsWith('Air')); // true

// if (ticket.startsWith('AirBuss') && ticket.endsWith('neo')) {
//   console.log('Welcom on a bourt');
// }

// //Practise ex
// const checkBagge = function (item) {
//   const toLow = item.toLowerCase();
//   if (toLow.includes('gun') || toLow.includes('drug')) {
//     console.log('👮‍♂️');
//   } else {
//     console.log('✈️');
//   }
// };

// checkBagge('I , have a GuN');
// checkBagge('I , have a snooze');
// checkBagge('I , have a dRug');

///////////////////////////////////////////////////////// STRING (3) ////////////////////////////////////////////////////////////////
//

//.split
//
// В результате использования .split() мы получем каждое слово ы отдельном ARRAY
// console.log(`a+very+nice=string`.split('+'));
// console.log(`Eliasz Zakrzewski`.split(' '));

// Используя Distraction и .split() метод мы можем сразу создать ARRAY в который попадут наши Property
// const [first, last] = `Eliasz Zakrzewski`.split(' ');
// console.log(first);
// console.log(last);

// Join
// const newName = ['Mr', first, last].join(' '); // Mr Eliasz Zakrzewski

// console.log(newName);

//
/////////////////////////////////// Exz
// const capName = function (name) {
//   const nameArr = name.split(' ');
//   const correctName = [];

//   for (const l of nameArr) {
//     // correctName.push(l[0].toUpperCase() + l.slice(1));
//     correctName.push(l.charAt(0).toUpperCase() + l.slice(1));
//     // correctName.push(l.replace(l[0], l[0].toUpperCase()));
//   }
//   return correctName.join(' ');
// };

// console.log(capName('jess ann france dawid pawel'));
// console.log(capName('eliasz zakrzewski'));
/////////////////////////////////

// Padding

// .padStart()
// const messeges = `Go to gate number 3`;
// console.log(messeges.padStart(20, '-').padEnd(30, '+'));

// .padEnd()
// console.log('Elaisz'.padStart(20, '+').padEnd(30, '-'));

//
//
//
/////////////////////////////////// exz
// const maskCreditCart = function (number) {
//   const str = number + ''; // convert number to string
//   const lastFor = str.slice(-4);
//   return lastFor.padStart(str.length - 4, '*');
// };

// console.log(maskCreditCart(5312515315133));
// console.log(maskCreditCart(531251531513352351));
// console.log(maskCreditCart('5312532115515315133'));

///////////////////////////////////
//
//

// reapet()

// const badNew = `Bad wheader... All Departurs Delayed`;
// console.log(badNew.repeat(5));

// const palneInLine = function (n) {
//   console.log(`There are ${n} plane in line ${'🛩️'.repeat(n)}`);
// };

// palneInLine(4);
// palneInLine(5);
// palneInLine(6);

// // How to revers strilg
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }
// reverseString('hello');

/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// ///////////////////////////////////////////////////////////////////////////////
// Challenge 4
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   const textArea = textarea.value.replaceAll(' ', '');
//   const splitLow = textArea.toLowerCase().split('_');

//   const toCam = splitLow
//     .map((words, index) => {
//       if (index === 0) {
//         return words.toLowerCase();
//       } else {
//         return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
//       }
//     })
//     .join('');

//   console.log(`${toCam.padEnd(50)} -`);
// });

// console.log(camelCaseFunction('underscore_case'));
// console.log(camelCaseFunction('first_name'));
// console.log(camelCaseFunction('Some_Variable'));
// console.log(camelCaseFunction('calculate_AGE'));

// EXTRA CHELLENGE
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

// for (const words of flights.split('+')) {
//   const [type, from, to, time] = words.split(';');

//   const fixType = type
//     .replaceAll(';', ' ')
//     .replace('_', '')
//     .replaceAll('_', ' ');

//   fixType.startsWith('Delayed') ? `'🔴' ${fixType}` : `${fixType}`;

//   const fixFrom = from.toUpperCase().slice(0, 3);
//   const fixTo = to.toUpperCase().slice(0, 3);

//   const fixTime = time.replace(':', 'h');

//   const output = `${fixType} from ${fixFrom} to ${fixTo} (${fixTime})`;
//   console.log(output.padStart(42, ' '));
//   // const fix1 = words.replaceAll(';', ' ').replace('_', '').replaceAll('_', ' ');
//   // const fix2 =
// }
