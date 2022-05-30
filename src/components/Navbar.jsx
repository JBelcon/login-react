import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { MenuButton } from "./MenuButton";
import { BtnPrimary } from "./BtnPrimary";
import { LogOut } from "./LogOut";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const urls = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Jobs",
      url: "/jobs",
    },
    {
      name: "Companies",
      url: "/companies",
    },
  ];

  const context = useContext(AuthContext);

  return (
    <nav className="">
      <MenuButton menu={menu} toggleMenu={toggleMenu} />

      <ul
        className={`flex items-center gap-8 duration-500  ${
          menu
            ? "flex-col lg:flex-row pt-32 lg:pt-0 absolute lg:static top-16 right-0 bg-white w-2/3 lg:w-auto h-screen lg:h-auto"
            : "hidden lg:flex"
        }`}
      >
        {urls.map((url) => {
          return (
            <li key={url.name}>
              <NavLink
                className="hover:font-bold duration-300 hover:text-blue-600 "
                to={url.url}
              >
                {url.name}
              </NavLink>
            </li>
          );
        })}
        {!context.auth.logged && (
          <BtnPrimary>
            <NavLink to="/signup">Sign up</NavLink>
          </BtnPrimary>
        )}
        {!context.auth.logged && (
          <BtnPrimary>
            <NavLink to="/login">Login</NavLink>
          </BtnPrimary>
        )}

        {context.auth.logged && (
          <p className={`"font-bold" ${menu ? "hidden" : ""}`}>
            Hola, {context.auth.name}
          </p>
        )}
        {context.auth.logged && <LogOut />}
      </ul>
    </nav>
  );
};

export { Navbar };
