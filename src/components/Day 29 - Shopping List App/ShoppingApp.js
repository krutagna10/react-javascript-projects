import AddItem from "./AddItem";
import ItemsList from "./ItemsList";
import { useReducer, useState } from "react";

const initialItems = [
  { id: crypto.randomUUID(), title: "Item 1", quantity: 1, isSelected: true },
  { id: crypto.randomUUID(), title: "Item 2", quantity: 3, isSelected: false },
  { id: crypto.randomUUID(), title: "Item 3", quantity: 2, isSelected: false },
];

function reducer(items, action) {
  switch (action.type) {
    case "add-item": {
      const newItem = {
        id: crypto.randomUUID(),
        title: action.title,
        quantity: 1,
        isSelected: false,
      };
      return [...items, newItem];
    }
    default: {
      throw new Error("Invalid action: " + action.type);
    }
  }
}

const ShoppingApp = () => {
  const [items, dispatch] = useReducer(reducer, initialItems);

  function handleAddItem(title) {
    dispatch({ type: "add-item", title: title });
  }

  return (
    <div>
      <h1>Shopping App</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemsList items={items} />
    </div>
  );
};

export default ShoppingApp;
