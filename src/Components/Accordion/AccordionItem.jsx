import React, { useState } from "react";

export default function AccordionItem({
  num,
  title,
  currOpen,
  onOpen,
  children,
}) {
  // const [isOpen, setIsOpen] = useState(false);

  const isOpen = num === currOpen;

  function handleToggleCard() {
    // setIsOpen(!isOpen);
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggleCard}>
      <p className="number">{num < 9 ? `0${num}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
