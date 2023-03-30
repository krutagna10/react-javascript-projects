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

    case "delete-item": {
      const nextItems = items.filter((item) => {
        return action.deleteId !== item.id;
      });
      return nextItems;
    }

    case "increment-quantity": {
      const nextItems = items.map((item) => {
        return action.incrementId === item.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      return nextItems;
    }

    case "decrement-quantity": {
      const nextItems = items.map((item) => {
        return action.decrementId === item.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      return nextItems;
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

  function handleDeleteItem(deleteId) {
    dispatch({ type: "delete-item", deleteId: deleteId });
  }

  function handleQuantityIncrement(incrementId) {
    dispatch({ type: "increment-quantity", incrementId: incrementId });
  }

  function handleQuantityDecrement(decrementId) {
    dispatch({ type: "decrement-quantity", decrementId: decrementId });
  }

  return (
    <div>
      <h1>Shopping App</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemsList
        items={items}
        onDeleteItem={handleDeleteItem}
        onQuantityIncrement={handleQuantityIncrement}
        onQuantityDecrement={handleQuantityDecrement}
      />
    </div>
  );
};

export default ShoppingApp;
