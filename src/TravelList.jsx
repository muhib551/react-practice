import React, { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import "./travelStyle.css";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

const TravelList = () => {
  const [items, setItems] = useState([]);

  const HandleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const HandleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const HandleToggleItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const HandleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure want to delete all items ? "
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={HandleAddItems} />
      <PackingList
        items={items}
        onDeletingItem={HandleDeleteItems}
        onToggleItems={HandleToggleItems}
        onClearList={HandleClearList}
      />
      <Stats items={items} />
    </div>
  );
};

export default TravelList;
