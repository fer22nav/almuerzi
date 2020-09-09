import { useState, useEffect } from "react";

export default (initialState, onSubmit) => {
  const [inputs, setInputs] = useState(initialState);

  const subscribe = (field) => (value) => {
    setInputs({ ...inputs, [field]: value });
  };
  const handlerSubmit = () => {
    onSubmit(inputs);
  };
  return { subscribe, inputs, handlerSubmit };
};
