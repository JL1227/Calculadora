import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [oldValue, setOldValue] = useState(0);
  const [operator, setOperator] = useState();
  const botoes = [
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
  ];

  function inputNumber(e: any): void {
    let input = e.target.value;
    if (value == 0) {
      setValue(input);
    } else {
      setValue(value + input);
    }
  }

  function clearDisplay() {
    setValue(0);
  }

  function percentage() {
    setValue(value / 100);
  }

  function operatorHandler(e: any) {
    if (e.target.value == "+") {
      var op = e.target.value;
      setOperator(op);
      setOldValue(value);
      setValue(0);
    } else if (e.target.value == "-") {
      var op = e.target.value;
      setOperator(op);
      setOldValue(value);
      setValue(0);
    } else if (e.target.value == "x") {
      var op = e.target.value;
      setOperator(op);
      setOldValue(value);
      setValue(0);
    } else if (e.target.value == "/") {
      var op = e.target.value;
      setOperator(op);
      setOldValue(value);
      setValue(0);
    }
  }

  function calculateResult() {
    if (operator == "+") {
      setValue(parseFloat(oldValue) + parseFloat(value));
    } else if (operator == "-") {
      setValue(oldValue - value);
    } else if (operator == "/") {
      setValue(oldValue / value);
    } else if (operator == "x") {
      setValue(oldValue * value);
    }
  }

  function executeFunctionButtons(e: any): void {
    if (e.target.value != "=") inputNumber(e);
    if (e.target.value == "%") {
      percentage();
    }
    operatorHandler(e);
    if (e.target.value == "=") {
      calculateResult();
    }
  }

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <p className="display">{value}</p>
      <div className="calculatorButtons">
        <button className="acButton" onClick={clearDisplay}>
          AC
        </button>
        {botoes.map((valor, id) => {
          return (
            <button key={id} onClick={executeFunctionButtons} value={valor}>
              {valor}
            </button>
          );
        })}
        <button
          className="equalButton"
          onClick={executeFunctionButtons}
          value={"="}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
