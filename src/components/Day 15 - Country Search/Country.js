const Country = ({ country }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Flag</th>
          <th>Capital</th>
          <th>Population</th>
          <th>Continent</th>
          <th>Time Zone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{country.name.common}</td>
          <td>
            <img
              style={{ width: "8rem", height: "5.5rem" }}
              src={country.flags.png}
              alt={country.flags.alt}
            />
          </td>
          <td>{country.capital[0]}</td>
          <td>{parseInt(country.population / 1000000)} million</td>
          <td>{country.continents[0]}</td>
          <td>{country.timezones[0]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Country;
