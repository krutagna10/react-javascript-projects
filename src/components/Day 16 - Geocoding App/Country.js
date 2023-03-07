const Country = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Country Name</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Continent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.countryName}</td>
          <td>{data.latitude}</td>
          <td>{data.longitude}</td>
          <td>{data.continent}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Country;
