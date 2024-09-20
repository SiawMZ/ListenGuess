import React, { useState } from "react";
import { Link } from "react-router-dom";

function Answer() {
  // State to keep track of which buttons have been clicked
  const [clickedButtons, setClickedButtons] = useState([]);

  // Handle button click
  const handleClick = (id) => {
    // Add the button ID to the clickedButtons array if it's not already there
    if (!clickedButtons.includes(id)) {
      setClickedButtons([...clickedButtons, id]);
    }
  };

  // Data for buttons with labels and links to components
  const buttonData = [
    { id: 1, label: "#1", path: "/set1a" },
    { id: 2, label: "#2", path: "/set2a" },
    { id: 3, label: "#3", path: "/set3a" },
    { id: 4, label: "#4", path: "/set4a" },
    { id: 5, label: "#5", path: "/set5a" },
    { id: 6, label: "#6", path: "/set6a" },
    { id: 7, label: "#7", path: "/set7a" },
    { id: 8, label: "#8", path: "/set8a" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {buttonData.map((button) => (
        <Link to={button.path} key={button.id}>
          <button
            className={`btn w-64 h-48 shadow-xl m-4 ${
              clickedButtons.includes(button.id)
                ? "bg-black text-white"
                : "bg-base-100"
            }`}
            onClick={() => handleClick(button.id)}
          >
            <div className="text-xl">{button.label}</div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Answer;
