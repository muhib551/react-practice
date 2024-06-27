import React, { useState } from "react";
import "../src/index.css";

const Challenge = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 02 2024");
  date.setDate(date.getDate() + count);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    setStep((s) => s + 1);
  };

  const handleCountPrevious = () => {
    setCount((s) => s - step);
  };

  const handleCountNext = () => {
    // setStep()
    setCount((s) => s + step);
  };

  return (
    <>
      <div className="counter-wrapper">
        <h1>CHALLENGE: Creating Counter</h1>
        <div className="counter-container">
          <button className="btn-count" onClick={handlePrevious}>
            -
          </button>
          <span style={{ fontSize: "20px", fontWeight: "600", color: "#000" }}>
            Step: {step}
          </span>
          <button className="btn-count" onClick={handleNext}>
            +
          </button>
        </div>
        <div className="counter-container">
          <span className="btn-count" onClick={handleCountPrevious}>
            -
          </span>
          <span style={{ fontSize: "20px", fontWeight: "600", color: "#000" }}>
            Count: {count}
          </span>
          <span className="btn-count" onClick={handleCountNext}>
            +
          </span>
        </div>
      </div>
      <p
        style={{
          marginTop: "30px",
          fontSize: "20px",
          fontWeight: "600",
          color: "#000",
          textAlign: "center",
        }}
      >
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
};

export default Challenge;
