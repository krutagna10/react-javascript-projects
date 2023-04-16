const monthObject = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

function ExpenseDate({ expenseDate }) {
  const date = expenseDate.getDate();
  const month = monthObject[expenseDate.getMonth()];
  const year = expenseDate.getFullYear();
  const dateString = `${month} ${date}, ${year}`;

  return <>{dateString}</>;
}

export default ExpenseDate;
