import UnitContext from "../../context/UnitContext";
import UnitSelector from "../UnitSelector/UnitSelector";
import { useState, useContext } from "react";

function BMIForm({ calculateBMI }) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const { unit } = useContext(UnitContext);

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
      <UnitSelector />
      <input
        type="number"
        placeholder={
          unit === "metric" ? "Enter weight(kg)" : "Enter weight(lb)"
        }
        onChange={handleWeightChange}
        value={weight}
        required
        min="0"
      />
      {unit === "metric" ? (
        <input
          type="number"
          placeholder="Enter Height(cm)"
          onChange={handleHeightChange}
          value={height}
          required
          min="0"
        />
      ) : (
        <>
          <input type="number" placeholder="Enter feet" />
          <input type="number" placeholder="Enter inches" min="0" max="12" />
        </>
      )}

      <button>Calculate BMI</button>
    </form>
  );
}

export default BMIForm;
