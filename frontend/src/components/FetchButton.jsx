import React from "react";

function FetchButton(prop) {
  return (
    <div>
      <button className="text-white bg-green-500  text-center text-xs p-4 rounded-lg hover:text-green-500 hover:bg-white cursor-pointer w-[60%]">
        {prop.title}
      </button>
    </div>
  );
}

export default FetchButton;
