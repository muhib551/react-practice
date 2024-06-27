import React, { useState } from "react";
import TodoItems from "./TodoItems";
import TodoFooter from "./TodoFooter";

const TodoList = ({ items, onToggleItem, onDeletingitem, onClearItems }) => {
  const [sortBy, setsortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="todo-list">
      <h3 className="todo-list__heading">Packing List</h3>
      <div className="todo-list__action-wrapper">
        <button className="btn-clear" onClick={onClearItems}>
          Clear List
        </button>
        <select
          value={sortBy}
          className="btn-clear"
          onChange={(e) => setsortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
      <ul className="todo-list__wrapper">
        {sortedItems.map((item) => (
          <TodoItems
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            onDeletingitem={onDeletingitem}
          />
        ))}
      </ul>
      <TodoFooter items={items}/>
    </div>
  );
};

export default TodoList;
