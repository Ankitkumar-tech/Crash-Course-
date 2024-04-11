import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isStart) {
      intervalId = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isStart]);

  function handleStart() {
    setIsStart(!isStart);
  }

  const buttonText = isStart ? "Stop" : "Start";
  console.log(isStart, "isStart");
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>{buttonText}</button>
    </div>
  );
};

export default Timer;
