import React from "react";
import "./Chapter.css";

interface ChapterProps {
  title: string;
  text: string;
  percent?: number;
}

const Chapter: React.FC<ChapterProps> = ({ title, text, percent = 0 }) => {
  return (
    <div className="mt-6 px-4 py-2 bg-orange-400 rounded-lg flex items-center justify-between text-white">
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{text}</p>
      </div>
      <div className="relative w-16 h-16">
        <svg className="absolute inset-0 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="28"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
            className="text-gray-200"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold">{percent}%</span>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
