import { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { postWithToken } from "./api";
import { Header } from "./components/Header";
import { AuthContext } from "./context/AuthContext";
import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Props } from "./pages/Props";
import { SignUp } from "./pages/SignUp";

function App() {
  //Context del estado del usuario
  const context = useContext(AuthContext);

  // Almacenar los datos del usuario
  useEffect(() => {
    postWithToken("/api/auth/validate").then(({ data }) => {
      if (data.failed) {
        // console.log(data);
      } else {
        context.setAuth({
          id: data.user.id,
          name: data.user.name,
          logged: true,
        });
      }
    });
  }, []);

  const location = useLocation();
  return (
    <>
      {location.pathname === "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/props" element={<Props />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
