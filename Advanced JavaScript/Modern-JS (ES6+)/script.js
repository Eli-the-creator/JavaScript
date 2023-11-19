// // Импорт live-conect to export
// //
// // Importing module (all mosule are execute in strict mode by default)
// //

// // For 'Name' import
import { cart, addToCart, totalPrice as price, tq } from './shoppingCart.js';
//
//
addToCart(5, 'pizza');
console.log(price);
console.log(tq);

// // //////////////////////////////////////////////////////////////////////////////
// //
// // return Object (containe all)
// // Module {Symbol(Symbol.toStringTag): 'Module'}

// // import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart(3, 'Pizza');

// console.log('impo');

// // можно этортировать так но лучше не делать так
// // import dupa, { addToCart, tq, totalPrice } from './shoppingCart.js';

// import dupa from './shoppingCart.js';
// dupa(9, 5);

// //
// //
// //
// const getLastPost = async function () {
//   const rep = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await rep.json();
//   //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = await getLastPost();

// console.log(lastPost);

// //
// //
// //
// //
// //
// // CommonJS

// //
// //
// //
// // Lodash-es (npm init (install))

////////////////////////////////////////////////////////////////////////////////////
//
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// Parcel позволяет сразу импортировать библиотеки просто указывая их импрот
//
import cloneDeep from 'lodash-es';
const _ = require('lodash');

//
//
import { latLng } from 'leaflet';
////////////////////////////////////////////////////////////////////////////////////

//
//
const state = {
  cat: [
    { product: 'bread', quantyti: 5 },
    { product: 'bread', quantyti: 5 },
  ],
  user: { loggeIn: true },
};
console.log(state);

//
// const stateClone = Object.assign(state);
const cloneState = _.cloneDeep(state);

//
// stateClone.user.loggeIn = false;
// console.log(stateClone);

//
cloneState.user.loggeIn = false;
console.log(cloneState);

///////////////////////////////////////////////////// Hot module replacement
if (module.hot) {
  module.hot.accept();
}
/////////////////////////////////////////////////////

console.log(cart);

//
/////////////////////////////////////// Babel config
//
class Persone {
  #greeting = 'hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} ${this.name}`);
  }
}

const eli = new Persone('Eli');

console.log(cart.find(el => (el.quantyti = 5)));

Promise.resolve('TEST').then(data => console.log(data));

// Poifiling method(ES06)
import 'core-js/stable';
// import 'core-js/stable/array/find.js';
// import 'core-js/stable/promise';

// Polifiling asynch function()
import 'regenerator-runtime/runtime.js';
