import UnitProvider from "./context/UnitProvider";
import BMIForm from "./components/BMIForm/BMIForm";
import BMITable from "./components/BMITable/BMITable";
import { useState } from "react";

function BMICalculator() {
  const [metricValues, setMetricValues] = useState({
    weight: 0,
    height: 0,
    bmi: 0,
  });

  const [imperialValues, setImperialValues] = useState({
    weight: 0,
    height: {
      feet: 0,
      inches: 0,
    },
    bmi: 0,
  });

  function calculateBMIMetric(weight, height) {
    const heightInMetres = height / 100;
    const bmi = weight / (heightInMetres * heightInMetres);
    setMetricValues({ weight: weight, height: height, bmi: bmi });
  }

  function calculateBMIImperial(weight, feet, inches) {
    const weightInKg = 0.453592 * weight;
    const heightInMetres = feet * 0.3048 + inches * 0.0254;

    const bmi = weightInKg / (heightInMetres * heightInMetres);

    setImperialValues({
      weight: weight,
      height: {
        feet: feet,
        inches: inches,
      },
      bmi: bmi,
    });
  }

  return (
    <div>
      <UnitProvider>
        <h1>BMI Calculator</h1>
        <BMIForm
          calculateBMIMetric={calculateBMIMetric}
          calculateBMIImperial={calculateBMIImperial}
        />
        <BMITable metricValues={metricValues} imperialValues={imperialValues} />
      </UnitProvider>
    </div>
  );
}

export default BMICalculator;
