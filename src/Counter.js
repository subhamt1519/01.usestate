import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>
        You have clicked the button <strong> {count} </strong> 
        times.
      </p>
    </div>
  );
}
