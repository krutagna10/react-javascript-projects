import UnitContext from "./UnitContext";
import { useState } from "react";

function UnitProvider({ children }) {
  const [unit, setUnit] = useState("metric");

  function handleUnitChange(value) {
    setUnit(value);
  }

  const value = {
    unit: unit,
    onUnitChange: handleUnitChange,
  };

  return <UnitContext.Provider value={value}>{children}</UnitContext.Provider>;
}

export default UnitProvider;
