// Exporting module
console.log('expo');

const shippingCoast = 10;
const cart = [];

//
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// import multipl thinks on the time
//
const totalPrice = 1234;
const totalQuantity = 2;

export { cart, totalPrice, totalQuantity as tq };

//
// Dafault export (exporting only value)
export default function (a, b) {
  return console.log(a + (b + 1) / 2);
}
