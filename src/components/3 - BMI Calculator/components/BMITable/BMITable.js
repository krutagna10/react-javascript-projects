import UnitContext from "../../context/UnitContext";
import { useContext } from "react";

function BMITable({ weight, height, bmi }) {
  const { unit } = useContext(UnitContext);

  return (
    <>
      <h2 className="text--center">BMI Data</h2>
      <table>
        <thead>
          <tr>
            <th>
              {unit === "metric" ? "Weight(in kg)" : "Weight (in pounds)"}
            </th>
            <th>
              {unit === "metric"
                ? "Height(in metres)"
                : "Height (in feet and inches) "}
            </th>
            <th>Height(in cm)</th>
            <th>BMI(kg/m&sup2;)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{weight}</td>
            <td>{height}</td>
            <td>{bmi.toFixed(1)}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BMITable;
