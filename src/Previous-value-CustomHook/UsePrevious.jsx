import { useState, useRef, useEffect } from "react";

function UsePrevious(initialValue, val) {
  const [count, setCount] = useState(val);
  const prevVal = useRef(initialValue);

  useEffect(() => {
    prevVal.current = count;
  }, [count]);
  return [prevVal.current, count, setCount];
}
export default UsePrevious;
