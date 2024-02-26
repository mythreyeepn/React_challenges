import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
const DisplayComponent = () => {
  const [progress, setProgress] = useState(0);

  // Function to update progress value periodically
  useEffect(() => {
    // Example: Update progress every second
    const interval = setInterval(() => {
      // Update progress (example: increment by 10)
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 0
      );
    }, 1000); // Change interval as needed

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once
  return (
    <>
      <div>Display Component</div>
      <div>
        <ProgressBar bgColor="orange" progress={progress} height={30} />
      </div>
      ;
    </>
  );
};

export default DisplayComponent;
