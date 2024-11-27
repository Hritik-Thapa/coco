import React from "react";
import { FaUser } from "react-icons/fa";

const Subjects = () => {
  return (
    <div className="w-[80%] h-screen">
      <div className="flex-1 flex flex-col p-6">
        <div className="flex items-center mb-4"></div>{" "}
        <div className="p-4 bg-blue-100 flex gap-1 items-center rounded-full w-[90%] h-[15vh]">
          <FaUser className="text-blue-900 text-2xl" />
          <h1 className="text-blue-900 text-3xl font-bold ml-4">Subject</h1>
        </div>
      </div>
      <hr className="border-blue-900" />

      <div className="mt-8 flex justify-center">
        <div className="w-32 h-32 flex items-center justify-center bg-blue-100 rounded-lg shadow-md hover:shadow-lg">
          <div className="text-blue-900 text-4xl font-bold">+</div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
