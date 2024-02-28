import React, { useState } from "react";

const Tabs = () => {
  const buttonArray = ["HTML", "CSS", "JAVASCRIPT"];
  const dataArray = [
    "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div>
        {buttonArray.map((item, index) => {
          return (
            <button
              style={{
                backgroundColor: index === activeTab ? "lightblue" : "gray",
              }}
              onClick={() => {
                handleChange(index);
              }}
            >
              {item}
            </button>
          );
        })}
        <section>{dataArray[activeTab]}</section>
      </div>
    </>
  );
};

export default Tabs;
