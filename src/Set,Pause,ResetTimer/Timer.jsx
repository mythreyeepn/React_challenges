/**
 * Start, pause and reset timer
 */

import React from "react";
import myInterval from "./myInterval";
import "./timer.css";

const Timer = () => {
  // const [counter, setCounter] = useState(0);
  // const [isRunning, setIsRunning] = useState(0);
  const [counter, setCounter, setIsRunning] = myInterval(0, false);

  const start = () => {
    setIsRunning(true);
  };
  const pause = () => {
    setIsRunning(false);
  };
  const reset = () => {
    setIsRunning(false);
    setCounter(0);
  };
  return (
    <>
      <div>Implementing Timer</div>
      <p>Counter : {counter}</p>
      <button onClick={start}>Start Timer</button>
      <button onClick={pause}>Pause timer</button>
      <button onClick={reset}>Reset Timer</button>
    </>
  );
};

export default Timer;
