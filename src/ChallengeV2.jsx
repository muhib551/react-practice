import React, { useState } from "react";
import "../src/index.css";

const ChallengeV2 = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};
export default ChallengeV2;

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const handleCountPrevious = () => {
    setCount((s) => s - step);
  };

  const handleCountNext = () => {
    setCount((s) => s + step);
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <>
      <div className="counter-wrapper" style={{ marginTop: "50px" }}>
        <h1>CHALLENGE-2: Creating Input and Counter </h1>
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(+e.target.value)}
          />
          <label htmlFor="">{step}</label>
        </div>
        <div className="counter-container">
          <button className="btn-count" onClick={handleCountPrevious}>
            -
          </button>
          <input
            value={count}
            onChange={(e) => setCount(+e.target.value)}
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#000",
              padding: "6px",
            }}
          />

          <button className="btn-count" onClick={handleCountNext}>
            +
          </button>
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
      {count !== 0 || step !== 1 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={handleReset}
            style={{
              padding: "10px 30px",
              color: "#fff",
              fontSize: "16px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: "#359dfd",
              cursor: "pointer",
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
};
