import React, { useState } from "react";
import "./rating.css";
const Rating = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <div>Rating</div>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <button onClick={() => setRating(index)}>
            <span
              className={index <= rating ? "colored" : "nocolor"}
              key={index}
            >
              {index}
            </span>
          </button>
        );
      })}
    </>
  );
};

export default Rating;
