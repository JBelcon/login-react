import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  // useRef
  const email = useRef();
  const password = useRef();

  // Funtion Login
  const login = (e) => {
    e.preventDefault();
    fetch("https://backendnodejstzuzulcode.uw.r.appspot.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token))
      .catch((error) => console.log(`El error es ${error}`));
  };
  return (
    <>
      <section className="flex h-screen">
        {/* Sign Up*/}
        <article className="flex w-1/2 justify-around items-center bg-gradient-to-tr from-blue-800 to-blue-400 px-5">
          <div>
            <h2 className="text-3xl text-white font-bold font-mono">
              ¿Todavia no tienes cuenta?
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
                type="email"
              />

              {/* Password */}
              <input
                ref={password}
                className="border-2 rounded-md p-1 outline-none focus:border-blue-800"
                placeholder="Password"
                type="password"
              />

              <button className="rounded-md bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-3">
                Login
              </button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
};

export { Login };
