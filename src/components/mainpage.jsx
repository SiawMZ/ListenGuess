import React from "react";
import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <Link to="/question">
          <button className="btn w-96 h-48 shadow-xl m-4">Question</button>
        </Link>
      </div>

      <div className="flex justify-center ">
        <Link to="/answer">
          <button className="btn w-96 h-48 shadow-xl m-4">Answer</button>
        </Link>
      </div>
    </>
  );
}
