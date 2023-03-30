import { useState } from "react";

const AddItem = ({ onAddItem }) => {
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
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        type="text"
        style={{ width: "100%" }}
        value={title}
        onChange={handleTitleChange}
        placeholder="Enter Title"
      />
      <button>Add Item</button>
    </form>
  );
};

export default AddItem;
