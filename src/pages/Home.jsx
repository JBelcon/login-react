import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </>
  );
};

export { Home };
