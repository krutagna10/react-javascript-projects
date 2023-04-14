import UnitContext from "../../context/UnitContext";
import UnitSelector from "../UnitSelector/UnitSelector";
import { useState, useContext } from "react";

function BMIForm({ calculateBMIMetric, calculateBMIImperial }) {
  const [metricValues, setMetricValues] = useState({
    weight: "",
    height: "",
  });

  const [imperialValues, setImperialValues] = useState({
    weight: "",
    height: {
      feet: "",
      inches: "",
    },
  });

  const { unit } = useContext(UnitContext);

  function handleWeightChange(event) {
    if (unit === "metric") {
      setMetricValues((prevMetricValues) => {
        return { ...prevMetricValues, weight: event.target.value };
      });
      return;
    }
    console.log("Hey");
    // When unit is imperial
    setImperialValues((prevImperialValues) => {
      return { ...prevImperialValues, weight: event.target.value };
    });
  }

  function handleInCentimeterChange(event) {
    setMetricValues((prevMetricValues) => {
      return { ...prevMetricValues, height: event.target.value };
    });
  }

  function handleFootChange(event) {
    setImperialValues((prevImperialValues) => {
      return {
        ...prevImperialValues,
        height: {
          ...prevImperialValues.height,
          feet: event.target.value,
        },
      };
    });
  }

  function handleInchesChange(event) {
    setImperialValues((prevImperialValues) => {
      return {
        ...prevImperialValues,
        height: {
          ...prevImperialValues.height,
          inches: event.target.value,
        },
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (unit === "metric") {
      calculateBMIMetric(
        Number(metricValues.weight),
        Number(metricValues.height)
      );
      setMetricValues({ height: "", weight: "" });
      return;
    }

    //  When the unit is imperial
    calculateBMIImperial(
      Number(imperialValues.weight),
      Number(imperialValues.height.feet),
      Number(imperialValues.height.inches)
    );
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
        value={unit === "metric" ? metricValues.weight : imperialValues.weight}
        required
        min="0"
      />
      {unit === "metric" ? (
        <input
          type="number"
          placeholder="Enter Height(cm)"
          onChange={handleInCentimeterChange}
          value={metricValues.height}
          required
          min="0"
        />
      ) : (
        <>
          <input
            type="number"
            value={imperialValues.height.feet}
            placeholder="Enter feet"
            min="0"
            onChange={handleFootChange}
            required
          />
          <input
            type="number"
            value={imperialValues.height.inches}
            placeholder="Enter inches"
            onChange={handleInchesChange}
            min="0"
            max="12"
            required
          />
        </>
      )}

      <button>Calculate BMI</button>
    </form>
  );
}

export default BMIForm;
