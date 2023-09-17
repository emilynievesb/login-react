import { useState } from "react";
import { ContainerButtons } from "../components/ContainerButtons";
import { Formulary } from "../components/Formulary";

function Login() {
  const [activeForm, setActiveForm] = useState("login-form");
  return (
    <>
      <div className="container">
        <ContainerButtons setActiveForm={setActiveForm}></ContainerButtons>
        <Formulary activeForm={activeForm}></Formulary>
      </div>
    </>
  );
}
export { Login };
