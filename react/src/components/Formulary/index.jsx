import { LoginForm } from "../LoginForm";
import { RegisterForm } from "../RegisterForm";
import "./Formulary.css";

function Formulary() {
  return (
    <>
      <LoginForm className="formulary"></LoginForm>
      <RegisterForm className="formulary"></RegisterForm>
    </>
  );
}
export { Formulary };
