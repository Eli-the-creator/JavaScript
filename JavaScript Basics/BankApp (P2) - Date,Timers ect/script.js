'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Eliasz Zakrzewski',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-01-28T09:15:04.904Z',
    '2023-04-01T10:17:24.185Z',
    '2023-05-08T14:11:59.604Z',
    '2023-08-21T17:01:17.194Z',
    '2023-08-22T23:36:17.929Z',
    '2023-08-22T10:51:36.790Z',
    '2023-08-23T10:51:36.790Z',
    '2023-08-23T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

// Format Currency
const formatCurrency = function (localFormat, local, currency) {
  return new Intl.NumberFormat(local, {
    style: 'currency',
    currency: currency,
  }).format(localFormat);
};

const displayCurrentDate = function (date, locale) {
  const calcDay = (d1, d2) => Math.round((d1 - d2) / (1000 * 60 * 60 * 24));

  const dayPass = calcDay(new Date(), date);
  console.log(dayPass);

  if (dayPass === 0) return 'Today';
  if (dayPass === 1) return 'Yesteday';
  if (dayPass <= 7) return `${dayPass} days ago`;

  // const mounth = `${date.getMonth() + 1}`.padStart(2, 0);
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const year = date.getFullYear();

  // const fullDate = `${mounth}/${day}/${year}`;

  return Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // Добавляем времz
    const day = new Date(acc.movementsDates[i]);
    const timeMov = displayCurrentDate(day, acc.locale);

    // Локальные формат финансов
    const formatMov = new Intl.NumberFormat(acc.locale, {
      style: 'currency',
      currency: acc.currency,
    }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${timeMov.padStart(2, 0)}</div>
        <div class="movements__value">${formatMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // Format currecy

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.local,
    acc.currency
  );
};

const calcDisplaySummary = function (acc) {
  // Local Format

  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCurrency(incomes, acc.local, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(out, acc.local, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.local,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//
//
//
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// ////////////////////////
//
// Timer Log Out
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // call the timer every second, print every second UI
    labelTimer.textContent = `${min} : ${sec}`;

    // when time === 00:00 -> stop timer, log out
    if (time === 0) {
      clearInterval(tick);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // decris 1s
    time--;
  };

  // set the time 5 minuts
  let time = 300;
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//
// // Fake log in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// Вместо того чтобы указывать самостоятельно локализацию ее можно взять из браузера
// const local = currentAccount.locale;
// console.log(local);

// labelDate.textContent = new Intl.DateTimeFormat(local, option).format(now);
//
//
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // Timer Fix
  if (timer) clearInterval(timer);
  timer = startLogOutTimer();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //////////////////////////////////////// Data Lesson
    //
    // Today Data
    // const now = new Date();

    // // Year / Day / Mounth
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const mounth = `${now.getMonth() + 1}`.padStart(2, 0); // !!!Не забывай приписывать + 1 к месяцу чтобы получить правильный месяц
    // const year = now.getFullYear();
    // const hourse = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes(0)}`.padStart(2, 0);

    // labelDate.textContent = `${mounth}/${day}/${year} , ${hourse}:${min}`;

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const now = new Date().toISOString();

  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    // Date
    currentAccount.movementsDates.push(now);
    receiverAcc.movementsDates.push(now);

    // Money
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

// ///////////////
//
//Loan Button
//
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const now = new Date().toISOString();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      //data
      currentAccount.movementsDates.push(now);

      // Update UI
      updateUI(currentAccount);
    }, 5000);
  }
  inputLoanAmount.value = '';

  // reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';

  // reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;

  // reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// console.log(0.1 + 0.2);

// // Convertion
// console.log(Number('23'));
// console.log(+'23'); // Когда JS ичтает код и видет +'number' он автоматически выполняет  coertion

// // Parsing
// console.log(Number.parseInt('30px')); // 30
// console.log(Number.parseInt('e23')); // NaN

// console.log(Number.parseInt('2.3rem')); // 2
// console.log(Number.parseFloat('2.3rem')); // 2.3

// //Cheking if ist Not a Number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20X'));

// // Cheking if the value is a number
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(+'20X')); //false

// // Cheking if the number is a Integer (Целое число)
// console.log(Number.isInteger(20));
// console.log(Number.isInteger(20.0));
// console.log(Number.isInteger(20.5 / 0));

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // Math and Roaunding

// ///////////////// Math

// // sqrt
// console.log(Math.sqrt(25)); // sqrt - делит на квадрат
// console.log(25 ** (1 / 2)); // - это тоже самое что и пример с верху
// console.log(25 ** (1 / 3));

// // .max() - так же подтердивает конвертацию
// console.log(Math.max(5, 12, 23, 45, 54, 22));
// console.log(Math.max(5, 12, 23, 45, '54', 22));
// console.log(Math.max(5, 12, 23, 45, '54px', 22));

// // .min()
// console.log(Math.min(5, 12, 23, 45, 54, 22));

// // Считаем радиус круга
// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // Генерируем рандомные числа
// console.log(Math.floor(Math.random() * 100) + 1);

// const random = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(random(10, 20));
// console.log(random(1, 20));

// ///////////////// Rounding
// console.log(Math.trunc(23.5));

// // .round()  - За окоругление в + (RoundUp)  4 -, 5+
// console.log(Math.round(23.4)); // 23
// console.log(Math.round(23.6)); // 24

// // .ciel() - За окоругление в - (RoundDown)
// console.log(Math.ceil(23.2)); // 23
// console.log(Math.ceil(23.2)); // 23

// // .floor() - делает то же самое что и .trunc() только .floor() работает тоде с негативными значениями
// console.log(Math.floor(23.2)); // 23
// console.log(Math.floor(23.2)); // 23

// //////////////// Rounding Deciman
// console.log((23.4).toFixed(0)); // '23' .toFixed(0) - тка же за округляет как .round()
// console.log((23.4).toFixed(3)); // '23.400'
// console.log(+(23.4).toFixed(3)); // 23

// // Каждый из этих методов сразу конвертирует в unmber type

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// Remainder Operator (Остаток)
// console.log('Remainder');

// console.log(5 % 2); //
// console.log(5 / 2); // 5 = 2 * 2 +1

// console.log(8 % 3);
// console.log(8 / 3); // 8 = 2 * 3 + 2

// console.log(6 % 2);
// console.log(6 % 2);

// console.log(7 % 2);
// console.log(7 % 2);

// // Use case
// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// // Например покрасить в списке каждую вторую появляющиюся линейку в серый цвет

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    //  2, 4, 6, 8
    if (i % 2 === 0) row.style.backgroundColor = 'gray';
    // 3, 5, 7, 9
    // if (i % 3 === 0) row.style.backgroundColor = 'black';
  });
});

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// Numeric separetor
// const diametr = 287_416_000_000;
// console.log(diametr);

// const price = 349_99;
// console.log(price);

// Никогда не использовать _ для API

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// BigInt
// console.log(2 ** 53 - 1);

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(90071992547409919007199254740991n);
// console.log(BigInt(3425434253));

// // OPERATION
// console.log(15362435746n + 134231224n);
// console.log(10_000n + 10_000n);

// //Нельзя смешивать обычные цифры с BigInt

// //
// console.log(20n > 15); // true
// console.log(15n == 15n);

// console.log(20n === 20); // === сравнивает не только value но и typeOf date

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // Time and Data

// creat a date
// В Js есть 4 способа создать date

// 1 Construction
// const now = new Date();
// const bDay = new Date('Jun 24 2001');
// // console.log(now);
// console.log(now - bDay);

// // Так же можно указывать конкретный стриг с датой и JS Автоматически подставит все значения туда
// console.log(new Date('Aug 23 2020 16:10:12'));

// //Можно в качесте переменной подать переменную массива
// console.log(account1.movementsDates[0]);

// //Так же можно указать просто цифры (Year , mounth , day , hourse , minuts , second) И он автоматически подставит все данные
// // так же он конвертирует автоматически и если будет больше дней чем положено в месяце он сам изметин на следующий месяц
// console.log(new Date(2050, 12, 12, 22, 1, 7));

// console.log(new Date(0));

// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //time - stemp

//
//
//new Date() - являеться тоде специальным типом обьекта (И для него тоже существуют методы)
// const future = new Date(2037, 10, 19, 15, 23);

// // .getFullYear() - чобы получить год
// console.log(future.getFullYear());
// console.log(future.getMonth() + 1); //Месяца указаны от 0 до 11

// //
// console.log(future.getDate()); //.getDate() - Число дня в в месяце
// console.log(future.getDay()); // /getDay() - поулчаем номен дня в недели

// console.log(future.getHours());
// console.log(future.getMinutes());

// // .toISOString
// console.log(future.toISOString());

// // .getTime()
// console.log(future.getTime()); // конвертация в милисекунды

// console.log(new Date(2142256980000));

// // Чтобы получить время прямо сейчас
// console.log(Date.now());
// console.log(new Date(1692805464635));

// // Так же можно устанавливать время
// // .set...()
// future.setFullYear(1945);
// console.log(future);

//
//
///////////////////////////////// Математические расчеты с временем
const future = new Date(2037, 6, 24, 12, 34, 55);

console.log(+future);

const clacDayPassed = (day1, day2) =>
  Math.round(Math.abs((day1 - day2) / (1000 * 60 * 60 * 24)));

const dayCalc = clacDayPassed(future, new Date(2037, 8, 13, 2, 5, 4));

console.log(`${Number(dayCalc)} : Day`);

// Intl.Number
const num = 141132.89;

const otion = {
  style: 'currency',
  // unit: 'celsius',
  currency: 'EUR',
};

console.log(
  'US: ',
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(num)
);
console.log('PL: ', new Intl.NumberFormat('pl', otion).format(num));

/////////////////////////////////////////////////////////////////// Set timer

// Первый пример ассинхронности JS
// Прочитав код он записывает его и все что идет после этого кода уже применяеться и может быть использованно и начинает отсчет в момент того как начинает применяться код
//

const ingr = ['cheesh', 'tomato'];

// setTimeout() - мы просто в конце функции передаем значение в милисекундах и функция будет выполнена через это количесто времени единажды
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is youre pizza whith ${ing1} and ${ing2}`),
  3000,
  ...ingr
);

if (ingr.includes('tomato')) clearTimeout(pizzaTimer);

console.log('Waiting....');

// setInterval
// Установко интервальной функции - так чтоб она выполнялась кажые определенное количесто времени

// setInterval(function () {
//   const now = new Date();

//   let house = now.getHours();
//   let minuts = now.getMinutes();
//   let second = now.getSeconds();

//   console.log(`${house} : ${minuts} : ${second}`);
// }, 1000);
