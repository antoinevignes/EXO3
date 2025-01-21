import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  const sum = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const multiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (result !== "") {
      setCounter((prev) => prev + 1);
    }
  }, [result]);

  return (
    <>
      <div className="inputs">
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      {counter === 10 && <p>Vous avez effectué 10 calculs !</p>}

      <p>{num1}</p>
      <p>{num2}</p>
      {isNaN(result) ? (
        <p>Veuillez rentrer des nombres valides</p>
      ) : (
        <p>Résultat : {result}</p>
      )}

      <button onClick={sum}>+</button>
      <button onClick={multiply}>x</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
