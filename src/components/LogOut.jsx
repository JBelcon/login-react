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
  return <BtnPrimary onClick={handleLogOut}>Cerrar sesión</BtnPrimary>;
};
export { LogOut };
