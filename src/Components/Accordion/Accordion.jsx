import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion-wrapper">
      {data.map((el, i) => (
        <AccordionItem
          key={i}
          currOpen={currOpen}
          onOpen={setCurrOpen}
          num={i + 1}
          title={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        currOpen={currOpen}
        onOpen={setCurrOpen}
        num={22}
        title="Thinking in Reach"
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reuseable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
