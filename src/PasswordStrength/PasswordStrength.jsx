import React, { useState } from "react";
import { useRef } from "react";

const PasswordStrength = () => {
  const [password, SetPassword] = useState("");
  const [strength, setStrength] = useState("");

  const handleChange = (event) => {
    SetPassword(event.target.value);
    setStrength(strengthCalculator(event.target.value));
  };
  const strengthCalculator = (value) => {
    var strength = "Weak";
    var charLength = containsRequiredCharacters(value).length;
    console.log(charLength);
    if (value.trim().length >= 10 && charLength === 4) {
      strength = "Strong";
    } else if (value.trim().length > 6 && charLength >= 3) {
      strength = "Moderate";
    } else if (value.trim().length >= 1) {
      strength = "Weak";
    }

    return strength;
  };

  function containsRequiredCharacters(str) {
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    let hasSpecialCharacter = false;

    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
      if (!isNaN(Number(str[i]))) {
        hasNumber = true;
      } else if (specialCharacters.test(str[i])) {
        hasSpecialCharacter = true;
      } else if (str[i] === str[i].toLowerCase()) {
        hasLowerCase = true;
      } else if (str[i] === str[i].toUpperCase()) {
        hasUpperCase = true;
      }
      // If all required characters are found, break out of the loop
      if (hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter) {
        break;
      }
    }
    // If all required characters are found, return true
    let tempArray = [];
    if (hasUpperCase) tempArray.push(hasUpperCase);
    if (hasLowerCase) tempArray.push(hasLowerCase);
    if (hasNumber) tempArray.push(hasNumber);
    if (hasSpecialCharacter) tempArray.push(hasSpecialCharacter);
    return tempArray;
  }

  return (
    <div>
      Enter Password :{" "}
      <input type="text" value={password} onChange={handleChange} />
      {strength && strength.length > 1 ? (
        <span className="password_bar"> Password is :{strength}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default PasswordStrength;
