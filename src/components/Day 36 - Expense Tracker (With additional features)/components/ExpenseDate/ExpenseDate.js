const getMonthName = {
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

function ExpenseDate({ date }) {
  let day = date.getDate();
  let month = getMonthName[date.getMonth()];
  let year = date.getFullYear();

  return (
    <>
      {month} {day}, {year}
    </>
  );
}

export default ExpenseDate;
