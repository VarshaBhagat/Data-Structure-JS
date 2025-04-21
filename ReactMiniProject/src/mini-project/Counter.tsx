import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);
  let [count, setCount] = useState(value);

  const onIncrement = () => {
    setCount(count + value);
  };
  const onDecrement = () => {
    setCount(count - value);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <div>
        Increment/Decrement by
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        ></input>
      </div>
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </>
  );
};

export default Counter;
