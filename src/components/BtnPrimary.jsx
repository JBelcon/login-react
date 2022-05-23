import React from "react";

const BtnPrimary = ({ children }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-1xl font-medium hover:bg-blue-700 transition duration-300 lg:min-w-[100px]">
      {children}
    </button>
  );
};

export { BtnPrimary };
