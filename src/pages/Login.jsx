import React, { useContext, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { post } from "../api";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState({
    isError: false,
    message: "",
    loading: false,
  });

  const context = useContext(AuthContext);

  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  // Login de usuarios
  const login = (event) => {
    event.preventDefault();

    setError({ ...error, loading: true });
    post("/api/auth/login", {
      // Peticion de login
      email: email.current.value,
      password: password.current.value,
    })
      .then((data) => {
        setError({ ...error, loading: false });
        const { token, user } = data.data;
        localStorage.setItem("token", token); // Guardamos el token que recibimos
        context.setAuth({
          id: user.id,
          name: user.name,
          logged: true,
        });
        navigate("/", {
          replace: true,
        });
      })
      .catch((error) => {
        setError({
          isError: true,
          message: error.response.data.message,
          loading: false,
        });
      });
  };
  return (
    <>
      <section className="flex h-screen">
        {/* Sign Up*/}
        <article className="flex w-1/2 justify-around items-center bg-gradient-to-tr from-blue-800 to-blue-400 px-5">
          <div>
            <h2 className="text-3xl text-white font-bold font-mono">
              ¿Todavia no te has registrado?
            </h2>
            <p className="text-white font-sans my-3">
              is simply dummy text of the printing and typesetting industry.
            </p>
            <button className="rounded-md bg-white text-blue-800 font-bold py-2 px-3">
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
          </div>
        </article>

        {/* Login */}
        <article className="flex w-1/2 justify-center items-center bg-white px-5">
          <div>
            <h2 className="text-blue-600 font-bold text-3xl mb-1">
              Hello Again!
            </h2>
            <p className="text-gray-800 text-lg mb-7">Welcome Back!</p>

            <form className="flex flex-col gap-4" onSubmit={login}>
              {/* Email */}
              <input
                ref={email}
                className="border-2 rounded-md p-1 outline-none focus:border-blue-800"
                placeholder="Email"
                required
                type="email"
              />

              {/* Password */}
              <input
                ref={password}
                className="border-2 rounded-md p-1 outline-none focus:border-blue-800"
                placeholder="Password"
                required
                type="password"
              />

              <button className="rounded-md bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-3">
                {!error.loading ? "Login" : ""}
                {error.loading && (
                  <span className="flex items-center justify-center w-full h-full">
                    <svg
                      fill="none"
                      className="w-7 h-7 animate-spin"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                        fill="currentColor"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </form>
            {error.isError && (
              <p className="show_info text-sm mb-4 w-max text-red-400 pt-3">
                Este correo o la contraseña son invalidos.
              </p>
            )}
          </div>
        </article>
      </section>
    </>
  );
};
export { Login };
