import { useState } from "react";
const useLogin = () => {
  const [activeForm, setActiveForm] = useState("login-form");
  const handdleActiveForm = (state) => {
    setActiveForm(state);
  };
  return { activeForm, handdleActiveForm };
};
export { useLogin };
