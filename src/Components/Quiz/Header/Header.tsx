import React from "react";
import "./Header.css";

import { FaArrowLeft, FaEllipsisV, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuizHeader: React.FC = () => {
  return (
    <div className="px-4 flex justify-between items-center pt-6 gap-10">
      <Link className="hover:opacity-70 p-2" to={"/"}>
        <FaArrowLeft size={18} />
      </Link>
      <div className="progress-block h-2 w-full bg-gray-500 relative  rounded-full overflow-hidden">
        <div
          className="progress-bar h-2 bg-green-500 absoulute"
          style={{ width: "40%" }}
        ></div>
      </div>
      <div className="flex ">
        <button className="hover:opacity-70 p-2 flex items-center justify-center">
          <FaHeart size={24} color="rgb(244 63 94)" />
          <span className="absolute text-white font-sm">3</span>
        </button>

        <button className="hover:opacity-70 p-2 ">
          <FaEllipsisV size={18} />
        </button>
      </div>
    </div>
  );
};

export default QuizHeader;
