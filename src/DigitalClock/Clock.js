import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function formattedTime() {
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");
    return `${hours} : ${minutes} : ${seconds}`;
  }
  return (
    <>
      <div style={{ display: "flex", border: "3px solid black", width: "10%" }}>
        <div>{formattedTime()}</div>
      </div>
    </>
  );
};

export default Clock;
