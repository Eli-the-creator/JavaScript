// 'use strict';

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  OOP
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////
// // Object oriented programming paradise based on object concept (simply " HOW WE - Style code")

// //We use object to discribr real-word or abstract feature

// //Object containes date(property) and code(ptoperty). By using object we pack data and corresponding behavior into a block

// //in OOP, object self-contained block of code

// //Object are building block of application, and interact which one another

// //Interaction happend through a API(public interface): methods that the code outside of the object can get access and use to commuinicate whith the object

// //
// // We the exist? this paradigme was develop to organizing the code, make it more flexble and easir to maintain (and avoid "spaggeti code")

// // We have a "classes" - this like a blue-print
// // Class have a property whith asociete which him
// // And also some Method (behavior)

// //
// // How do we disagne the a class?
// // How to we modal a real-word data into a classes?
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// // 4 principles of OOP

// //Abstraction
// //Polymorpism

// //Inharitance  +++

// //Encapsulation

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //
// // Prototype(class in js )
// //
// // Object are instantiaed from a class. Which function like blue-print

// //
// // In JavaScript we dont have a class but we have a Prototype

// // Object is link to a prototype object

// ////////////////////////////////////////////////////////////////////////////////
// //
// // Prototype inheretence :
// // The prototype METHOD and Property that are accesible to the all object linked to that prototype;
// //
// //  В JS обьекты имеют свойство прототипов и могут случить в качестве шаблона для создания обьектов.
// //  Когда мы обращаемся к свойству обьекта JS ищет его в самом обьекте и  если не находит то начинает искать кго по цепочки прототипов

// // const num = [1, 2, 3];
// // num.map(v => v * 2);

// // Здесь делегация метода map происходит следующим образом:
// //  1. Метод map не находится непосредственно в массиве num, но так как массив num наследует от Array.prototype, JavaScript ищет метод map в прототипе.
// //  2. JavaScript находит метод map в прототипе Array.prototype.
// //  3. Метод map применяется ко всем элементам массива num, выполняя указанную функцию (v) => v * 2 для каждого элемента.

// //  то есть мы напрямую делегируем прототип map массиву num

// // прототип дает доступ обьектам к методам и значениям внутри себя обьектам подключенным к нему
// ////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////
// //
// //
// // 3 WAY TO IMNPLEMENT PROTOTYPE INHERITANCE

// // Construction function
// // - Technique to create object from a function
// // - This is how buil-in objects like Array , Object , Sep  are actually implemented

// // ES6 Classes
// // - Just a moder alternative to create a construction function
// // - NOT A REALL CLASSES FROM 'CLASSICAL OOP'

// //Object.create()
// // - The Most easiest and strayforward way of linkingn object a prototype object
// //
// ////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - Construction Function

// // Construction Function always start which the Capital Letter

// // We use only the function declaretion and  expretion to create construction function because we need .this
// // Reminder : (Arrow function dont have a .this keyWord)

// Persone is prototype of linkid object
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const eliOne = new Person('Eli', 2001);

// const dora = new Person('Dora', 2005);
// console.log(dora);

// console.log(eliOne instanceof Person); // true

// // Static Method
// Person.hey = function () {
//   console.log(`${this.firstName} is hottie 🥵`);
//   console.log(this);
// };

// // Object call the function
// Person.hey();
// // Что здесь происходит
// // We calling the construction function by using "new" keyWord
// // new - create {} - empty object
// //  1,2,3,4

// // //
// // // How work the NEW operator
// // // 1. New {} is created
// // // 2. Function is calling , .this = {}
// // // 3. {} - link to prototype
// // // 4. function automaticly return {}
// // // //////////////////////////////////////////////////////////////////////////////////////////////
// // // 1. Создается новый пустой объект: {}
// // // 2. Вызывается функция Person с this, который ссылается на этот новый объект.
// // // 3. Новый объект связывается с прототипом функции Person.
// // // 4. Функция Person завершается, и созданный объект возвращается как результат оператора new.

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - Prototype (Delegation)

// // // every function in JS has a property call prototype
// // console.log(Person.prototype);

// // ///////////////////////////////////////// Add METHOD IN TO A CONSTRUCTION FUNCTION
// // Person.prototype.calcAge = function () {
// //   const age = 2023 - this.birthYear;
// //   this.birthYear = age;
// // };

// // const vania = new Person('Vania', 2007, 'job: Admin');
// // vania.calcAge();
// // console.log(vania);

// // //
// // console.log(vania.__proto__ === Person.prototype); // Object prototy is equal to Construction Function Prototype
// // console.log(Person.prototype.isPrototypeOf(vania)); // .isPrototypeOf(..) - чтобы узнать что являеться прототипом этого обьекта

// // // Persone is prototype of linkid object

// // ////////////////////////////////////// Add property
// // Person.prototype.status = 'Homeless';

// // console.log(vania.status); // "status" property is not exactly on the 'vania' - object , is not the own property
// // // vania property is property what is directly declair on the object it self

// // // How to know about property where they come from

// // console.log(vania.hasOwnProperty('firstName')); // true - becose we specyfide this property directly on the object
// // console.log(vania.hasOwnProperty('status')); //false - becouse we specyfide this later

// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - Prototype and Prototype Chaine in the Array

// // console.log(vania); //prototype vanai object
// // console.log(vania.__proto__); // prototype Persone object
// // console.log(vania.__proto__.__proto__); //prototy of object (last step in the prototype chine)

// // console.dir(Person.prototype.constructor);

// // const arr = [1, 2, 3, 3, 4, 5, 5, 6]; //this is a shortCut of - new Array === []

// // console.log(arr.__proto__); //prototype of the Array constructor
// // console.log(arr.__proto__.__proto__); // Prototype of the Object

// // console.log(Array.prototype); //Array constructor

// // //
// // //
// // //
// // // ADDET OWN METHOD TO THE ARRAY.prototype
// // Array.prototype.unique = function () {
// //   return [...new Set(this)];
// // };

// // console.log(arr.unique());

// // //
// // //
// // //
// // //
// // ////////////////////////////////////////////////////////////////////////////////////////////////////// Challenge 1
// // const Car = function (name, speed) {
// //   this.name = name;
// //   this.speed = speed;
// // };

// // Car.prototype.internal = function () {
// //   return console.log(`${this.name} going ${this.speed} km/h`);
// // };

// // Car.prototype.accelFunction = function () {
// //   this.speed += 10;
// //   return console.log(`${this.name} is going ${this.speed}`);
// // };

// // Car.prototype.breakFunction = function () {
// //   this.speed -= 5;
// //   return console.log(`${this.name} is going ${this.speed}`);
// // };

// // const bmw = new Car('BMW', 150);
// // const mercedes = new Car('mercedes', 500);

// // console.log('BMW');
// // bmw.internal();
// // bmw.accelFunction();
// // bmw.breakFunction();

// // console.log('mercedes');
// // mercedes.internal();
// // mercedes.accelFunction();
// // mercedes.breakFunction();

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - ES06 CLASSES

// // Classes in JS is not the same ass classes in C++ or Java
// // It's still the same Constructor Function buy in the moder syntax what remaind a classes

// // Classes is not hoisted
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ////////////////////////////////// class Expression
// // const Persone = class {};

// ///////////////////////////////// class declaretion
// class PersoneCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // method will be add to a .prototype property of the Class

//   // Instance method (all the instaces will be addet to them)
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   greeting() {
//     console.log(`Hey my name is ${this.firstName}`);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   // get
//   get fullName() {
//     return this._fullName;
//   }

//   // Static method

//   static hey(a) {
//     console.log(`Is supa HOOT 🥵`);
//   }
// }

// const walter = new PersoneCl('Walter White', 1965);

// console.log(walter.fullName);

// const julia = new PersoneCl('Julia Zakrewkaja', 2001);
// console.log(julia);
// PersoneCl.hey(julia);

// julia.greeting();

// console.log(PersoneCl.prototype);

// //
// // 1. Classes is NOT hoisted
// // 2. Classes is first-class-citizen  (We can pass them on the function and return from the function)
// // 3. Clases are executed on the strict mode

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - setProperty, getProperty

// const eli = {
//   name: 'Eli',
//   mov: [12, 23, 566, 1000],

//   get latest() {
//     return this.mov.slice(-1).pop();
//   },

//   set latest(mov) {
//     // set need to specify atlist one parametr
//     return this.mov.push(mov);
//   },
// };

// console.log(eli.latest);

// eli.latest = 500;
// console.log(eli.mov);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - Static METHOD

// // Статические методы - это функции к которым есть дуступ из самого класса без неоходимости создания нового обьекта
// // A static method is a method that can be accessed without creating an instance of the class

// Number.parseFloat(23);

// console.log(Array.from(document.querySelectorAll('h1')));

// console.log(Array.prototype);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - Object.create(Object-Prototype)

// // In general we use this to inplement inhereted between classes

// const PersoneProto = {
//   calcAge() {
//     return console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // In this wave we create the new object and pass the (prototype object) to this new object
// const stev = Object.create(PersoneProto);
// console.log(stev.__proto__);

// const mumrok = Object.create(PersoneProto);
// mumrok.init('Mumrok', 1690);
// mumrok.calcAge();

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - challenge  2

// class Car {
//   constructor(name, speed) {
//     this.name = name;
//     this.speed = speed;
//   }

//   // Prototypr
//   maxSpeed() {
//     this.speed += 10;
//     return console.log(`${this.name} going ${this.speed} km/h`);
//   }

//   breakF() {
//     this.speed -= 5;
//     return console.log(`${this.name} going ${this.speed} km/h`);
//   }

//   // Getter - использует занчения свойств обьекта перед тем как вернуть их
//   get speedUS() {
//     this.speed / 1.6;
//   }

//   // Setter - принемает значения обрабатывает их и устанавливает в обьект
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 120);

// ford.maxSpeed();

// ford.breakF();
// ford.breakF();

// ford.speedUS = 50;
// console.log(ford);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - Inheretence between "Classes" (Constructor Function)

// ///////////////////////////////////////////////////////////////
//
// basically Inheretence this is a prototype-chaine

// And that's the whole idea of inheritance.
// Its the child classes can share behavior
// from their parent classes.

// по нашему:
// Суть наследственности классов заклучаеться чтобы создать Prototype Chaine
//
// И дать возможность child clasess истользовать методами родительского классв
/////////////////////////////////////////////////////////////////

//
// Inheretence in the Construction Function
//

// Parents Class
// const Persone = function (firsName, birthYear) {
//   this.firsName = firsName;
//   this.birthYear = birthYear;
// };

// Persone.prototype.calcAge = function () {
//   return console.log(2023 - this.birthYear);
// };

// // Child Class
// const Student = function (firstName, birthYear, course) {
//   Persone.call(this, firstName, birthYear); // 1. передаем значиние .this во второй класс
//   this.course = course;
// };

// Student.prototype = Object.create(Persone.prototype); // 2.
// Student.prototype.constructor = Student; // 2.1 - Указываем что .prototype второго класса дольжен быть обьектом с .prototype другого обьекта

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firsName} and m stuiding ${this.course}`);
// };

// const mike = new Student('Mike', 2015, 'Compiuter Science');
// console.log(mike);

// mike.introduce();

// console.log(mike instanceof Student);
// console.log(mike instanceof Persone);
// console.log(mike instanceof Object);

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__); // сдесь мы видем результат создания Prototype-Chaine
// mike.calcAge(); // Здесь мы используем функцию родительского класса в его наследственном Втором классе

// //  когда мы делаем так JS начиная с этого обьекта искать функцию .calcAge() и не находя поднимаетсья по Inheretence-Chaine ищя эту функцию

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - challenge 3

// const Car = function (name, speed) {
//   this.name = name;
//   this.speed = speed;
// };

// Car.prototype.speedMax = function () {
//   this.speed += 10;
//   console.log(`${this.name} is going ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.brake -= 5;
//   console.log(`${Name} is going ${this.brake}`);
// };

// // test
// const dodge = new Car('Dodge', 200);

// dodge.speedMax();

// // Electric Car class

// const ElectrycCar = function (name, speed, charge) {
//   Car.call(this, name, speed);
//   this.charge = charge;
// };

// ElectrycCar.prototype = Object.create(Car);
// ElectrycCar.prototype.constructor = ElectrycCar;

// ElectrycCar.prototype.chargeBattery = function (chargeTo) {
//   return (this.charge = chargeTo);
// };

// ElectrycCar.prototype.accelerator = function () {
//   this.speed += 20;
//   this.charge -= 2;

//   console.log(
//     `${this.name} goingn ${this.speed} km/h battery status ${this.charge}`
//   );
// };

// ElectrycCar.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.name} going ${this.speed}kl/h`);
// };

// const tesla = new ElectrycCar('Tesla', 250, 45);

// tesla.chargeBattery(70);

// console.log(tesla);

// tesla.accelerator();
// tesla.accelerator();
// tesla.accelerator();
// tesla.accelerator();
// tesla.accelerator();

// tesla.brake();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - Inheretence between "Classes" (ES06)

class PersoneCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greeting() {
    console.log(`Hey my name is ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  // get
  get fullName() {
    return this._fullName;
  }

  // Static method

  static hey(a) {
    console.log(`Is supa HOOT 🥵`);
  }
}

class StudentCl extends PersoneCl {
  constructor(fullName, birthYear, cours) {
    // If we dont need to any new property we don't even need to specify this super() function
    super(fullName, birthYear); // this super function need to go first
    this.cours = cours;
  }

  introduce() {
    console.log(`${this.fullName} im ${this.age} im studin ${this.cours}`);
  }
}

const wojter = new StudentCl('Wojtek Madaj', 1996, 'BiznesMan');

// console.log(wojter);

// wojter.introduce();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OOP in JS - Inheretence between "Classes" (Object.create)

const PersoneProto = {
  calcAge() {
    return console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steave = Object.create(PersoneProto); // Object 'inside' a parents class

//
//
// child class
const StudentsProto = Object.create(PersoneProto);

// Add property to child class
StudentsProto.init = function (firstName, birthYear, course) {
  PersoneProto.init.call(this, firstName, birthYear);
  this.course = course;
};

// set a method inside of the a studients class
StudentsProto.introduce = function () {
  console.log(`${this.firstName} im a ${this.course} stuident`);
};

// Create an object based on the child class prototype
const jayJ = Object.create(StudentsProto);

// Initialize properties of the child class object
jayJ.init('Jay', 2012, 'Dupa');
jayJ.introduce();
jayJ.calcAge();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - Encapsulation: Privet Class Fields and Methods

// 1. Publich (instance) fields
// 2. Privet Fields
// 3. Publich method
// 4. Priver method
// AND also the a static

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - More class example

// We use the convention to write a protect class using the _
// this shoud make auther developer know about this class (THIS IS A PROTECT CLASS: DONT TOUCH)

class Accounts {
  // 1. Public Fields (instances)
  local = navigator.language;

  // 2. Private fields
  #movements = [];
  #pin; //Some property what we nrrd to define at cinstructor but need to make privet we define outside first then redefine it inside of the constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // Protect property (Just a simple convension _ , what meen this shod not toch out side of the class)
    // this.local = navigator.language;
    // this._movements = [];
  }

  // 3. Public Method
  // Public interface of Object
  getMovments() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  whithdrow(val) {
    this.deposit(-val);
    return this;
  }

  // _ to make it protection
  // 4. Privet mathods
  #approveLoan(val) {
    return true;
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan is approuve');
      return this;
    }
  }

  static helper() {}
}

const acc1 = new Accounts('Eliasz Zakrzewski', 'Euro', 1111);

acc1.deposit(250);
acc1.whithdrow(140);

acc1.requestLoan(1500);

console.log(acc1);

// console.log(acc1.#approveLoan());
// console.log(acc1.#movements);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - Chaining the Methods

//to make chining methods work in the object we simply (return this) on the end of every function

acc1
  .deposit(1000)
  .deposit(500)
  .whithdrow(700)
  .requestLoan(5000)
  .whithdrow(3000);

console.log(acc1.getMovments());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// OOP in JS - Challenge 4

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accesselerate() {
    this.speed += 10;
    console.log(`${this.name} is going ${this.speed}`);
    return this;
  }

  breake() {
    this.speed -= 5;
    console.log(`${this.name} is going ${this.speed}`);
    return this;
  }
}

const nissanSylvia = new Car('NissanSylvia', 120);

nissanSylvia.accesselerate().accesselerate(); // test

class EVcl extends Car {
  #charge;

  constructor(name, speed, charge) {
    super(name, speed);
    this.#charge = charge;
  }

  set chargeLevel(val) {
    this.#charge = val;
  }

  chargeLevel(val) {
    this.charge = val;
    console.log(this.charge);
    return this;
  }

  speed_ev() {
    if (this.#charge > 0) {
      this.speed += 10;
      this.#charge -= 10;
      console.log(
        `${this.name} is going ${this.speed}. Battery status ${this.#charge}`
      );
      return this;
    } else {
      console.log('Charge youre vechile');
    }
  }
}

const tesla = new EVcl('Tesla', 200, 50);

console.log(tesla);

tesla.chargeLevel(70).speed_ev().speed_ev().breake().breake();
