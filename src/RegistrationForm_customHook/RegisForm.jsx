import React, { useState } from "react";
import "./RegisForm.css";
import UseMyState from "./useState_Custom";
const hobbies = ["Reading", "Writing", "Eating", "Sleeping"];
const RegisForm = () => {
  const [formObj, setFormObj, errors, setErros] = UseMyState(
    {
      fullName: "",
      email: "",
      gender: "female",
      hobby: "Reading",
    },
    {
      fullNameError: "",
      emailError: "",
      genderError: "",
      hobbyError: "",
    }
  );
  const [showData, setShowData] = UseMyState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj({ name, value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowData(true);
  };
  const handleErrorCheck = (e) => {};
  return (
    <div>
      <form
        className="form-container"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={formObj.fullName}
            name="fullName"
            onChange={handleChange}
            onBlur={handleErrorCheck}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={formObj.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gender : </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formObj.gender === "male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formObj.gender === "female"}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              onChange={handleChange}
              checked={formObj.gender === "others"}
            />
            Others
          </label>
        </div>
        <div className="form-group">
          <label>Hobby : </label>
          <select name="hobby" onChange={handleChange}>
            {hobbies.map((x, index) => {
              return <option key={index}>{x}</option>;
            })}
          </select>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      {showData ? <p> Entered Info : {JSON.stringify(formObj)}</p> : ""}
    </div>
  );
};

export default RegisForm;
