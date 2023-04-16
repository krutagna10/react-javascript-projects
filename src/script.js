const INITIAL_EXPENSES = [
  {
    title: "Food",
    amount: 1000,
    date: new Date(2023, 1, 31),
  },
  {
    title: "Movie Tickets",
    amount: 120,
    date: new Date(2023, 4, 28),
  },
  {
    title: "New Laptop",
    amount: 2500,
    date: new Date(2023, 2, 31),
  },
  {
    title: "New Phone",
    amount: 1200,
    date: new Date(2023, 8, 30),
  },
  {
    title: "Clothes",
    amount: 3000,
    date: new Date(2023, 4, 31),
  },
];

INITIAL_EXPENSES.sort((expenseA, expenseB) => {
  return expenseA.date - expenseB.date;
});

const date1 = new Date(2023, 0, 31);
const date2 = new Date(2023, 0, 30);
console.log(date1 - date2);
