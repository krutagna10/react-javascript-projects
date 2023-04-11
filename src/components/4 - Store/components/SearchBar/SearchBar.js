const SearchBar = ({
  onStockedOnlyChange,
  onSearchChange,
  onVegetablesOnlyChange,
  onFruitsOnlyChange,
}) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value.toLowerCase());
  };

  const handleIsStockedChange = (event) => {
    onStockedOnlyChange(event.target.checked);
  };

  const handleVegetablesOnlyChange = (event) => {
    onVegetablesOnlyChange(event.target.checked);
  };

  const handleFruitsOnlyChange = (event) => {
    onFruitsOnlyChange(event.target.checked);
  };

  return (
    <form className="flow">
      <div className="form__input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleSearchChange}
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="form__input-wrapper">
          <label>Product in stock only</label>
          <input type="checkbox" onChange={handleIsStockedChange} />
        </div>
        <div className="form__input-wrapper">
          <label>Vegetables Only</label>
          <input type="checkbox" onChange={handleVegetablesOnlyChange} />
        </div>
        <div className="form__input-wrapper">
          <label>Fruits Only</label>
          <input type="checkbox" onChange={handleFruitsOnlyChange} />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
