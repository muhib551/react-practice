import React from "react";
import "../../Styles/todo.css";

const TodoItems = ({ item, onToggleItem, onDeletingitem }) => {
  const date = new Date();
  date.setDate(date.getDate());

  return (
    <li className="todo-list__items">
      <div
        className="todo-list__items-item"
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <div>
          <span>
            {item.quantity} {item.description}{" "}
          </span>
          <span style={{ fontSize: "10px", color: "#a2a2a2" }}>
            {date.toDateString()} {date.toLocaleTimeString()}
          </span>
        </div>
      </div>
      <div className="check-btns">
        <button className="delete-btn" onClick={() => onDeletingitem(item.id)}>
          &#x1F7A9;
        </button>
      </div>
    </li>
  );
};

export default TodoItems;
