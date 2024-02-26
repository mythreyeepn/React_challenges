import React from "react";

const ProgressBar = ({ bgColor, progress, height }) => {
  const getColor = () => {
    if (progress >= 0 && progress < 30) {
      return "red"; // Color for progress 0-30
    } else if (progress >= 30 && progress < 60) {
      return "orange"; // Color for progress 30-60
    } else if (progress >= 60 && progress < 90) {
      return "lightblue"; // Color for progress 60-90
    } else if (progress >= 90 && progress <= 100) {
      return "green"; // Color for progress 90-100
    }
  };
  const parentDiv = {
    height: height,
    backgroundColor: "whitesmoke",
    width: "100%",
    borderRadius: 40,
    margin: 50,
  };
  const childDiv = {
    height: "100%",
    backgroundColor: getColor(),
    width: `${progress}%`,
    borderRadius: 40,
    textAlign: "right",
  };
  const progressText = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={parentDiv}>
      <div style={childDiv}>
        <span style={progressText}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
