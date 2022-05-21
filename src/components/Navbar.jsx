import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const context = useContext(AuthContext);
  return (
    <>
      <nav>
        <ul>
          {!context.auth.logged && (
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          )}
          {!context.auth.logged && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {context.auth.logged && <li>{`Hola ${context.auth.name}`}</li>}
        </ul>
      </nav>
    </>
  );
};

export { Navbar };
