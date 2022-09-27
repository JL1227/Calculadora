import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);
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
  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <p className="display">{value}</p>
      <div className="calculatorButtons">
        <button className="acButton">AC</button>
        {botoes.map((valor) => {
          return <button>{valor}</button>;
        })}
        <button className="equalButton">=</button>
      </div>
    </div>
  );
}

export default App;
