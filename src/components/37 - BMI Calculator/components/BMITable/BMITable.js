function BMITable({ weight, height, bmi }) {
  return (
    <table>
      <thead>
        <th>Weight (in kg)</th>
        <th>Height (in metres)</th>
        <th>BMI</th>
      </thead>
      <tbody>
        <tr>
          <td>{weight} kg</td>
          <td>{height} m</td>
          <td>{bmi}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default BMITable;
