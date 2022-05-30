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
          <ion-icon name="search-outline"></ion-icon>
        </button>
        <input
          onChange={handleSearch}
          ref={job}
          type="search"
          placeholder="Search for job title"
          className="w-full text-sm outline-none focus:outline-none bg-transparent"
        />
        <select
          defaultValue=""
          ref={country}
          onChange={handleSearch}
          className=" outline-none focus:outline-none bg-transparent text-gray-500"
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
