import { useState } from "react";

function BMIForm({ calculateBMI }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculateBMI(Number(weight), Number(height));
    setHeight("");
    setWeight("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex--align-center" style={{ whiteSpace: "nowrap" }}>
        <h3 style={{ margin: "0" }}>Unit System : </h3>
        <label>
          Metric <input type="radio" name="form-radio" defaultChecked />
        </label>
        <label>
          Imperial <input type="radio" name="form-radio" />
        </label>
      </div>
      <input
        type="number"
        placeholder="Enter weight in kg"
        onChange={handleWeightChange}
        value={weight}
        required
      />
      <input
        type="number"
        placeholder="Enter height in cm"
        onChange={handleHeightChange}
        value={height}
        required
      />
      <button>Calculate BMI</button>
    </form>
  );
}

export default BMIForm;
