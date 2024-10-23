import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    const operators = ["+", "-", "*", "/"];


    if (operators.includes(value) && operators.includes(input.slice(-1))) {
      return;
    }


    if (input === "0" && !operators.includes(value)) {
      setInput(value);
      return;
    }

    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        const result = eval(input.replace(/,/g, ""));
        setInput(result.toLocaleString("en-US"));
      } catch {
        null;
      }
    } else {
      setInput(input + value);
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">{input}</div>
      <div className="calculator-buttons">
        {[
          "7",
          "8",
          "9",
          "⌫",
          "4",
          "5",
          "6",
          "/",
          "1",
          "2",
          "3",
          "-",
          "C",
          "0",
          "=",
          "+",
        ].map((button) => (
          <button
            key={button}
            className={
              button === "C"
                ? "clearButton"
                : button === "="
                ? "equalButton"
                : "button"
            }
            onClick={() =>
              button === "⌫" ? handleDelete() : handleClick(button)
            }
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
