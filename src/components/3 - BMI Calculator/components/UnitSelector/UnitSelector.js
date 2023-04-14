import UnitContext from "../../context/UnitContext";
import { useContext } from "react";

function UnitSelector() {
  const { unit, onUnitChange } = useContext(UnitContext);

  function handleUnitChange(event) {
    onUnitChange(event.target.value);
  }

  return (
    <div className="flex flex--align-center" style={{ whiteSpace: "nowrap" }}>
      <h3 style={{ margin: "0" }}>Unit System : </h3>
      <label>
        Metric
        <input
          type="radio"
          name="form-radio"
          onChange={handleUnitChange}
          checked={unit === "metric"}
          value="metric"
        />
      </label>
      <label>
        Imperial
        <input
          type="radio"
          name="form-radio"
          onChange={handleUnitChange}
          value="imperial"
        />
      </label>
    </div>
  );
}

export default UnitSelector;
