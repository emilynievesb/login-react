import { useState } from "react";
import {
  postFetch,
  emailFetch,
  usernameFetch,
} from "../../shared/services/formulary";
import { useNavigate } from "react-router-dom";
const useFormulary = () => {
  const [activeForm, setActiveForm] = useState("login-form");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fechaNacimiento: "",
    password: "",
  });

  const handleActiveForm = (activeForm) => {
    setActiveForm(activeForm);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (activeForm === "login-form") {
      const data = await usernameFetch(formData.username);
      if (
        data.length === 1 && // Asegura que haya una única respuesta
        data[0].username === formData.username &&
        data[0].password === formData.password
      ) {
        navigate("/dashboard");
        setFormData({
          username: "",
          email: "",
          password: "",
          fechaNacimiento: "",
        });
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
          console.log(postUser);
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
  return { handleChange, handleSubmit, formData, handleActiveForm };
};

export { useFormulary };
