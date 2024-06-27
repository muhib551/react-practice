import React, { useState } from "react";
import "../Styles/todo.css";

const TodoPractice = () => {
  const [items, setItems] = useState([]);

  const HandleAddingItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const HandleTogglingItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const HandleDeletingItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <TodoPracticeForm onAddingItems={HandleAddingItems} />
      <TodoPracticeList
        items={items}
        onTogglingItems={HandleTogglingItems}
        onDeletingItems={HandleDeletingItems}
      />
    </div>
  );
};

export default TodoPractice;

const TodoPracticeForm = ({ onAddingItems }) => {
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
          className="items-count"
          value={quantity}
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
          placeholder="Enter the items you need for your trip... "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
    </div>
  );
};

const TodoPracticeList = ({ items, onTogglingItems, onDeletingItems }) => {
  return (
    <div className="todo-list">
      <h3 className="todo-list__heading">Packing List</h3>
      <ul className="todo-list__wrapper">
        {items.map((item) => (
          <TodoPracticeItems
            items={item}
            key={item.id}
            onTogglingItems={onTogglingItems}
            onDeletingItems={onDeletingItems}
          />
        ))}
      </ul>
      <TodoPracticeFooter items={items}/>
    </div>
  );
};

const TodoPracticeItems = ({ items, onTogglingItems, onDeletingItems }) => {
  const date = new Date();
  date.setDate(date.getDate());
  return (
    <li className="todo-list__items">
      <div
        className="todo-list__items-item"
        style={items.packed ? { textDecoration: "line-through" } : {}}
      >
        <input
          type="checkbox"
          value={items.packed}
          onChange={() => onTogglingItems(items.id)}
        />
        <div>
          <span>
            {items.quantity} {items.description}
          </span>{" "}
          <span style={{ fontSize: "10px", color: "#a2a2a2" }}>
            {date.toDateString()} {date.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDeletingItems(items.id)}>
        &#x1F7A9;
      </button>
    </li>
  );
};

const TodoPracticeFooter = ({items}) => {
    if(!items.length) return (
        <p className="todo-footer">Start adding items to your travel list</p>
    )
  return (
    <div className="todo-footer">
      <p>Footer</p>
    </div>
  );
};
