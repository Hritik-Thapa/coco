import React from "react";
import { Button } from "react-bootstrap";
import illustration from "../images/study illsutration.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleGetStarted = () => {
    navigate("/inbox"); // Navigate to the Inbox page
  };

  return (
    <div className="w-full h-screen bg-sky-50 flex items-center justify-center">

      <div className="text-center flex flex-col md:flex-row items-center justify-center gap-24  border rounded-xl p-40 shadow ">
        <div className="text-left">
          <h1 className="text-7xl font-bold 0 mb-4">COCO</h1>
          <h2 className="text-3xl font-semibold mb-2">
            Your Cognitive Companion
          </h2>
          <p className="text-lg mb-6">
            Turn Your Notes into Knowledge <br />
            Smarter, Faster, Better.
          </p>
          <Button
            variant="primary"
            className="px-8 py-3 rounded-full hover:text-blue-900 hover:bg-white hover:drop-shadow-lg shadow cursor-pointer text-xl"
            onClick={handleGetStarted} // Trigger navigate when clicked
          >
            Get Started
          </Button>
        </div>
        <div>
          <img
            src={illustration} // Image path
            alt="Illustration of a kid studying"
            className="w-72 md:w-80 lg:w-96"
          />
        </div>
      </div>
    </div>
  );
};
