import { useReducer } from "react";

//reducer -> store values
const reducer = (state: number, action: any) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    case "RESET":
      return 0;
  }
};

export function ComponentWithUseReducer() {
  //action creator -> create and dispatch function
  const deposit = (amount: number) => {
    //inside dispatch there is the action type and the action payload
    dispatch({
      type: "DEPOSIT",
      payload: amount,
    });
  };

  const withdraw = (amount: number) => {
    //inside dispatch there is the action type and the action payload
    dispatch({
      type: "WITHDRAW",
      payload: amount,
    });
  };

  const reset = () => {
    //inside dispatch there is the action type and the action payload
    dispatch({
      type: "RESET",
    });
  };

  //dispatch -> delivers information between the action creators and the reducer
  const [amount, dispatch] = useReducer(reducer, 500);

  return (
    <div className="ComponentWithUseReducer">
      <h2>Bank account:</h2>
      <h2>{amount}</h2>
      <button onClick={() => deposit(100)}>+100</button>
      <button onClick={() => reset()}>RESET</button>
      <button onClick={() => withdraw(100)}>-100</button>
    </div>
  );
}
