import React, { useRef, useState } from "react";
import { BtnPrimary } from "./BtnPrimary";

const InputSearch = () => {
  const [search, setSearch] = useState({
    job: "",
    country: "",
  });
  const [error, setError] = useState(false);

  const job = useRef();
  const country = useRef();

  const handleSearch = () => {
    setSearch({
      ...search,
      job: job.current.value,
      country: country.current.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-6 max-w-screen-xl lg:my8">
      <form
        onSubmit={handleSubmit}
        className=" bg-white rounded-lg flex gap-2 items-center w-full p-3 shadow-sm border border-gray-200 "
      >
        <button className="outline-none focus:outline-none text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          onChange={handleSearch}
          ref={job}
          type="search"
          placeholder="Search for job title"
          className="w-full text-sm outline-none focus:outline-none bg-transparent"
        />
        <select
          ref={country}
          onChange={handleSearch}
          className=" outline-none focus:outline-none bg-transparent text-gray-500"
          defaultValue=""
        >
          <option value="">Seleccione un país</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="VZ">Venezuela</option>
        </select>

        <div>
          <BtnPrimary>Search</BtnPrimary>
        </div>
      </form>
    </div>
  );
};

export { InputSearch };
