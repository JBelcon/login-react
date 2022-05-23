import React from "react";
import { BtnPrimary } from "./BtnPrimary";

const Temple = () => {
  return (
    <section className="h-screen">
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <div className="mt-12">
          <h2 className="mb-2 text-3xl font-bold text-black lg:text-5xl lg:mb-10">
            Find Remote Job in Lorem Ipsum
          </h2>
          <p className="mb-6 text-lg text-black lg:mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="flex mb-6 space-x-4">
            <input
              className="flex-1 p-4 leading-none border border-gray-200 rounded-lg focus:outline-none focus:border-blue-600"
              type="text"
              placeholder="Search for job title"
            />
            <BtnPrimary> Search</BtnPrimary>
          </div>
          <p className="text-sm text-gray-500">
            Lorem Ipsum is simply dummy text industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Temple };
