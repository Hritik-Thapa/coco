import React from "react";
import { Button } from "react-bootstrap";
import illustration from "../images/study illsutration.png";

export const Home = () => {
  return (
    <div className="w-full h-screen bg-sky-50 flex items-center justify-center">
      <div className="text-center flex flex-col md:flex-row items-center justify-center gap-24 max-w-5xl px-4">
        <div className="text-left  ">
          <h1 className="text-7xl font-bold 0 mb-4">COCO</h1>
          <h2 className="text-3xl font-semibold  mb-2">
            Your Cognitive Companion
          </h2>
          <p className=" text-lg mb-6">
            Turn Your Notes into Knowledge <br />
            Smarter, Faster, Better.
          </p>
          <Button
            variant="primary"
            className="px-4 py-2 "
            style={{ backgroundColor: "#0d47a1", color: "white" }}
          >
            Get Started
          </Button>
        </div>
        <div>
          <img
            src={illustration} // Replace this with the actual path to your image file
            alt="Illustration of a kid studying"
            className="w-72 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};
