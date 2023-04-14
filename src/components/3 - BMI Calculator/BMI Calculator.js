import BMIForm from "./components/BMIForm/BMIForm";
import BMITable from "./components/BMITable/BMITable";
import { useState } from "react";

function BMICalculator() {
  const [values, setValues] = useState({
    weight: 0,
    height: 0,
    bmi: 0,
  });

  function calculateBMI(weight, height) {
    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);
    setValues({ weight: weight, height: height, bmi: bmi });
  }

  return (
    <div>
      <h1 className="text--center">BMI Calculator</h1>
      <BMIForm calculateBMI={calculateBMI} />
      <BMITable {...values} />
    </div>
  );
}

export default BMICalculator;
