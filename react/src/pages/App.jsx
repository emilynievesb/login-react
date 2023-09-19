import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import "./index.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Welcome />} />
      </Routes>
    </>
  );
}
export { App };
