function RegisterForm() {
  return (
    <>
      <input placeholder="Usuario" type="text" />
      <input placeholder="Email" type="email" />
      <input placeholder="Fecha Nacimiento" type="date" />
      <input placeholder="Contraseña" type="password" />
      <input placeholder="Repetir contraseña" type="password" />
      <button>Registrarse</button>
    </>
  );
}
export { RegisterForm };
