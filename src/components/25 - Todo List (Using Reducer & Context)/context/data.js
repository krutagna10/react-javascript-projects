const INITIAL_TODOS = [
  { id: crypto.randomUUID(), title: "Go to Grocery Store", isCompleted: true },
  {
    id: crypto.randomUUID(),
    title: "Study useContext hook in React",
    isCompleted: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Study for university examinations",
    isCompleted: false,
  },
];

export default INITIAL_TODOS;