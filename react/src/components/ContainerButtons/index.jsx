import { useState } from "react";
import "./ContainerButtons.css";

function ContainerButtons({ setActiveForm }) {
  const [activeButton, setActiveButton] = useState("login");

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setActiveForm(button === "login" ? "login-form" : "register-form");
  };
  return (
    <>
      <div className="containerButtons">
        <div
          className={`buttonLogin ${activeButton === "login" ? "active" : ""}`}
          onClick={() => handleButtonClick("login")}
        >
          Login
        </div>
        <div
          className={`buttonRegister ${
            activeButton === "register" ? "active" : ""
          }`}
          onClick={() => handleButtonClick("register")}
        >
          Register
        </div>
      </div>
    </>
  );
}
export { ContainerButtons };
