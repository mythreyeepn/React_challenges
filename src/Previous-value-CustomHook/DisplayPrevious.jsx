import React from "react";
import UsePrevious from "./UsePrevious";
const DisplayPrev = () => {
  const [previousVal, count, setCount] = UsePrevious(undefined, 0);
  return (
    <div>
      <p>Count : {count} </p>
      <p>Prev Value : {previousVal} </p>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
};

export default DisplayPrev;
