const expenses = [
  {
    title: "Food",
    amount: 50,
    date: new Date(2023, 0, 31),
  },
  {
    title: "Movie",
    amount: 30,
    date: new Date(2023, 1, 28),
  },
  {
    title: "Grocery",
    amount: 120,
    date: new Date(2023, 0, 1),
  },
  {
    title: "Clothes",
    amount: 300,
    date: new Date(2023, 3, 21),
  },
];

expenses.sort((a, b) => a - b);

const filteredExpenses = expenses.sort((expenseA, expenseB) => {
  return expenseA.amount - expenseB.amount;
});

console.log(filteredExpenses);
