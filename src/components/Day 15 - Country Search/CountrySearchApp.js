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
        throw new Error("Country not found");
      })
      .then((data) => {
        console.log(data[0]);
        dispatch({ type: "set-country", data: data[0] });
      })
      .catch((error) => {
        alert(`${error.name}: ${error.message}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(country);

  useEffect(() => {
    getCountryData("india");
  }, []);

  const handleSearchCountry = (countryName) => {
    getCountryData(countryName);
  };

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <React.Fragment>
          <h1>Country Search App</h1>
          <Search onSearchCountry={handleSearchCountry} />
          <Country country={country} />
        </React.Fragment>
      )}
    </div>
  );
};

export default CountrySearchApp;
