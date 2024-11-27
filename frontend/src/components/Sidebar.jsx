import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa"; // Font Awesome icon for the user icon
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const [display, setDisplay] = useState(true);
  // console.log(pathname.location);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/") {
      handleDisplayChange(false);
    } else {
      handleDisplayChange(true);
    }
  }, [location.pathname]);

  const handleDisplayChange = (value) => {
    setDisplay(value);
  };

  if (!display) return null;
  else
    return (
      <div className="  w-[20%]  h-screen flex bg-blue-50 z-10">
        <div className="w-[100%] h-full bg-blue-50 flex flex-col items-center py-6  ">
          <div className="h-[10vh] flex items-center justify-center">
            <div className="text-center mt-4">
              <h1 className="text-5xl font-bold text-blue-900 m-6">COCO</h1>
              <hr className="w-[100%] h-1 border-blue-900 mx-auto" />
            </div>
          </div>
          <ul className="mt-12 w-3/4 flex flex-col gap-4  ">
            <li className=" text-start">
              <Button
                className="w-full text-blue-50 bg-blue-900 hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition  text-start"
                onClick={() => {
                  navigate("/subjects");
                }}
              >
                Subjects
              </Button>
            </li>
            <li>
              <Button
                className="w-full text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition  text-start"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Dashboard
              </Button>
            </li>
            <li>
              <Button
                className="w-full text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition  text-start"
                onClick={() => {
                  navigate("/notes");
                }}
              >
                Notes
              </Button>
            </li>
            <li>
              <Button
                className="w-full text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition  text-start"
                onClick={() => {
                  navigate("/flashcards");
                }}
              >
                FlashCards
              </Button>
            </li>
          </ul>
          <Button className="mt-auto w-3/4 text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 rounded-md py-2 px-4 transition  text-start  ">
            Generate
          </Button>
        </div>
      </div>
    );
};

export default Sidebar;
