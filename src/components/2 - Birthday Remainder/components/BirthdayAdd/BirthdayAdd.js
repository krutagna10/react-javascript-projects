function BirthdayAdd() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" />
      <input type="number" placeholder="Age" />
      <button>Add</button>
    </form>
  );
}

export default BirthdayAdd;
