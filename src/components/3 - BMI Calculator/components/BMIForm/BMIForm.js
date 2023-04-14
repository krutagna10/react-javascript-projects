import UnitContext from "../../context/UnitContext";
import UnitSelector from "../UnitSelector/UnitSelector";
import { metricReducer, imperialReducer } from "./reducers";
import { useState, useContext, useReducer } from "react";

function BMIForm({ calculateBMIMetric, calculateBMIImperial }) {
  const [metricValues, metricDispatch] = useReducer(metricReducer, {
    weight: "",
    height: "",
  });

  const [imperialValues, imperialDispatch] = useReducer(imperialReducer, {
    weight: "",
    height: {
      feet: "",
      inches: "",
    },
  });

  const { unit } = useContext(UnitContext);

  function handleWeightChange(event) {
    unit === "metric"
      ? metricDispatch({ type: "weight-change", weight: event.target.value })
      : imperialDispatch({ type: "weight-change", weight: event.target.value });
  }

  function handleInCentimeterChange(event) {
    metricDispatch({ type: "height-change", height: event.target.value });
  }

  function handleFeetChange(event) {
    imperialDispatch({ type: "feet-change", feet: event.target.value });
  }

  function handleInchesChange(event) {
    imperialDispatch({ type: "inches-change", inches: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (unit === "metric") {
      calculateBMIMetric(
        Number(metricValues.weight),
        Number(metricValues.height)
      );
      metricDispatch({ type: "reset-values" });
      return;
    }

    //  When the unit is imperial
    calculateBMIImperial(
      Number(imperialValues.weight),
      Number(imperialValues.height.feet),
      Number(imperialValues.height.inches)
    );
    imperialDispatch({ type: "reset-values" });
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
            onChange={handleFeetChange}
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
