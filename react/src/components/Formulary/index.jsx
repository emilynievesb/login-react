import "./Formulary.css";

function Formulary() {
  return (
    <>
      <div className="formulary">
        <div id="login-form" className="form-container">
          <input placeholder="Usuario" type="text" />
          <input placeholder="Contraseña" type="password" />
          <button>Iniciar sesión</button>
        </div>
        <div id="register-form" className="form-container none">
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
