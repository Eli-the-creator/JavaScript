'use strict';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendLimits = {
  jonas: 1500,
  matilda: 100,
};

const checkUser = (limits, user) => limits[user] ?? 0;

const addExpense = (state, limits, value, description, user = 'jonas') => {
  const cleanUser = user.toLowerCase();
  return value <= checkUser(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget = addExpense(budget, spendLimits, 104444, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget,
  spendLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const newBudget3 = addExpense(newBudget2, spendLimits, 200, 'Stuff', 'Jay');

console.log(newBudget3);

const checkExpenses = (state, limits) =>
  state.map(e =>
    e.value < -checkUser(limits, e.user) ? { ...e, flag: 'limit' } : e
  );

const finalBudget = checkExpenses(newBudget3, spendLimits);
console.log(finalBudget);

const logBigExpenses = bigLimit => {
  const bigExpenseDescriptions = budget
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  console.log(bigExpenseDescriptions);
};

logBigExpenses(400);
