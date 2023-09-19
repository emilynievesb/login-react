import "./Formulary.css";
import { useFormulary } from "../../shared/hooks/formulary";
import { useEffect } from "react";

function Formulary({ activeForm }) {
  const { handleChange, handleSubmit, formData, handleActiveForm } =
    useFormulary();
  useEffect(() => {
    handleActiveForm(activeForm);
  }, [activeForm]);
  return (
    <>
      <div className="formulary">
        <form
          onSubmit={handleSubmit}
          id="login-form"
          className={`form-container ${
            activeForm === "login-form" ? "" : "none"
          }`}
        >
          <input
            name="username"
            type="text"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Iniciar sesión</button>
        </form>
        <form
          onSubmit={handleSubmit}
          id="register-form"
          className={`form-container ${
            activeForm === "register-form" ? "" : "none"
          }`}
        >
          <input
            name="username"
            type="text"
            placeholder="Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="fechaNacimiento"
            type="date"
            placeholder="Fecha Nacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </>
  );
}
export { Formulary };
