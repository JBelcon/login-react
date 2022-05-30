import React, { useContext } from "react";
import { BtnPrimary } from "./BtnPrimary";
import { AuthContext } from "../context/AuthContext";

const LogOut = () => {
  const context = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    context.setAuth({
      id: "",
      name: "",
      logged: false,
    });
  };
  return (
    <div onClick={handleLogOut}>
      <BtnPrimary>Cerrar sesión</BtnPrimary>
    </div>
  );
};
export { LogOut };
