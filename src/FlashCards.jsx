import React, { useState } from "react";
import "../src/Styles/flashcards.css";

const Questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What is the name of syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1397,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

const FlashCards = () => {
  const [selectedId, setSelectedId] = useState(null);

  const HandleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {Questions.map((question) => {
        return (
          <div
            key={question.id}
            onClick={() => HandleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default FlashCards;
