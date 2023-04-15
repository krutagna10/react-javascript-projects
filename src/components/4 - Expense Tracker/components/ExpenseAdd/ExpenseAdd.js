function ExpenseAdd() {
  return (
    <form className="form">
      <input type="text" placeholder="Title" />
      <input type="amount" placeholder="Amount" />
      <input type="date" />
      <button>Add Expense</button>
    </form>
  );
}

export default ExpenseAdd;
