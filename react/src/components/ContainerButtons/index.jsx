import "./ContainerButtons.css";

function ContainerButtons({ handdleActiveForm, activeForm }) {
  return (
    <>
      <div className="containerButtons">
        <div
          className={`buttonLogin ${
            activeForm === "login-form" ? "active" : ""
          }`}
          onClick={() => handdleActiveForm("login-form")}
        >
          Login
        </div>
        <div
          className={`buttonRegister ${
            activeForm === "register-form" ? "active" : ""
          }`}
          onClick={() => handdleActiveForm("register-form")}
        >
          Register
        </div>
      </div>
    </>
  );
}
export { ContainerButtons };
