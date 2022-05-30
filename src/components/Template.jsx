import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { putWithToken } from "../api";
import { UserProfile } from "./UserProfile";
import { InputSearchJobs } from "./InputSearchJobs";

const Temple = () => {
  const empleo = useRef();

  const apply = () => {
    putWithToken(`/api/jobs/apply/${empleo.current.value}`)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gray-200">
      <InputSearchJobs />
      <UserProfile />
      <input ref={empleo} placeholder="id empleo" />
      <button
        className="rounded-md bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-3"
        onClick={apply}
      >
        Aplicar
      </button>

      <Link to="/details/tzuzul">Ir a componente</Link>
      <Link
        to="/props"
        state={{
          name: "Tzuzul",
          id: "abc123",
          active: true,
        }}
      >
        Ir a componente con props
      </Link>
    </div>
  );
};

export { Temple };
