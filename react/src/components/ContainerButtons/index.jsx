import { LoginButton } from "../LoginButton";
import { RegisterButton } from "../RegisterButton";
import "./ContainerButtons.css";
function ContainerButtons() {
  return (
    <>
      <div className="containerButtons">
        <LoginButton></LoginButton>
        <RegisterButton></RegisterButton>
      </div>
    </>
  );
}
export { ContainerButtons };
