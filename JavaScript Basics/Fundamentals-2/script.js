// // // Part 2
"use strict";

// // let hasDriversLicens = false;
// // const passDriversLicens = true;

// // if (passDriversLicens) hasDriversLicens = true;
// // if (hasDriversLicens) console.log("I can drive now, and Dogg.. Dont give up! ");

// //
// //
// //
// //
// //
// //
// //
// // ////////////////////////////////////////////////////////////////// What is function and how it work
// // //
// // /////This is function name
// // function logger() {
// //   // This is function body,
// //   console.log("This is a function");
// // }

// // // now we can call or run the function just simply put the name of function what we need
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apple, orange) {
// //   console.log(apple, orange);
// //   const juice = `This juice is made by using ${apple} and ${orange} oranges`;
// //   return juice; //Здесь мы записываем результат так чтоб его можно было вытянуть из тела функции НО потом нужно будет записать его в переменную надавая ему значения к примеру (const appleJuice = fruitProcessor(4, 0);) и тогда мы сможем использовать функцию в дальнейшем
// // }

// // const appleJuice = fruitProcessor(4, 0);
// // console.log(appleJuice);

// // const orangeJuice = fruitProcessor(0, 7);
// // console.log(orangeJuice);

// // const appleOrangJuice = fruitProcessor(69, 69);
// // console.log(appleOrangJuice);

// //
// //
// //
// //
// //
// //
// //
// //

// // ///////////////////////////////////////////////////////////////Function TYPE

// // // /////////////////////////////////////
// // //
// // // Function Declaretion
// // //

// // function calcAge(birthYear) {
// //   return curretYear - birthYear;
// // }

// // const age1 = calcAge(2001); //Создавая переменну которая равна функции мы используем функцию

// // // ////////////////////////////////////
// // //
// // // Function Expression
// // //
// // // Можно сделать так чтоб функция была как Declaretion ;
// // // просто в начале указать ее как :
// // // const (имя функции) = function(параметр функции)

// // const ageCalc = function (birthYear) {
// //   return curretYear - birthYear;
// // };

// // const age2 = ageCalc(2020);
// // console.log(age1, age2);

// // // ////////////////////////////////////
// // //
// // // Arrow Function
// // //

// // const clacAge = (birthYear) => curretYear - birthYear;

// // const age = clacAge(2001);
// // console.log(age);

// // // Retairmant year Left function (Example)

// // const yearUntilRetirement = (birthYear, firstName) => {
// //   const age = curretYear - birthYear;
// //   const yearsLeftToReintailments = 65 - age;
// //   return ` ${firstName}, now you ${age} years old , to youre retiremnent left ${yearsLeftToReintailments} years`;
// // };

// // console.log(yearUntilRetirement(2001, "Eli"));

// // console.log(yearUntilRetirement(2008, "Vania"));

// //
// //
// //
// //
// // Function calling other function
// //
// //
// //
// //

// // Это наша резка
// // function cutFruit(fruit) {
// //   return fruit * 4;
// // }

// // // Это наша соко выжималка
// // function fruitProcessor(apple, orange) {
// //   const applePice = cutFruit(apple); //что задействовать стороннии функцию, мы создаем в нутри тела функции переменную которая равна имени той функции которую зотим задействовать и в скобках имени функции вписываем параметры главной функции (И в дальнейшем используем эту переменную которую создали)
// //   const orangePice = cutFruit(orange);

// //   const juice = `Juice made whith ${applePice} apple pice and orange juice is made ${orangePice} oranges pice`;
// //   return juice;
// // }

// // const appleJuice = fruitProcessor(45, 0); //Это наши фрукты которые мы кладем вы соко-выжемалку

// // console.log(appleJuice);

// //
// //
// //Reviewing the Function
// //
// //
// //
// // Конверт Arrow to Expretion

// // let curretYear = 2023;

// // // age Calculation
// // const calcAge = function (birthYear) {
// //   return curretYear - birthYear;
// // };

// // // Year t oreintairments

// // const yearUntilRetirement = function (birthYear, firstName) {
// //   const age = calcAge(birthYear);
// //   const yearsLeftToReintailments = 65 - age;

// //   if (yearsLeftToReintailments > 0) {
// //     console.log(
// //       `${firstName}, now you ${age} years old , to youre retiremnent left ${yearsLeftToReintailments} years`
// //     );
// //     return yearsLeftToReintailments;
// //   } else {
// //     console.log(
// //       `${firstName}, now you ${age} years old , you been on rentairment alredy ${yearsLeftToReintailments} years`
// //     );
// //     return yearsLeftToReintailments;
// //   }

// //   //   return ` ${firstName}, now you ${age} years old , to youre retiremnent left ${yearsLeftToReintailments} years`;
// // };

// // console.log(yearUntilRetirement(1501, "Eli"));
// // // console.log(yearUntilRetirement(1901, "Eli"));

// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //
// ////////////////////////////////////////////////////////////////////////////////////Challenge 1 (Part 2)

// // // Point1
// // // Avr Point function
// // const calcAverage = (a, b, c) => (a + b + c) / 3;

// // //Calc the avr point of the teamKoala
// // function avrScoreKoalas(round1, round2, round3) {
// //   // Count the AVR score of  TEAM
// //   const scoreKoalas = calcAverage(round1, round2, round3);
// //   return scoreKoalas;
// // }

// // //Calc the avr point of the team Dolphins
// // function avrScoreDolphins(round1, round2, round3) {
// //   // Count the AVR score of  TEAM
// //   const scoreDolphins = calcAverage(round1, round2, round3);
// //   return scoreDolphins;
// // }
// // // The avr point of the TEAM we use this on checker
// // const avrScoreK = avrScoreKoalas(1, 1, 1);
// // const avrScoreD = avrScoreDolphins(1111, 1, 1);

// // // Winner Checker
// // const checkWinner = function (avrScoreK, avrScoreD) {
// //   if (avrScoreK == avrScoreD) {
// //     console.log(`Remis`);
// //   } else if (avrScoreK >= 2 * avrScoreD) {
// //     console.log(`Koalas win 🐨 (${avrScoreK} vs ${avrScoreD})`);
// //   } else {
// //     console.log(`Dolphins win 🐬 (${avrScoreD} vs ${avrScoreK})`);
// //   }
// // };

// // console.log(`🐨 Koalas score : ${avrScoreK} | 🐬 Dolphins score ${avrScoreD} `);
// // checkWinner(avrScoreK, avrScoreD);

// // ////////////////////////
// //
// //
// // Array
// //
// // Проще говоря это коробка(переменная в которой будут храниться данные) с массивом данных

// // первый способ создать массив
// // const frends = ["Dawid", "Pawel", "Piotr", "Tomek"];
// // console.log(frends);

// // console.log(frends[2]); //Выведиться в консоль 3 имя потому что счет начинаеться с 0

// // //
// // //
// // // второй способ

// // const y = new Array(90, 90, 0.92, 33, 22);

// // console.log(frends.length); // показывает сколько ячеик находиться в массиве (Тема с обьектами)

// // frends[2] = "Maria"; //на втором месте (то есть вместо piotr будет стоять Maria)
// // console.log(frends); //проверяемб выводя снова в консоль массив,  но это будет работать только после того как мы напишем до этого это будет не видно

// // //так же можна встовлять массив в массив
// // const Eli = [
// //   "Eliasz",
// //   "Zakrzewski",
// //   2023 - 2001,
// //   "DJ/Produccer",
// //   "Milioner",
// //   frends,
// // ]; //мы можем писать калькуляции потому что в [] JS ожидает видеть EXXPRETION

// // console.log(Eli);
// // console.log(Eli.length); // Позволяет увидеть сколько элементов находиться в массиве

// // const calcAge = (birdthYear) => 2023 - birdthYear;

// // const years = [2001, 1901, 1900, 2004, 2003, 2001, 1994];

// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // // const age3 = calcAge(years[2]);
// // // const age4 = calcAge(years[3]);
// // const age3 = calcAge(years[years.length - 1]); //так делаеться чтобы получить последнуу ячейку в массиве
// // console.log(age1, age2, age3);

// // const ages = [
// //   calcAge(years[0]),
// //   calcAge(years[1]),
// //   calcAge(years[years.length - 1]),
// // ];

// // console.log(ages);

// //////////////////////////////////// Часть вторая ARRAY

// // const frends = ["Dawid", "Pawel", "Piotr", "Tomek"];

// // //добавление элементов в массив
// // const newLegth = frends.push("Jazz", "Goga"); // Push - это тоже метод (функция) которая добовляет в конец массива еще элементы
// // frends.unshift("Biba"); // Unshift - добовляет элемент в начало массива
// // //
// // console.log(frends);
// // console.log(newLegth);

// // //
// // // удаление элементов в массиве
// // frends.shift(); // Удаляет первый элемент из массива
// // frends.pop(); //Удаляет последний элемент в массиве
// // frends.pop(); // Добавляе еще один элемент мы удаляем еще один элемент с конца
// // const del3Element = frends.pop(); //Элемент который будет удаляться этой строкой будет записан в переменную

// // console.log(frends);
// // console.log(del3Element);

// // /////////////////////////////// Определение места в массиве
// // // indexOf

// // console.log(frends.indexOf("Pawel"));
// // // Если мы впишем не существу.щий элемент по покажет к воксоли (-1)

// // ///// Более современный медот ES6
// // // includ
// // //
// // // Метод покажет true / false (true - если есть этот элемент в массиве, false - если нету)
// // frends.push(23);
// // // Медот использует strick метод , так что внимание на скобки (в инном слечае покаже просто false)
// // //

// // console.log(frends.includes("Pawel"));
// // console.log(frends.includes("23"));
// // //

// // // ////////////////////////////
// // //
// // // Методы можно использовать в устовиях
// // //
// // // ///////////////////////////

// // // н.п
// // if (frends.includes("Pawel")) {
// //   //.includs - это метод который являеться Boolean(true/false)
// //   console.log("U hav homie Pawel");
// // }

// /////////////////////////////////////////////////////////////

// //
// // part 1
// //
// // const bill = 45;

// // const calcBill = function (bill) {
// //   let billProc;

// //   if (bill >= 300 || bill <= 50) {
// //     billProc = bill * 0.1 + bill * 0.1;
// //   } else {
// //     billProc = bill * 0.1 + bill * 0.05;
// //   }
// //   return billProc;
// // };

// // const procAddToBill = calcBill(bill) + bill;
// // console.log(procAddToBill);

// //
// // part  2, 3, 4
// //

// // const gaGa = function (Upio) {
// //   return (Upio) => (50 && Upio <= 300 ? bils * 0.15 : bils * 0.2);
// // };

// bill;
// const bill = (bill1, bill2, bill3) => {
//   //(1) создал переменными содержащеми данные
//   bill1 = 125;
//   bill2 = 555;
//   bill3 = 44;
//   return [bill1, bill2, bill3]; // (2) - эти переменные вывожу как массив
// };

// // add tips
// const tips = (bill) => {
//   // (3) Создаю вункци. определяющаю какой процент будет присваиваться функции

//   // return (bill) => (50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
//   let billProc;
//   if (bill >= 300 || bill <= 50) {
//     billProc = bill * 0.1 + bill * 0.1;
//   } else {
//     billProc = bill * 0.1 + bill * 0.05;
//   }
//   return billProc;
// };

// // total
// const total = (billProc, bill1, bill2, bill3) => {
//   //(4) создаю функцию которая прибавляет процент к суммы используя шункцию из шага (3)
//   const totalBill1 = bill1 + billProc;
//   const totalBill2 = bill2 + billProc;
//   const totalBill3 = bill3 + billProc;

//   return [totalBill1, totalBill2, totalBill3]; // вывожу как массив данных
// };

// const [bill1, bill2, bill3] = bill(); // (2,1) записываю выведенный массив из шага (2) и записываю их в переменную
// console.log(bill());

// // Сдесь вызаваем фенкцию Tips для каждого элемента из массива с bill
// const billTipsProc1 = tips(bill1); // Другими словами записываю результат функции bills + tips =
// const billTipsProc2 = tips(bill2);
// const billTipsProc3 = tips(bill3);

// // Плюсую всю сумму вместе дял получения конечной суммы
// const totalBill1 = billTipsProc1 + bill1;
// const totalBill2 = billTipsProc2 + bill2;
// const totalBill3 = billTipsProc3 + bill3;

// console.log(
//   `For youre firs bill ${bill1} 🧾 tips is ${billTipsProc1} 💸 : in total ${totalBill1}`
// );
// console.log(
//   `For youre firs bill ${bill2} 🧾 tips is ${billTipsProc2} 💸 : in total ${totalBill2}`
// );
// console.log(
//   `For youre firs bill ${bill3} 🧾 tips is ${billTipsProc3} 💸 : in total ${totalBill3}`
// );

//
//
//Вот еще вариант как можно было решить и хороши пример типов логики
//
// Вот так можно решить тоже самое задаие более локанично и просто
//
// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(
//   `For youre firs bill ${bills[0]} 🧾 tips is ${tips[0]} 💸 : in total ${total[0]}`
// );
// console.log(
//   `For youre firs bill ${bills[1]} 🧾 tips is ${tips[1]} 💸 : in total ${total[1]}`
// );
// console.log(
//   `For youre firs bill ${bills[2]} 🧾 tips is ${tips[2]} 💸 : in total ${total[2]}`
// );

// /////////////////////////////////
//
// продтлжение урока с Array
//
/////////////////////////////////////

//Это еще один способ создавать массивы(Но здесь нет способа огратиться к конкретной ячейки)
// const arrayEli = [
//   "Dj",
//   "Handsome",
//   "Funny",
//   "Super-Hot",
//   2023 - 2001,
// frends[(Dawid, Pawel, Piotr, Tomek)],
// ];

//Чтоб иметь способ обратитсья к определенной ячейки мы можем ее назвать (name: 'контент') наприме:
// в место [.. , ..] Используем { name: 'контент' , ...}
// Таким образом каждая ячейка имеет свое имя

//
// //////////////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////
//
//
//
//
//
// /////////////////////////////
//                            //
// OBJECTS (Literal Sentax)   //
//                            //
// /////////////////////////////
//
//
// //////////////////////////////////////////////////////////////////////////////////
//
// Это самый легкий способ создать обьект в JS и называеться он Object Literal Sentax
//
// //////////////////////////////////////////////////////////////////////////////////
//
// Разница между ARRAY и OBJECTS такая что последовательность переменных не имеит значения
//
// ARRAY - для структуривованной DATA
// OBJECTS - это тоже структура данных но каждые данные име.т свое имя + в обьеутах можно хранить expretion (функции, value, arrow, object, boolean)
//
//
// const eliArray2 = {
//   firstName: "Eli",
//   lastName: "Zakrewski",
//   pogoniala: "EZ",
//   birthYear: 2023 - 2001,
//   frends: ["Dawid", "Pawel", "Piotr", "Tomek"],
// };

//
// Как доставать или изменять информацию из обьекта?
//

// console.log(eliArray2);

// // Чтоб достать определенный обьект пишем через точку имя обьекта

// console.log(eliArray2.firstName);

// // Так же можно использовать [], что дает возможность использовать Exspretion -
// console.log(eliArray2[`lastName`]);

// // или когда не знаем точного имени значения используя KeyName
// const nameKey = "Name";
// console.log(eliArray2["last" + nameKey]);

// Подводя итог . мы используем когда имена просты и не содержат специальных знаков : [] - мы используем когда мы не знаем точного имени например при работе с даннымы с сервера или пользователького ввода
// Также [] позволяет данамически использовать данные и взаимоействовать с ними
//
// /////////////////////////////////////////////////////

//
//
//
//
// ////////////// Пример когда можно использовать []
//
//
// в этом примере мы создали переменную с поп-апом которая позволяет вытянуть данные из массива и показать их в консоли
// Благодоря [] мы можем взаимодействовать с данными
//
// const knowAboutEli = prompt`What do u like to know about Eli`;

// точка позволяет точечно достовать данные в то время когда [] позволяют вписывать выражения и манипулировать ими как будет удобнее

// просто балавство
// if (!eliArray2[knowAboutEli]) {
//   console.log(`We dont know this`);
// } else {
//   console.log(eliArray2[knowAboutEli]);
// }

////////////////////////////////////////////////
//
//Как добовлять или уберать данные из обьекта
//
////////////////////////////////////////////////

// // Через .
// eliArray2.location = "Ireland";

// // Через []
// eliArray2["Instagram"] = "@loverfll";

// console.log(eliArray2);

// /////////////////////////////////// удаление
//
// delete eliArray2['location']
//

//delete object.property
// delete object['property']
// delete object[index]
// delete property // удаляет свойства глобального объекта, или,
// используя инструкцию with, свойства объекта, на который ссылается
//
//
// // mini-challeng

// console.log(
//   `${eliArray2.firstName} has ${eliArray2.frends.length} and his best frend is ${eliArray2.frends[1]}`
// );

// Done , а я блять молодецц

//
//
//
//
//
// /////////////////////////////
//                            //
// OBJECTS (Methods)          //
//                            //
// /////////////////////////////
//
//
// //////////////////////////////////////////////////////////////////////////////////
// 'Функция это другой вид (Даты) информации' data -> FUNTION -> VALUE
//
//
//
// //////////////////////////////////////////////////////////////////////////////////

// в одном обьекте мы можем поместить все Data Type
//
// const eliArray2 = {
//   firstName: "Eli", //string
//   lastName: "Zakrewski",
//   pogoniala: "EZ",
//   birthYear: 2001, //numer
//   frends: ["Dawid", "Pawel", "Piotr", "Tomek"], //array
//   hasDriverLiciens: false, //boolean

// Так же в обьектах можно указывать (METHODS) - функция внписанная
// calcAge: function () {
//   //ДЛЯ СЕБЯ, В скобках указана (переменная) функции
//   return 2023 - birthYear;
// },

//(this.NameOfVariable) дает функции доступ до переменных находящихся в обьекте
// calcAge: function () {
//   //ДЛЯ СЕБЯ, В скобках указана (переменная) функции
//   return 2023 - this.birthYear;
// },

//   calcAge: function () {
//     // так же можно записать (this.NameOfNewVariable = ...(модно написать (VALUE ,Function, Date) что позволит сохранить результат полученный в функции
//     // чтоб записать результат в сам обьект полученный в медоте мы можем применить this.имяПолученногоРезультата
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummury: function () {
//     return `${this.firstName} aka ${
//       this.pogoniala
//     } is ${this.calcAge()} - years old ${this.status}, has ${
//       this.frends.length
//     } frends , ${this.frends[0]} `;
//   },
// };

// В обьектах не работают Function Declaretion только Function Expretion
//
//
//
// /////////// ----this.age (была создана в функции как VALUE а затем выведина)
//
//
// вызываем функцию находяшиюся в обьекте
// console.log(eliArray2.calcAge());
//
// мы модем так же использовать DOT
//
// console.log(eliArray2.age);

// Или используя []
// Выжно что мы помещаем в нутр [имя функции] , так как функция являеться свойство(property) обьекта
// console.log(eliArray2["calcAge"](2001));

// eliArray2[`status`] = `Trilloioner , Grammy Award Winner`;
//
// mini-challeng
//

// console.log(eliArray2.getSummury());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
//////////////////////////////////////////    Challenge (Object BMI)    ///////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.myBMI = this.mass / (this.height * this.height);
//     return this.myBMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.myBMI = this.mass / (this.height * this.height);
//     return this.myBMI;
//   },
// };

// const hierBMI =
//   mark.myBMI > john.myBMI
//     ? console.log(
//         `${mark.fullName} BMI ${mark.calcBMI()} is higher than ${
//           john.fullName
//         } ${john.calcBMI()}!`
//       )
//     : `${john.fullName} BMI ${john.calcBMI()} is higher than ${
//         mark.fullName
//       } ${mark.calcBMI()}!`;

// console.log(hierBMI);
// console.log(john.myBMI);

//
//
//
//
//
// /////////////////////////////
//                            //
// LOOP                       //
//                            //
// /////////////////////////////
//
//
// //////////////////////////////////////////////////////////////////////////////////
//Loop - (циклы) позволяют выполнять прописаный в них код заданное количество раз
//
//Есть насколько видов циклов / for / for..of / for..in / for..await..f / while / do-while
//
//
// //////////////////////////////////////////////////////////////////////////////////

// for
//
//
//Цикл FOR

// Цикл будет повторяться пока  ../эта часть будет True (rep <= 10) /..
// for (rep = 1; rep <= 100; rep++) {
//   console.log(`Ja ebu sobak ${rep}`);
// }

// Потом самостоятельно изучить остальные виды лупов LOOP
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////Лекция
// const eliArray2 = [
//   "Eli", //string
//   "Zakrewski",
//   "EZ",
//   2001, //numer
//   ["Dawid", "Pawel", "Piotr", "Tomek"], //array
//   true,
//   "Dwa bomza",
// ];

// const typesEli = []; //Создаем пустой массив

// for (i = 0; i < eliArray2.length; i++) {
//   console.log(eliArray2[i]);

//   // Перекидываем данные о типах eliArra2 в пустой массив
//   // typesEli[i] = typeof eliArray2[i];

//   // Yо лучне использовать Push()
//   typesEli.push(typeof eliArray2[i]);
// }

// console.log(typesEli);

// const years = [1995, 1200, 400, 1800, 1922, 2005];
// const ages = [];

// for (i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }

// console.log(ages);

// ///////////////////////
// //
// // В LOOP есть две основные переменные (continue / break)
// //
// ////////////////////////
// //
// // Например если нам нужно получить из ARRAY конкретный тип данных (например "string") то здесь идеально подойдет - continue
// //
// // CONTINUE
// for (i = 0; i < eliArray2.length; i++) {
//   if (typeof eliArray2[i] !== "string") continue; // продолжает процесс если, условие будет FALSE /тогда он просто не возьмет этот элемент
//   console.log(eliArray2[i]);
// }
// // И в результате мы получили все элементы из масива которые являються 'string'(так же можно делать с любого вида переменными)

// //
// //
// // BREAK
// for (i = 0; i < eliArray2.length; i++) {
//   if (typeof eliArray2[i] !== "string") break; // останавливает процесс если, условие будет FALSE / элемент не будет того типа который мы задали
//   console.log(eliArray2[i]);
// }

///////////////////////////////////////////////////
//
//LOOP BACKWARD
//
//LOOP IN LOOP
//
//
// const eliArray2 = [
//   "Eli", //string
//   "Zakrewski",
//   "EZ",
//   2001, //numer
//   ["Dawid", "Pawel", "Piotr", "Tomek"], //array
//   true,
//   "Dwa bomza",
// ];

//
//LOOP BACKWARD
//
// по сути мы задаем чтобы LOOP for двигался от последнего элемента до 0 (и в резултате получаем весь массив в обратном порядке)
//
// for (i = eliArray2.length - 1; i > 0; i--) {
//   console.log(i, eliArray2[i]);
// }

//
//LOOPS IN LOOPS
//
//
//
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------Start exercise ${exercise}`);
//   // мы создали первый луп(Сколько упражненией)
//   // Тепер нужно повторить упражнение по 5 раз каждое
//   //

//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Push-up ${rep}`);
//   }
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Dupa ${rep}`);
//   }
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Cycki ${rep}`);
//   }
// }

// то есть логика такая , он идет с верхи в них попадая в LOOP он прокручивает ее пока не закончит и затем переходит дальше

//
///////////////////////////////////////////////////
//
//WHILE
//
//в чем разница между LOOP и WHILE LOOP
//

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Vania sosi BibU lox ${rep}`);
//   rep++;
// }

// let num = Math.trunc(Math.random() * 6) + 1;

// while (num !== 6) {
//   console.log(`You roll ${num}`);
//   num = Math.trunc(Math.random() * 6) + 1;
//   if (num == 6) console.log(`You Win, LOOP is over`);
// }

//
//
//
//
//
//
//
//
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
//////////////////////////////////////////    Calculator Tips   #last   ///////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Массивы с данными
//

// ////////////////// ////////////////// ////////////////// ////////////////
//
//  reduce(accumulato(аккомулирует сумму), currentValue(позиция в массиве))
//
// // ////////////////// ////////////////// ////////////////// ////////////////
//
//

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];
// // считаем средий BIILS
// const calcAverageBills = bills.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// const calcAverageTips = tips.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// const calcAverageTotal = total.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// //Выводим получившиеся на экран
// //
// console.log(bills);
// console.log(tips);
// console.log(total);

// console.log(
//   `${
//     calcAverageBills / bills.length
//   } - this is how much in average you spend on Bill`
// );
// console.log(`${calcAverageTips / tips.length} - this is youre avrage Tips `);
// console.log(
//   `${
//     calcAverageTotal / total.length
//   } - and this is average spend on restaurant `
// );

// // ////////////////// ////////////////// ////////////////// ////////////////// ////////////////// ////////////////
// // Новое !!!
// // .map(())
// // .reduce (accumulator , currentValue)
// //
// //
// // Доучить завтра LOOP и виды LOOP
// // // ////////////////// ////////////////// ////////////////// ////////////////// ////////////////// ////////////////

//
//
//
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
//////////////////////////////////////////    Повторение мать учения    ///////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
//////////////////////////////////////////    Повторение мать учения    ///////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
//////////////////////////////////////////    Повторение мать учения    ///////////////////////////////////////////
//////////////////////////////////////////                              ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////
//
// DOT / Braket Notation
//
// //////////////

// const eliArray2 = {
//   firstName: "Eli", //string
//   lastName: "Zakrewski",
//   pogoniala: "EZ",
//   birthYear: 2001, //numer
//   frends: ["Dawid", "Pawel", "Piotr", "Tomek"], //array
// };

// console.log(eliArray2.firstName); // Точка позволяет просто достать обьект обрпзаясь к нему по имени

// console.log(eliArray2[`lastName`]); //[] позволяет не только достать обект но и использовать другие манипуляции с ним как Function

// // hпимер того как можно использовать функции в [] с обьектами
// const namemKey = `Name`;
// console.log(eliArray2[`first` + namemKey], eliArray2[`last` + namemKey]); //например такие

// // Добавлять и уберать можно с помощю этих двух функций и разница такаяже как и в предыдущим примере
// eliArray2.location = `Ireland`;
// eliArray2[`huj`] = 17.5;

// // const insterstedIn = prompt(`What do u like to know about Eli`);

// // if (eliArray2[insterstedIn]) {
// //   console.log(eliArray2[insterstedIn]);
// // } else {
// //   console.log(`We dont know this`);
// // }

// //
// console.log(
//   `${eliArray2.firstName} has a ${eliArray2.frends.length} and his best frend is ${eliArray2.frends[0]}`
// );

// ///////////////////////////
//
// Object METHOD
//
// //////////////////////////

// const eliArray2 = {
//   firstName: "Eli", //string
//   lastName: "Zakrewski",
//   pogoniala: "EZ",
//   birthYear: 2001, //numer
//   frends: ["Dawid", "Pawel", "Piotr", "Tomek"], //array
//   hasDriverLiciens: true, //boolean

//   calcAge: function () {
//     this.age = 2023 - this.birthYear;
//     return this.age;
//     // return 2023 - this.birthYear;// this.
//   },

//   summury: function () {
//     return console.log(
//       `${this.firstName} ${this.lastName} has ${this.age}, has ${
//         this.hasDriverLiciens ? "a" : "no"
//       } drivers licencs`
//     );
//   },
// };

// console.log(eliArray2.calcAge()); // перед тем как проводить дальше манипуляции с этой функциие надо сделать Retrit

// console.log(eliArray2.age);

// console.log(eliArray2.summury());

// ///////////////////// challenge
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function (mass, height) {
//     this.myBMI = this.mass / this.height ** 2;
//     return this.myBMI;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function (mass, height) {
//     this.myBMI = this.mass / this.height ** 2;
//     return this.myBMI;
//   },
// };

// const markBMI = mark[`calcBMI`]().toFixed(1);
// const johnBMI = john[`calcBMI`]().toFixed(1);

// if (mark.myBMI > john.myBMI) {
//   console.log(
//     `${mark["fullName"]}'s his BMI is ${markBMI} is higher than ${john["fullName"]}'s ${johnBMI}`
//   );
// } else {
//   `${john["fullName"]}'s ${johnBMI} is higher than ${mark["fullName"]}'s his BMI is ${markBMI}`;
// }

// ///////////LOOP в основном используеться для автоматизации проэктов

// легче запомнить это в такой способ, компьютор читает код с верху в низ с лева на право и при том когда он поподает на уикль он прокручивает его и пока услове 2 не будет false ...;(true);...
//
// -------------------------------------------условие булет проверяться каждый раз в начале цикла
// структура (переменная = 1 ; true/false <-- LOOP будет повторяться до тех пор пока условие не будет FALSE; i++ (каждый цикл +1 ))
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`rep ${rep}`);
// }
// после этого цикл выводим в консоль 10 раз строку
//

// const eliArray2 = [
//   "Eli", //string
//   "Zakrewski",
//   "EZ",
//   2001, //numer
//   ["Dawid", "Pawel", "Piotr", "Tomek"], //array
//   true, //boolean
// ];

// const type = [];

//Для работы с array в loop принято давать переменную i
// предположим что надо вывести по очередно данный с масива в консоль
// for (let i = 0; i < eliArray2.length; i++) {
//   console.log(eliArray2[i]);

//   type[i] = typeof eliArray2[i];
// }

// console.log(type);

// const birdthYears = [2001, 1991, 2004, 2012, 2011];
// const ages = [];

// for (let i = 0; i < birdthYears.length; i++) {
//   ages.push(2023 - birdthYears[i]);
// }

// console.log(birdthYears);
// console.log(ages);
// просто практиковался использовать map / forEACH
//
//

// const age = birdthYears.map(function (birdthYears) {
//   return 2023 - birdthYears;
// });

// console.log(birdthYears);
// console.log(age);

// ///////////////////////////////////////////////// ///////////////////////////////////////////////
// ///////////////////////////////////////////////// ///////////////////////////////////////////////
// ///////////////////////////////////////////////// ///////////////////////////////////////////////
//
// для loop есть две переменные которые могут повлиять на результат это
//
// continue
// просто продолжает минуя определенную переменную
//
//
// brake
//Оатанавливает весь Loop когда будет достигнута определеннай переменная
//
//

// const eliArray2 = [
//   "Eli", //string
//   "Zakrewski",
//   true, //boolean
//   "EZ",
//   2001, //numer
//   ["Dawid", "Pawel", "Piotr", "Tomek"], //array
//   "Dupa",
//   "Cycki",
// ];

// console.log(eliArray2);

// for (let i = 0; i < eliArray2.length; i++) {
//   if (typeof eliArray2[i] !== "string") continue;
//   console.log(eliArray2[i]);
// }

// for (let i = 0; i < eliArray2.length; i++) {
//   if (typeof eliArray2[i] === "boolean") break;
//   console.log(eliArray2[i]);
// }

// манипуляции с масивом
const eliArray2 = [
  "Eli", //string
  "Zakrewski",
  true, //boolean
  "EZ",
  2001, //numer
  ["Dawid", "Pawel", "Piotr", "Tomek"], //array
  "Dupa",
  "Cycki",
];

for (let i = eliArray2.length - 1; i >= 0; i--) {
  console.log(eliArray2[i]);
}
