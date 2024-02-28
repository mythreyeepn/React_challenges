import React, { useState, useEffect } from "react";
import "./traffic.css";
const colors = ["red", "orange", "green"];
const TrafficLights = () => {
  const [light, setLight] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setLight((prev) => (prev % 3) + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      Traffic Lights
      <div className="container">
        {[...Array(3)].map((_, index) => {
          index += 1;
          return (
            <div
              className="item"
              style={{
                backgroundColor: light === index ? colors[index - 1] : "gray",
              }}
            >
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLights;
