import { useState } from "react";

export default function UseMyState(initialVal, errors) {
  const [finalVal, setFinalVal] = useState(initialVal);
  const [errors, setErrors] = useState(errors);
  function sethi({ name, value }) {
    setFinalVal((prevFormObj) => ({
      ...prevFormObj,
      [name]: value + "hi",
    }));
  }
  return [finalVal, setFinalVal, errors, setErrors];
}
