function ExpensesFilter({ onSearchTermChange, onIsSortedChange }) {
  function handleSearchTermChange(event) {
    onSearchTermChange(event.target.value.toLowerCase());
  }

  function handleIsSortedChange(event) {
    onIsSortedChange(event.target.checked);
  }

  return (
    <div className="flex flex--justify-center flex--gap-200">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchTermChange}
      />
      <label>
        Sort by amount:{" "}
        <input type="checkbox" onChange={handleIsSortedChange} />
      </label>
    </div>
  );
}

export default ExpensesFilter;
