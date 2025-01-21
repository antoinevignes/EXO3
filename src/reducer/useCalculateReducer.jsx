import { useReducer } from "react";

const initialState = { result: "", num1: "", num2: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        result: parseFloat(state.num1) + parseFloat(state.num2),
      };

    case "setNum1":
      return {
        ...state,
        num1: action.payload,
      };

    case "setNum2":
      return {
        ...state,
        num2: action.payload,
      };

    case "multiply":
      return {
        ...state,
        result: parseFloat(state.num1) * parseFloat(state.num2),
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

const useCalculateReducer = () => useReducer(reducer, initialState);

export default useCalculateReducer;
