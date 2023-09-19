import { ContainerButtons } from "../components/ContainerButtons";
import { Formulary } from "../components/Formulary";
import { useLogin } from "../shared/hooks/login";
function Login() {
  const { activeForm, handdleActiveForm } = useLogin();
  return (
    <>
      <div className="container">
        <ContainerButtons
          handdleActiveForm={handdleActiveForm}
          activeForm={activeForm}
        ></ContainerButtons>
        <Formulary activeForm={activeForm}></Formulary>
      </div>
    </>
  );
}
export { Login };
