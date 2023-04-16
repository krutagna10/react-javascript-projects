function ExpensesFilter({
  onSearchTermChange,
  onIsSortedChange,
  onResetExpenses,
}) {
  function handleSearchTermChange(event) {
    onSearchTermChange(event.target.value.toLowerCase());
  }

  function handleIsSortedChange(event) {
    onIsSortedChange(event.target.checked);
  }

  return (
    <div className="flex flex--justify-center flex--align-center flex--gap-200">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchTermChange}
      />
      <label>
        Sort by amount:{" "}
        <input type="checkbox" onChange={handleIsSortedChange} />
      </label>
      <button onClick={onResetExpenses}>Reset Expenses</button>
    </div>
  );
}

export default ExpensesFilter;
