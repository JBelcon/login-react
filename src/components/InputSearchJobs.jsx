import React from "react";
import { BtnPrimary } from "./BtnPrimary";

const InputSearchJobs = () => {
  return (
    <>
      <section className="py-12 bg-indigo-200 lg:py-24 h-2/4">
        <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
          <div className="mt-16">
            <h2 className=" text-2xl font-bold text-black lg:text-4xl lg:mb-2">
              Find Remote Job in Lorem Ipsum
            </h2>
            <p className="mb-6 text-base text-black lg:mb-8">
              Lorem Ipsum is simply dummy text of the printing.
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
    </>
  );
};

export { InputSearchJobs };
