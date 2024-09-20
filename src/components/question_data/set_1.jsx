import React from "react";

export default function Set_1({
  object,
  object2,
  object3,
  object4,
  object5,
  object6,
  object7,
  object8,
  object9,
  object10,
}) {
  return (
    <div className="flex justify-center items-center mt-6">
      {/* Outer container with flexbox to center the card */}
      <div className="card bg-base-100 w-96 shadow-xl text-center">
        {/* The card itself */}
        <div className="card-body">
          <h2 className="font-extrabold text-2xl mb-2">{object}</h2>
          {/* Card title */}
          <p className="mb-2">{object2}</p>
          {/* Card description */}

          <h2 className="font-extrabold text-2xl mb-2">{object3}</h2>
          {/* Card title */}
          <p className="mb-2">{object4}</p>
          {/* Card description */}

          <h2 className="font-extrabold text-2xl mb-2">{object5}</h2>
          {/* Card title */}
          <p className="mb-2">{object6}</p>
          {/* Card description */}

          <h2 className="font-extrabold text-2xl mb-2">{object7}</h2>
          {/* Card title */}
          <p className="mb-2">{object8}</p>
          {/* Card description */}

          <h2 className="font-extrabold text-2xl mb-2">{object9}</h2>
          {/* Card title */}
          <p className="mb-2">{object10}</p>
          {/* Card description */}
        </div>
      </div>
    </div>
  );
}
