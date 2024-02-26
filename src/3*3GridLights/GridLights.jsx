import React, { useState } from "react";
import "./GridLights.css";

const GridLights = () => {
  const [lightsArray, setLightArray] = useState([]);
  const handleBlock = (index) => {
    if (lightsArray.length === 8) {
      const tempArray = [...lightsArray];
      let intervalId = setInterval(() => {
        tempArray.slice(0, -1);
        setLightArray((prevArray) => prevArray.slice(0, -1));
        if (tempArray.length === 0) clearInterval(intervalId);
      }, 300);
    } else {
      setLightArray((prevArray) => {
        return [...prevArray, index];
      });
    }
  };

  return (
    <div className="parentDiv">
      {[...Array(9)].map((_, index) => (
        <div
          className={
            lightsArray.length > 0 && lightsArray.includes(index)
              ? "coloredChilDiv"
              : "notColored"
          }
          key={index}
          onClick={() => handleBlock(index)}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default GridLights;
