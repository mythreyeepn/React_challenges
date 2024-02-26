import { useState, useEffect } from "react";
function UsemyInterval(initalCounter, initilFlag = false) {
  const [counter, setCounter] = useState(initalCounter);
  const [isRunning, setIsRunning] = useState(initilFlag);
  useEffect(() => {
    let intervalId = 0;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCounter((prev) => {
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
  return [counter, setCounter, isRunning, setIsRunning];
}
export default UsemyInterval;
