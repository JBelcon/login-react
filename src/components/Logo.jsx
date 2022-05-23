import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <section className="font-bold text-2xl cursor-pointer ">
      <NavLink to="/">Logo</NavLink>
    </section>
  );
};

export { Logo };
