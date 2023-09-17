import "./Formulary.css";

function Formulary({ activeForm }) {
  return (
    <>
      <div className="formulary">
        <div
          id="login-form"
          className={`form-container ${
            activeForm === "login-form" ? "" : "none"
          }`}
        >
          <input placeholder="Usuario" type="text" />
          <input placeholder="Contraseña" type="password" />
          <button>Iniciar sesión</button>
        </div>
        <div
          id="register-form"
          className={`form-container ${
            activeForm === "register-form" ? "" : "none"
          }`}
        >
          <input placeholder="Usuario" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Fecha Nacimiento" type="date" />
          <input placeholder="Contraseña" type="password" />
          <input placeholder="Repetir contraseña" type="password" />
          <button>Registrarse</button>
        </div>
      </div>
    </>
  );
}
export { Formulary };
