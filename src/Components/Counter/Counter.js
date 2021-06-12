import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <>
      <h1 data-testid="counterHeader">My Counter</h1>
      <h2
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
        data-testid="counterDisplay">
        {counterValue}
      </h2>
      <button
        data-testid="subBtn"
        onClick={() => {
          setCounterValue(counterValue - inputValue);
        }}>
        -
      </button>
      <input
        data-testid="stepSizeInput"
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <button
        data-testid="addBtn"
        onClick={() => {
          setCounterValue(counterValue + inputValue);
        }}>
        +
      </button>
    </>
  );
};

export default Counter;
