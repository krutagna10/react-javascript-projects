import React, { useState } from "react";
import Menu from "../Menu/Menu";

function Categories({ items }) {
  const [breakfastOnly, setBreakfastOnly] = useState(false);
  const [shakesOnly, setShakesOnly] = useState(false);
  const [lunchOnly, setLunchOnly] = useState(false);

  let filteredItems = items;

  function handleBreakfastOnlyChange(event) {
    setBreakfastOnly(event.target.checked);
  }

  function handleShakesOnlyChange(event) {
    setShakesOnly(event.target.checked);
  }

  function handleLunchOnlyChange(event) {
    setLunchOnly(event.target.checked);
  }

  if (breakfastOnly) {
    filteredItems = filteredItems.filter(
      (item) => item.category === "breakfast"
    );
  }

  if (shakesOnly) {
    filteredItems = filteredItems.filter((item) => item.category === "shakes");
  }

  if (lunchOnly) {
    filteredItems = filteredItems.filter((item) => item.category === "lunch");
  }

  return (
    <React.Fragment>
      <div className="flex flex--center">
        <label>
          Breakfast:{" "}
          <input type="checkbox" onChange={handleBreakfastOnlyChange} />
        </label>
        <label>
          Lunch: <input type="checkbox" onChange={handleLunchOnlyChange} />
        </label>
        <label>
          Shakes: <input type="checkbox" onChange={handleShakesOnlyChange} />
        </label>
      </div>
      <Menu items={filteredItems} />
    </React.Fragment>
  );
}

export default Categories;
