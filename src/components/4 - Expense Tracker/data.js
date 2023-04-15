const INITIAL_EXPENSES = [
  {
    id: crypto.randomUUID(),
    title: "Food",
    amount: 1000,
    date: new Date(2023, 0, 31),
  },
  {
    id: crypto.randomUUID(),
    title: "Movie Tickets",
    amount: 120,
    date: new Date(2023, 1, 28),
  },
  {
    id: crypto.randomUUID(),
    title: "New Laptop",
    amount: 2500,
    date: new Date(2023, 2, 31),
  },
  {
    id: crypto.randomUUID(),
    title: "New Phone",
    amount: 1200,
    date: new Date(2023, 3, 30),
  },
  {
    id: crypto.randomUUID(),
    title: "Clothes",
    amount: 3000,
    date: new Date(2023, 4, 31),
  },
];

export default INITIAL_EXPENSES;
