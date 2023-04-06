import { useState } from "react";

function BMIForm({ onFindBMI }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onFindBMI(Number(weight), Number(height));

    setWeight("");
    setHeight("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="number"
        onChange={handleWeightChange}
        value={weight}
        placeholder="Enter your weight"
        step="any"
        required
      />
      <input
        type="number"
        onChange={handleHeightChange}
        value={height}
        placeholder="Enter your height metres"
        step="any"
        required
      />
      <button>Find BMI</button>
    </form>
  );
}

export default BMIForm;
