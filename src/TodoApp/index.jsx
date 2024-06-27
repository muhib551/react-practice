import React, { useState } from "react";
import "../Styles/todo.css";
import TodoForm from "./sub/TodoForm";
import TodoList from "./sub/TodoList";

const TodoApp = () => {
  const [items, setItems] = useState([]);

  const HandleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const HandleDeletingItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const HandleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const HandleClearList = () => {
    const confirm = window.confirm("Are you sure want to delete all items ?");

    if (confirm) setItems([]);
  };

  return (
    <div className="container">
      <TodoForm onAddingItems={HandleAddItems} />
      <TodoList
        items={items}
        onToggleItem={HandleToggleItem}
        onDeletingitem={HandleDeletingItem}
        onClearItems={HandleClearList}
      />
    </div>
  );
};

export default TodoApp;
