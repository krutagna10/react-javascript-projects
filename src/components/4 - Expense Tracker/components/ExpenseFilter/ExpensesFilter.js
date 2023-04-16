import ExpensesContext from "../../context/ExpensesContext";
import { useContext } from "react";

const arr = ["amount", "date"];

function ExpensesFilter({ onSearchTermChange, onSortByChange }) {
  const { onResetExpenses } = useContext(ExpensesContext);

  function handleSearchTermChange(event) {
    onSearchTermChange(event.target.value.toLowerCase());
  }

  function handleSortByChange(event) {
    onSortByChange(event.target.value);
  }

  return (
    <div className="flex flex--justify-center flex--align-center flex--gap-200">
      <input
        type="text"
        placeholder="Search Expense..."
        onChange={handleSearchTermChange}
      />
      <div className="flex flex--align-center">
        <h4>Sort By =></h4>
        {arr.map((item) => (
          <label>
            {item.toUpperCase()}:{" "}
            <input
              type="radio"
              name="form-radio"
              onChange={handleSortByChange}
              value={item}
            />
          </label>
        ))}
      </div>
      <button onClick={onResetExpenses}>Reset Expenses</button>
    </div>
  );
}

export default ExpensesFilter;
