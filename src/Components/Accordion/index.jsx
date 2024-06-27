import React from "react";
import "../../Styles/exercise1.css";
import Accordion from "./Accordion";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque dolorum hic omnis optio, ea vitae esse! Voluptatum beatae reprehenderit provident recusandae porro ipsum tempore consectetur, velit, qui est illum.`,
  },
  {
    title: "How lond do I have to return my chairs?",
    text: `Placeat cumque dolorum hic omnis optio, ea vitae esse! Voluptatum beatae reprehenderit provident recusandae porro ipsum tempore consectetur, velit, qui est illum.`,
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: `ea vitae esse! Voluptatum beatae reprehenderit provident recusandae porro ipsum tempore consectetur, velit, qui est illum. Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const AccordionApp = () => {
  return (
    <div className="accordion-container">
      <Accordion data={faqs} />
    </div>
  );
};

export default AccordionApp;
