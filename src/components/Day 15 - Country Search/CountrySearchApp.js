import React, { useState, useEffect, useReducer } from "react";
import Search from "./Search";
import Country from "./Country";

const url = "https://restcountries.com/v3.1/name";

function reducer(country, action) {
  switch (action.type) {
    case "set-country": {
      return action.data;
    }
    default: {
      throw Error("Invalid action: " + action.type);
    }
  }
}

const CountrySearchApp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [country, dispatch] = useReducer(reducer, {});

  const getCountryData = (countryName) => {
    setIsLoading(true);
    fetch(`${url}/${countryName}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Data not found");
      })
      .then((data) => {
        dispatch({ type: "set-country", data: data[0] });
      })
      .catch((error) => {
        alert(`${error.name}: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCountryData("india");
  }, []);

  const handleSearchCountry = (countryName) => {
    getCountryData(countryName.toLowerCase());
  };

  // When is loading is true
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country Search App</h1>
      <Search onSearchCountry={handleSearchCountry} />
      <Country country={country} />
    </div>
  );
};

export default CountrySearchApp;
