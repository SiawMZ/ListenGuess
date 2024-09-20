import React, { useState, useEffect } from "react";

export default function AnswerList({
  object2,
  object4,
  object6,
  object8,
  object10,
}) {
  // State to store the shuffled order of objects
  const [shuffledObjects, setShuffledObjects] = useState([]);

  // Shuffle function
  const shuffleArray = (array) => {
    // Create a copy of the array
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Shuffle the objects when the component mounts
  useEffect(() => {
    const objects = [object2, object4, object6, object8, object10];
    setShuffledObjects(shuffleArray(objects));
  }, [object2, object4, object6, object8, object10]);

  return (
    <div className="flex justify-center items-center mt-6">
      {/* Outer container with flexbox to center the card */}
      <div className="card bg-base-100 w-96 shadow-xl text-center">
        {/* The card itself */}
        <div className="card-body">
          {shuffledObjects.map((obj, index) => (
            <h2 key={index} className="font-extrabold text-2xl mb-2">
              {obj}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
