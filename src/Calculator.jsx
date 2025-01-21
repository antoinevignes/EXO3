import { useEffect, useState } from "react";
import useCalculateReducer from "./reducer/useCalculateReducer";

const Calculator = () => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useCalculateReducer();

  useEffect(() => {
    if (state.result !== "") {
      setCounter((prev) => prev + 1);
    }
  }, [state.result]);

  return (
    <>
      <div className="inputs">
        <input
          type="number"
          name="num1"
          value={state.num1}
          onChange={(e) =>
            dispatch({ type: "setNum1", payload: e.target.value })
          }
        />
        <input
          type="number"
          name="num2"
          value={state.num2}
          onChange={(e) =>
            dispatch({ type: "setNum2", payload: e.target.value })
          }
        />
      </div>

      {counter === 10 && <p>Vous avez effectué 10 calculs !</p>}

      <p>{state.num1}</p>
      <p>{state.num2}</p>
      {isNaN(state.result) ? (
        <p>Veuillez rentrer des nombres valides</p>
      ) : (
        <p>Résultat : {state.result}</p>
      )}

      <button onClick={() => dispatch({ type: "add" })}>+</button>
      <button onClick={() => dispatch({ type: "multiply" })}>x</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Calculator;
