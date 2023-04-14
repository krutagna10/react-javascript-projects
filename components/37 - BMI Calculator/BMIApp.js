import BMIForm from "./components/BMIForm/BMIForm";
import BMITable from "./components/BMITable/BMITable";
import { useState, useEffect } from "react";

function BMIApp() {
  const [metricValues, setMetricValues] = useState({
    weight: 0,
    height: 0,
    bmi: 0,
  });

  const [imperialValues, setImperialValues] = useState({
    weight: 0,
    height: 0,
    bmi: 0,
  });

  function handleFindBMI(weight, height) {
    const currentBMI = Math.floor(weight / (height * height));
    setMetricValues((prevValues) => {
      return {
        ...prevValues,
        weight: weight,
        height: height,
        bmi: currentBMI,
      };
    });
  }

  useEffect(() => {
    handleFindBMI(56.5, 1.71);
  }, []);

  return (
    <div>
      <h1>BMI App</h1>
      <BMIForm onFindBMI={handleFindBMI} />
      <BMITable metricValues={metricValues} imperialValues={imperialValues} />
    </div>
  );
}

export default BMIApp;
