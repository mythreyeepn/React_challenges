import React, { useEffect, useRef } from "react";

const UseClick = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        alert("clicked Outside Component!");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef}>
      <h1>Click Outside Component</h1>
    </div>
  );
};

export default UseClick;
