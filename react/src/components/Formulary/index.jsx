import { useState } from "react";
import "./Formulary.css";

function Formulary({ activeForm }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fechaNacimiento: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function usernameFetch(username) {
    try {
      let URLapi = `http://127.20.30.1:5005/api/get/getUser?username=${username}`;
      const response = await fetch(URLapi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Especifica el tipo de contenido JSON
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }

  async function emailFetch(email) {
    try {
      let URLapi = `http://127.20.30.1:5005/api/get/getEmail?email=${email}`;
      const response = await fetch(URLapi, {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Especifica el tipo de contenido JSON
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }

  async function postFetch(formData) {
    try {
      let postURL = `http://127.20.30.1:5005/api/post/agregarUser`;
      const response = await fetch(postURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      return response;
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeForm === "login-form") {
      const data = await usernameFetch(formData.username);
      if (
        data.length === 1 && // Asegura que haya una única respuesta
        data[0].username === formData.username &&
        data[0].password === formData.password
      ) {
        alert("Hola mundo");
      } else {
        alert("Nombre de usuario o contraseña incorrectos");
      }
    } else if (activeForm === "register-form") {
      const dataUSer = await usernameFetch(formData.username);
      if (dataUSer.length !== 0) {
        alert("Nombre de usuario en uso");
        throw new Error("Nombre de usuario en uso");
      } else {
        const dataEmail = await emailFetch(formData.email);
        if (dataEmail.length !== 0) {
          alert("Email en uso");
          return;
        } else {
          const postUser = await postFetch(formData);
          if (!postUser.ok) {
            alert("La solicitud no pudo ser completada.");
            throw new Error("La solicitud no pudo ser completada.");
          }
          alert("Usuario creado con éxito. Por favor, inicie sesión.");
          setFormData({
            username: "",
            email: "",
            password: "",
            fechaNacimiento: "",
          });
        }
      }
    }
  };

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
