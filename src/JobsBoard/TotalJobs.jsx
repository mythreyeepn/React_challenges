import React, { useEffect, useState } from "react";
import DisplayJob from "./DisplayJob";
import "./jobs.css";

const TotalJobs = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobData, setJobData] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  useEffect(() => {
    async function getRes() {
      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      const data = await response.json();
      setJobIds(data);
      getDetails(data.splice(pageNum * 4, (pageNum + 1) * 4));
    }
    getRes();
  }, [pageNum]);

  const getDetails = async (jobIds) => {
    try {
      var tempPromiseArray = [];
      for (var i = 0; i < jobIds.length; i++) {
        var url =
          "https://hacker-news.firebaseio.com/v0/item/" + jobIds[i] + ".json";
        var promise = new Promise((resolve, reject) => {
          fetch(url)
            .then((response) => response.json())
            .then(resolve)
            .catch(reject);
        });
        tempPromiseArray.push(promise);
      }
      Promise.all(tempPromiseArray).then((responses) => {
        const tempArray = responses.map((response) => response);
        setJobData(tempArray);
      });
    } catch (error) {
      console.error("Error fetching job details:", error);
    }
  };

  const handleButton = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <>
      <div>Jobs Board</div>
      <div className="mainContainer">
        {jobData.map((item, index) => {
          return <DisplayJob key={index} data={item} />;
        })}
        <button
          disabled={(pageNum + 1) * 4 >= jobIds.length}
          onClick={handleButton}
        >
          Load More{" "}
        </button>
      </div>
    </>
  );
};
export default TotalJobs;
