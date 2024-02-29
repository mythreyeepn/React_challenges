import React from "react";
import "./jobs.css";
const DisplayJob = (props) => {
  return (
    <>
      <div className="item_">
        <p>{props.data.title}</p>
        <span>By {props.data.by}</span>
      </div>
    </>
  );
};
// {"by":"jamilbk","id":35908337,"score":1,"time":1683838872,
// "title":"Firezone (YC W22) is hiring Elixir and Rust engineers",
// "type":"job","url":"https://www.ycombinator.com/companies/firezone/jobs"}

export default DisplayJob;
