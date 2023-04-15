import UnitContext from "../../context/UnitContext";
import { useContext } from "react";

function BMITable({ metricValues, imperialValues }) {
  const { unit } = useContext(UnitContext);

  let imperialHeight;
  if (unit === "imperial") {
    imperialHeight = `${imperialValues.height.feet}'${imperialValues.height.inches}"`;
  }

  return (
    <>
      <h2>BMI Data</h2>
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
            <th>BMI(kg/m&sup2;)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {unit === "metric" ? metricValues.weight : imperialValues.weight}
            </td>
            <td>{unit === "metric" ? metricValues.height : imperialHeight}</td>
            <td>
              {unit === "metric"
                ? metricValues.bmi.toFixed(1)
                : imperialValues.bmi.toFixed(1)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BMITable;
