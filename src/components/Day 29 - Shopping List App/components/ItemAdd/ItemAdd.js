import { useState } from "react";

const ItemAdd = ({ onAddItem }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem(title);
    setTitle("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter Title"
      />
      <button>Add Item</button>
    </form>
  );
};

export default ItemAdd;
