import { data } from "autoprefixer";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { putWithToken } from "../api";
import { UserProfile } from "../components/UserProfile";
import { InputSearchJobs } from "../components/InputSearchJobs";

const Home = () => {
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
    </div>
  );
};
export { Home };
