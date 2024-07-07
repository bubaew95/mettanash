import React from "react";
import "./Header.css";
import ch from "../../../assets/ch.png";

import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";

const QuizHeader: React.FC = () => {
  return (
    <div className="px-4 flex justify-between items-center pt-6 gap-10">
      <button className="hover:opacity-70 p-2">
        <FaArrowLeft />
      </button>
      <div className="progress-block h-2 w-full bg-gray-500 relative  rounded-full overflow-hidden">
        <div
          className="progress-bar h-2 bg-green-500 absoulute"
          style={{ width: "40%" }}
        ></div>
      </div>
      <button className="hover:opacity-70 p-2">
        <FaEllipsisV />
      </button>
    </div>
  );
};

export default QuizHeader;
