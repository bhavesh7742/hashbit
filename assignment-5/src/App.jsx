import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Please enter valid numbers");
      return;
    }

    switch (operation) {
      case "add":
        setResult(n1 + n2);
        break;
      case "subtract":
        setResult(n1 - n2);
        break;
      case "multiply":
        setResult(n1 * n2);
        break;
      case "divide":
        if (n2 === 0) {
          setResult("Cannot divide by zero");
        } else {
          setResult(n1 / n2);
        }
        break;
      default:
        setResult("Unknown operation");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />

      <button onClick={() => handleCalculation("add")}>Add</button>
      <button onClick={() => handleCalculation("subtract")}>Subtract</button>
      <button onClick={() => handleCalculation("multiply")}>Multiply</button>
      <button onClick={() => handleCalculation("divide")}>Divide</button>

      <div style={{ marginTop: "20px" }}>
        <strong>Result: </strong>{result !== null ? result : "No calculation yet"}
      </div>
    </div>
  );
}

export default Calculator;
