import { useState, useEffect } from "react";
import Search from "./Search";
import Country from "../Day 15 - Country Search/Country";

const Geocoding = () => {
  const [country, setCountry] = useState({});

  const getPosition = function () {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  getPosition().then((result) => console.log(result));

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
      .then((data) => {
        const countryName = data.countryName.toLowerCase();

        return fetch(`https://restcountries.com/v3.1/name/${countryName}`);
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Country not found");
      })
      .then((data) => setCountry(data[0]))
      .catch((error) => alert(`${error.name}: ${error.message}`))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData(20.5937, 78.9629);
  }, []);

  const handleSearchCountry = ({
    latitude: nextLatitude,
    longitude: nextLongitude,
  }) => {
    fetchData(nextLatitude, nextLongitude);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Geocoding App</h1>
      <Search onSearchCountry={handleSearchCountry} />
      <Country country={country} />
    </div>
  );
};

export default Geocoding;
