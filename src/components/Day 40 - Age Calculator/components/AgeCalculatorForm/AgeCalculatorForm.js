import { useState } from "react";

function AgeCalculatorForm() {
  const [values, setValues] = useState({
    date: "",
    month: "",
    year: "",
  });

  const currentDate = new Date();
  console.log(currentDate);

  function handleDateChange(event) {
    setValues((prevValues) => {
      return { ...prevValues, date: event.target.value };
    });
  }

  function handleMonthChange(event) {
    setValues((prevValues) => {
      return { ...prevValues, month: event.target.value };
    });
  }

  function handleYearChange(event) {
    setValues((prevValues) => {
      return { ...prevValues, year: event.target.value };
    });
  }

  return (
    <form className="form">
      <input
        type="number"
        min="1"
        max="31"
        placeholder="DD"
        onChange={handleDateChange}
      />
      <input
        type="number"
        min="1"
        max="12"
        placeholder="YY"
        onChange={handleMonthChange}
      />
      <input type="number" placeholder="YYYY" onChange={handleYearChange} />
      <button>Calculate Age</button>
    </form>
  );
}

export default AgeCalculatorForm;
