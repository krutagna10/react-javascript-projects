import data from "./data.js";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductTable from "./components/ProductTable/ProductTable";
import { useState } from "react";

const Store = () => {
  const [stockedOnly, setStockedOnly] = useState(false);
  const [vegetablesOnly, setVegetablesOnly] = useState(false);
  const [fruitsOnly, setFruitsOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleStockedOnlyChange = (value) => {
    setStockedOnly(value);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleVegetablesOnlyChange = (value) => {
    setVegetablesOnly(value);
  };

  const handleFruitsOnlyChange = (value) => {
    setFruitsOnly(value);
  };

  return (
    <div className="flow">
      <SearchBar
        onSearchChange={handleSearchChange}
        onStockedOnlyChange={handleStockedOnlyChange}
        onVegetablesOnlyChange={handleVegetablesOnlyChange}
        onFruitsOnlyChange={handleFruitsOnlyChange}
      />
      <ProductTable
        products={data}
        searchTerm={searchTerm}
        stockedOnly={stockedOnly}
        vegetablesOnly={vegetablesOnly}
        fruitsOnly={fruitsOnly}
      />
    </div>
  );
};

export default Store;
