'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Eliasz Zakrzewki',
  movements: [
    800, 3000, 200, 450, -400, 3000, 1000000, -650, -130, 70, 200000, 1300,
  ],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: 'Ivan Zakrevskyi',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1212,
};
const account6 = {
  owner: 'Karina Zakrevskyi',
  movements: [1000000],
  interestRate: 1,
  pin: 9090,
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

// BOTTON
// LOGGIN
const btnLogin = document.querySelector('.login__btn');

const btnTransfer = document.querySelector('.form__btn--transfer');

// Loan Botton
const btnLoan = document.querySelector('.form__btn--loan');

// BOTTON CLOSE ACCOUNT
const btnClose = document.querySelector('.form__btn--close');

const btnSort = document.querySelector('.btn--sort');

// LOGGIN INPUT
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');

// Loan input
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//
////////////////////////////////////////////////////////////////////////////
//

// ////////////////
//
//USER NAME
//
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts); //stw

// ////////////////
//
//Movements
//
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = ' ';

  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;

  mov.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${type}</div>
    <div class="movements__value">${mov} </div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// ////////////////
//
// SUMMARY
//
const calcDisplaySummary = function (acc) {
  acc.balance = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, value) => acc + value, 0);

  labelSumIn.textContent = `${acc.balance}€`;
};

// ////////////////
//
// BALANCE IN / OUT / INTEREST
//
const calcDisplayBalance = function (acc) {
  const balance = acc.movements
    // .filter(mov => mov > 0)
    .reduce((accum, value) => accum + value, 0);

  labelBalance.textContent = `${balance}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, values) => acc + values, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`; //.replace('-', '')

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((accum, int) => accum + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

// ///////////////
//
// Function UI update
//
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display Balance
  calcDisplayBalance(acc);

  // Display Summary // Display Summary
  calcDisplaySummary(acc);
};

// ////////////////
//
// Loggin
//
// /////////////Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // UserName
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //Password
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI Welcom Messeg
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginUsername.blur();
    inputLoginPin.blur();

    console.log(currentAccount);

    updateUI(currentAccount);
    //
  }
});

// //////////////////////
//
//Tranfer money
//
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const tranfredTO = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    tranfredTO &&
    currentAccount.balance >= amount &&
    tranfredTO?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    console.log(-amount);
    tranfredTO.movements.push(amount);

    updateUI(currentAccount);
  }
});

// ///////////////////////
//
// Request loan
//
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    // Add movement to account
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});
// ///////////////////////
//
// Close Account
//

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');

  const closeAccountName = inputCloseUsername.value;
  const closeAccountPin = Number(inputClosePin.value);

  if (
    closeAccountName === currentAccount.username &&
    closeAccountPin === currentAccount.pin
  ) {
    const indexDelete = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    console.log(indexDelete);

    // Delete account
    accounts.slice(indexDelete, 1);

    // Hide UI
    containerApp.style.opacity = 0;

    labelWelcome.textContent = 'Log in to get started';
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sortet = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sortet);
  sortet = !sortet;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////

// ARRAY METHOD

/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// .slice() - достает элементы от указонного идекса и до помследнего
console.log(arr.slice(2));
console.log(arr.slice(0, 4)); //последний индекс не будет взят но возьметься последний перед ним
console.log(arr.slice(-2));
console.log(arr.slice(-1));

//  .splice - удаляет из оригинального массива элементы
console.log(arr.splice(2)); // - ['c', 'd', 'e']
console.log(arr); // - ['a', 'b']

console.log(arr.splice(-1)); // Удаление последнего элемента в массиве

// Reverse - так де изменяет оригинальны массив
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // после применения revers оригинальный массив будет изменен

//CONCAT
const letter = arr.concat(arr2);
console.log(letter);

// JOIN
console.log(letter.join(' - '));

*/

/////////////////////////// NEW .at() MEHTOD

/*
const arr = [23, 11, 64];

// console.log(arr[0]);  //-Тоже самое что и ниже просто старая версия

console.log(arr.at(0));

console.log(arr.at(-1));
*/

/*


for (let [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Operation ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Operation ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---forEach---');

movements.forEach(function (movement, i, array) {
  console.log(movement, i, array);

  if (movement > 0) {
    console.log(`Operation ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Operation ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

// Разница между forEach и for-of

// forEach - нету возможности использовать CONTINUE, BREAKE .Просто проходит по всем элементом массива

/////////////////////////////////////////////////////// forEach (SET / MAPS)

// MAP
// const maps = new Map([
//   ['USD', 'United State Dollar'],
//   ['Euro', 'Euro'],
//   ['GBR', 'Pound'],
// ]);

// maps.forEach(function (value, key, map) {
//   console.log(`${value} , ${key}`);
// });

// // SET
// const set = new Set(['USD', 'USD', 'EURO', 'GRN', 'AUS', 'AUS', 'GRN']);

// set.forEach(function (value) {
//   console.log(`${value}`);
// });

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHALLENGE

// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const JuliaData1 = [3, 5, 2, 12, 7];
// const KateData1 = [4, 1, 15, 8, 3];

// const Julia = [9, 16, 6, 8, 3];
// const Kate = [10, 5, 6, 1, 4];

// // 1 Julia

// JuliaData1.splice(-2);
// JuliaData1.splice(0, 1);
// const allData = JuliaData1.concat(KateData1);

// const data2 = Julia.concat(Kate);

// console.log(allData);

// const dogsYear = function () {
//   allData.forEach(function (year, i) {
//     if (year > 3) {
//       console.log(`Dog number ${i + 1} is an ${year} years old `);
//     } else {
//       console.log(`Dog number ${i + 1} is still a ${year} 🐶`);
//     }
//   });
// };

// console.log(`---DATA1---`);
// dogsYear(allData);
// console.log(`---DATA2---`);
// dogsYear(data2);

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//
/////////////////////////////////////////
///////////////////////////////////////// map , filter , reduce , find
/////////////////////////////////////////
//

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// MAP
// - /создает новый массив/ с данными (Так же мы можем проводить манипуляции с данными из оригинально массива и изменять их во время итрации и сразу же перемешать в новый )

// Похож на foeEach - только map создает новый array который можно потом использовать

// Предколожем что надо перевести из dollar в euro
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUst = 1.1;

// const movementUSD = movements.map(mov => mov * euroToUst);
// console.log(movementUSD);

// const movementDescription = movements.map((movement, i) => {
//   return `Operation ${i + 1}: You ${
//     movement > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(movement)}`;
// });

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////FILTER METHOD

// console.log(movementDescription);
// FILTER -

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // REDUCE /создает новый массив/ У него есть переменная accum что означает что он собырает все данные в одно

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////REDUCE на примере создания обьщего счета

// // accumalutor

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////// FIND()
// .

//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CHALLENGE 2

// const dataOne = [5, 2, 4, 1, 15, 8, 3];
// const dataTwo = [16, 6, 10, 5, 6, 1, 4];

// const toHuman = dataOne.map(year => (year <= 2 ? 2 * year : 16 + year * 4));
// const adultAges = toHuman.filter(year => year >= 18);
// const avrDogAge = adultAges.reduce(
//   (acc, value, i, arr) => acc + value / arr.length,
//   0
// );

// console.log(toHuman, adultAges);
// console.log(avrDogAge);

// console.log(calcAvr);

// function calculateAverageHumanAge(data) {
//   const calcAverageHumanAge = dataOne.map(year => {
//     if (year <= 2) return year * 2;
//     else return 1;
//   });

//   const adultAges = calcAverageHumanAge.filter(year => year >= 18);

//   const averageAge =
//     calcAverageHumanAge.reduce((acc, year, i, arr) => acc + year, 0) /
//     arr.length;

//   return {
//     calcAverageHumanAge: calcAverageHumanAge,
//     adultAges: adultAges,
//     averageAge: averageAge,
//   };
// }

// const resultOne = calculateAverageHumanAge(dataOne);
// const resultTwo = calculateAverageHumanAge(dataTwo);

// console.log(resultOne.calcAverageHumanAge);
// console.log(resultOne.adultAges);
// console.log(resultOne.averageAge);

// console.log(resultTwo.calcAverageHumanAge);
// console.log(resultTwo.adultAges);
// console.log(resultTwo.averageAge);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//
/////////////////////////////////////////
///////////////////////////////////////// ARRAY METHOD : some , every
/////////////////////////////////////////
//

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ///////////////////////
// /////////////////////// .some
// /////////////////////// Проверяет есть ли такая переменная подходящаю под функицю которую мы написали вней (ОДНА) в массиве - и возвращает (true/false)

// console.log(movements)

// ///////////////////////
// /////////////////////// .every
// /////////////////////// Проверяет ВCЕ элементы массива проходят под функицю которую мы написали вней  - и возвращает (true/false)

// К примеру -

// Проверяем ВСЕ ЛИ элементы в массиве болье нуля

//
// ///////////////////////
// /////////////////////// Separete call back function
// /////////////////////// Мы можем вместо того чтобы помещать целую функцию  в матод можем просто сделать CallBack
//

//
/////////////////////////////////////////
///////////////////////////////////////// flat , flatMAP
/////////////////////////////////////////
//

////////////////////////////////////////// .flat - исправляет nestd массивы в и приводит все к однуму массиву

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// // Но он работает только с первым уровнем nested
// // Чтобы достать следущие уровни нам надо вписать это в эго переменные

// const arrDeep = [[[1, 2], 3], [4, 5, 6], 7, 8];
// console.log(arrDeep.flat(2));

// // предположем что надо достать из массива accounts массив movements
// const accountsMov = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(accountsMov);

// ////////////////////////////////////////// flatMap  = .flat() + .map() = [.. , .. , ..]
// // НО он работает только с одним уровнем глубины nested

// const accountsMov2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(accountsMov2);

//
/////////////////////////////////////////
///////////////////////////////////////// SORT ARRAY
/////////////////////////////////////////
//

// SORT

// String
// const arrSort = ['Zack', 'Adam', 'Abbi', 'Jonas', 'Huala', 'Acuci'];
// console.log(arrSort.sort());

// // Numbers
// console.log(movements);

// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (a < b) return -1;
// // });

// movements.sort((a, b) => a - b);

// console.log(movements);

// // movements.sort((a, b) => {
// //   if (a > b) return -1;
// //   if (a < b) return 1;
// // });
// movements.sort((a, b) => b - a);

// console.log(movements);

// //
// /////////////////////////////////////////
// ///////////////////////////////////////// how to programaticli create and sort array
// /////////////////////////////////////////
// //

// const x = new Array(7);
// console.log(x);

// // x.fill(1);

// console.log(x);

// ///////////////////////////////////////////////////////////////////// Empty array + .fill()
// x.fill(9, 1, 5);
// console.log(x);

// ///////////////////////////////////////////////////////////////////// Array.from
// // В место того чтобы использовать (new Array= + .fill())

// // Можно сделать так
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// // Так же этот способ дает больше возможностей
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// ///////////////////////////////////////////////////////////////////// CHALLENGE
// function getRandomInt(max) {
//   return Math.trunc(Math.random() * max);
// }

// const rand = Array.from({ length: 100 }, (cur, i) => (cur = getRandomInt(100)));
// console.log(rand);

// //
// //
// // Use case
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );

//   // Это точно такой же способ только более понятный и читаемый
//   // Мы берем UI элементы и трансформируем его в масиив с цифрами
//   const movUI = [...document.querySelectorAll('.movements__value')];
//   const movUIarrayNumber = movUI.map(el => el.textContent.replace('€', ''));
//   console.log(movUIarrayNumber);
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// Summary

//Я изучил ококло 23 разных методов для работы в масивами
// Это было много работы и я молодец с каждым длнем я все ближе к целе чтобы получить работу в удаленном режиме с зарплатой в +2500€

// Чтобы еще лучще орьентироваться в них нужно подвести итоги

// И так
// прежде чем начать нужно определить цель и для чего я это делаю

// Нужен ли мне новый массив или нужно провести какую то операцию с каждой переменой не затрагивая оригинальный массив

//

// To mutate the original array - изменяют оригинальнвй массив

// Add to original array
// .push() - end
// .unshift() - start
// ///////////////////////

// Remove from original array

// .pop() - end
// .shift() - start
// .slice() - any
// //////////////////////

// Other

// .reverse() -
// .sort()-
// .fill()
// //////////////////////

//////////////////////////////////////////////////

// A new array - мы получем новый массив

// .map() - loop
// .filter() -
// .slice() -
// .concat
// .flat
// .flatMap() - flat + map
// //////////////////////

// An array Index
// .index()
// .indexOf()

// .find()

// Know if array incude (true/false)
// .include()
// .some() - вернет true когда хотябы один элемент попадает под критерия
// .every() - вернет true если ВСЕ элементы попадают под критерия функции

// Array -> String
// .join(';', ' ')

// To transform to value all array element
// .reduce() - основан на акомуляторе который собирает в себя все данные

//To just loop the array
// .forEach() - не возвращает нового массива просто переберает

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// More Practis
// 1
// const totalDep = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDep);

const totalDep = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => {
    cur > 0 ? (acc += cur) : acc;
    return acc;
  }, 0);

console.log(totalDep);
// 2
// const dep1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0); // D reduce можно тоже писать более сложные функции

// console.log(dep1000);

const dep1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => {
    mov >= 1000 ? ++acc : acc;
    return acc;
  }, 0);
console.log(dep1000);

// 3 создаем OBJECT используя reduce() - чтоб отфильтровать и посчитать
const { deposit, whithdrew } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposit += cur) : (acc.whithdrew += cur);
      acc[cur > 0 ? 'deposit' : 'whithdrew'] += cur;
      return acc;
    },
    { deposit: 0, whithdrew: 0 }
  );

console.log(deposit, whithdrew);

// 4
// this is a nice title -> This Is a Nice Title
const titleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const exception = ['a', 'and', 'to', 'an', 'the']; //Если нужно сделать какието исклучения то сосздаеться массив с переменными

  const titleCaseTransform = title
    .toLowerCase()
    .split(' ')
    .map(word => (exception.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCaseTransform);
};

console.log(titleCase('this is a nice title'));
console.log(titleCase('this is a long title but not to long'));
console.log(titleCase('and this is a long title but not to long'));
console.log(
  titleCase(
    'this is a really long title for expample is not joke the really long an exaplme'
  )
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CHALLENGE 4

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

//
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.forEach(x => {
  x.recommendedFood = Math.trunc(x.weight ** 0.75 * 28);
});

console.log(dogs);

// 2
const sarah = dogs.find(x => x.owners.includes('Sarah'));

console.log(
  `Sarah's dog eating ${
    sarah.curFood > sarah.recommendedFood ? `Too much` : `Too little`
  }`
);

// const correctFood = function (arr) {
//   const eatNow = arr.recommendedFood;
//   const recommend = arr.curFood;

//   if (eatNow > recommend) {
//     console.log(`eating too much`);
//   } else {
//     console.log(`eating too little`);
//   }
// };

// correctFood(sarah);

// 3
const { eatTooMuch, eatTooLittle } = dogs.reduce(
  (acc, cur) => {
    if (cur.curFood > cur.recommendedFood) {
      acc.eatTooMuch.push(...cur.owners);
    } else {
      acc.eatTooLittle.push(...cur.owners);
    }

    return acc;
  },
  { eatTooMuch: [], eatTooLittle: [] }
);

console.log(eatTooMuch, eatTooLittle);

// 4

console.log(`${eatTooMuch.join(' and ')} youre dog eat too much`);
console.log(`${eatTooLittle.join(' and ')} youre dog eat too little 🥲`);

//
//5
console.log(dogs.some(x => x.curFood === x.recommendedFood));

// 6
const eatWell = x =>
  x.curFood >= x.recommendedFood * 0.9 && x.curFood <= x.recommendedFood * 1.1;
console.log(dogs.some(eatWell));

console.log(dogs.filter(eatWell));

// 7
// const { okay } = dogs.reduce(
//   (acc, cur) => {
//     if (eatWell) {
//       acc.okay.push(...cur.owners);
//     }
//     return acc;
//   },
//   { okay: [] }
// );

// console.log(okay);
// 6

// 8
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood); // Shallow copy - копия обьекта
console.log(dogsCopy);
console.log(dogs); //сортировка по тому кто больще кормит

//
