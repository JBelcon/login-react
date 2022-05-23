import React from "react";
import { InputSearch } from "./InputSearch";

const InputSearchJobs = () => {
  return (
    <>
      <section className="py-12 bg-indigo-200 lg:py-24 h-2/4">
        <div className="max-w-screen-xl px-6 mx-auto lg:px-8">
          <div className="mt-16">
            <h2 className=" text-2xl font-bold text-black lg:text-4xl lg:mb-2">
              Find Remote Job in Lorem Ipsum
            </h2>
            <p className="text-base text-black ">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <InputSearch />
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
