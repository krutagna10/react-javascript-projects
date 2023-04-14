function BMITable({ weight, height, bmi }) {
  return (
    <>
      <h2 className="text--center">BMI Data</h2>
      <table>
        <thead>
          <tr>
            <th>Weight(in kg)</th>
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
