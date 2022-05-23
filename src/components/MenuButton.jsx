import React from "react";

const MenuButton = ({ menu, toggleMenu }) => {
  return (
    <div
      className="text-3xl lg:hidden cursor-pointer z-20"
      onClick={toggleMenu}
    >
      <ion-icon name={`${menu ? "close" : "menu"}`}></ion-icon>
    </div>
  );
};

export { MenuButton };
