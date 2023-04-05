const INITIAL_EXPENSES = [
  {
    id: crypto.randomUUID(),
    title: "Food",
    amount: 50,
    date: new Date(2023, 0, 31),
  },
  {
    id: crypto.randomUUID(),
    title: "Movie",
    amount: 30,
    date: new Date(2023, 1, 28),
  },
  {
    id: crypto.randomUUID(),
    title: "Grocery",
    amount: 120,
    date: new Date(2023, 0, 1),
  },
  {
    id: crypto.randomUUID(),
    title: "Clothes",
    amount: 300,
    date: new Date(2023, 3, 21),
  },
];

export default INITIAL_EXPENSES;
