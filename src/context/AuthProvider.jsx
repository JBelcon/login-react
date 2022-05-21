import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    id: "",
    name: "",
    logged: false,
  });
  return (
    <>
      <AuthContext.Provider value={{ auth, setAuth }}>
        {children}{" "}
      </AuthContext.Provider>
    </>
  );
};

export { AuthProvider };
