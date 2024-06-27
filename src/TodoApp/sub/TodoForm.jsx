import React, { useState } from "react";

const TodoForm = ({ onAddingItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItems = { description, quantity, packed: false, id: Date.now() };
    onAddingItems(newItems);
  };

  return (
    <div className="todo-form">
      <h2
        style={{
          color: "#ccc",
          textAlign: "center",
          paddingBottom: "20px",
          textTransform: "uppercase",
        }}
      >
        My Travel List App
      </h2>
      <form className="search-container" onSubmit={HandleSubmit}>
        <select
          value={quantity}
          className="items-count"
          onChange={(e) => setQuantity(+e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => {
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          className="form-input"
          placeholder="Enter the items you need for your trip..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
