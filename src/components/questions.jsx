import React, { useState } from "react";
import { Link } from "react-router-dom";

function Question() {
  // State to keep track of which buttons have been clicked
  const [clickedButtons, setClickedButtons] = useState([]);

  // Handle button click
  const handleClick = (id, event) => {
    // Add the button ID to the clickedButtons array if it's not already there
    if (!clickedButtons.includes(id)) {
      setClickedButtons([...clickedButtons, id]);
    }

    // Open in new tab on middle-click or Ctrl/Command + Click
    if (event.button === 1 || event.metaKey || event.ctrlKey) {
      window.open(event.currentTarget.href, "_blank");
      event.preventDefault(); // Prevent default link behavior
    }
  };

  // Data for buttons with labels and links to components
  const buttonData = [
    { id: 1, label: "#1", path: "/set1" },
    { id: 2, label: "#2", path: "/set2" },
    { id: 3, label: "#3", path: "/set3" },
    { id: 4, label: "#4", path: "/set4" },
    { id: 5, label: "#5", path: "/set5" },
    { id: 6, label: "#6", path: "/set6" },
    { id: 7, label: "#7", path: "/set7" },
    { id: 8, label: "#8", path: "/set8" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {buttonData.map((button) => (
        <Link
          to={button.path}
          target="_blank"
          key={button.id}
          onMouseDown={(event) => handleClick(button.id, event)}
        >
          <button
            className={`btn w-64 h-48 shadow-xl m-4 ${
              clickedButtons.includes(button.id)
                ? "bg-black text-white"
                : "bg-base-100"
            }`}
          >
            <div className="text-xl">{button.label}</div>
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Question;
