import React from "react";
import { useLocation } from "react-router-dom";

const Props = () => {
  const location = useLocation();
  return (
    <div>
      <p>Nombre: {location.state.name}</p>
      <p>ID: {location.state.id}</p>
      <p>Active: {location.state.active ? "Activo" : "No activo"}</p>
    </div>
  );
};
export { Props };
