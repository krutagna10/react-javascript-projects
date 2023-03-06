import { useState } from "react";
const url = "https://restcountries.com/v3.1/name";

const CountrySearchApp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});

  const getCountryData = (country) => {
    fetch(`${url}/${country}`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Country not found");
    });
  };

  return (
    <div>
      <p>Country Search App</p>
    </div>
  );
};

export default CountrySearchApp;
