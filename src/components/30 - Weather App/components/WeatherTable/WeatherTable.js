function WeatherTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Temperature</th>
          <th>Weather</th>
          <th>Wind Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.main.temp}&#8451;</td>
          <td>{data.weather[0].main}</td>
          <td>{data.wind.speed} m/s</td>
        </tr>
      </tbody>
    </table>
  );
}

export default WeatherTable;
