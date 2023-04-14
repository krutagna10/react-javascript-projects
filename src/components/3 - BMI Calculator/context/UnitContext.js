import { createContext } from "react";

const UnitContext = createContext({
  unit: "metric",
  onUnitChange: (value) => {},
});

export default UnitContext;
