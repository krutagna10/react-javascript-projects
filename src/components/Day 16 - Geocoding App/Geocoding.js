import { useState, useEffect } from "react";
import Search from "./Search";
import Country from "./Country";

const url =
  "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=37.42159&longitude=-122.0837&localityLanguage=en";

const Geocoding = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (latitude, longitude) => {
    setIsLoading(true);
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Country not found");
      })
      .then((data) => setData(data))
      .catch((error) => {
        alert(`${error.name}: ${error.message}`);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData(20.5937, 78.9629);
  }, []);

  const handleSearchCountry = ({
    latitude: nextLatitude,
    longitude: nextLongitude,
  }) => {
    console.log(nextLatitude, nextLongitude);
    fetchData(nextLatitude, nextLongitude);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Geocoding App</h1>
      <Search onSearchCountry={handleSearchCountry} />
      <Country data={data} />
    </div>
  );
};

export default Geocoding;
