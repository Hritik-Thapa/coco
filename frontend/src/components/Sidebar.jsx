import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa"; // Font Awesome icon for the user icon

const Sidebar = () => {

  const [display, setDisplay] = useState(true);
  // console.log(pathname.location);
  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/") {
      handleDisplayChange(false);
    } else {
      handleDisplayChange(true);
    }
  }, [location.pathname])

  const handleDisplayChange = (value) => {
    setDisplay(value);
  }

  if (!display) return null;
  else
    return (
      <div className="  w-[20%]  h-screen flex bg-blue-50 z-10">
        <div className="w-[100%] h-full bg-blue-50 flex flex-col items-center py-6">
          <div className="h-[15vh] flex items-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">COCO</h1>
            <hr className="w-[50%] h-1 border-blue-900 mx-4 "></hr>
          </div>
          <ul className="mt-8 w-3/4 flex flex-col gap-4">
            <li>
              <Button className="w-full text-blue-50 b  -blue-900 hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition">
                Subjects
              </Button>
            </li>
            <li>
              <Button className="w-full text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition">
                Dashboard
              </Button>
            </li>
            <li>
              <Button className="w-full text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition">
                Notes
              </Button>
            </li>
            <li>
              <Button className="w-full text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 py-2 px-4 rounded-md transition">
                FlashCards
              </Button>
            </li>
          </ul>
          <Button className="mt-auto w-3/4 text-blue-900 bg-white hover:text-blue-900 hover:bg-blue-50 rounded-md py-2 px-4 transition">
            Generate
          </Button>
        </div>
      </div>
    );
};

export default Sidebar;
