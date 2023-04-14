import { useState } from "react";
import UnitSelector from "../UnitSelector/UnitSelector";

function BMIForm({ calculateBMI }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("metric");

  function handleUnitChange(value) {
    setUnit(value);
  }

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
      <UnitSelector unit={unit} onUnitChange={handleUnitChange} />
      <input
        type="number"
        placeholder={unit === "metric" ? "Weight in kg" : "Weight in pounds"}
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
