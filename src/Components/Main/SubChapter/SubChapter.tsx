import "./SubChapter.css";
import image from "../../../assets/ch.png";
import React from "react";

interface SubChapterProps {
  text: string;
}

const SubChapter: React.FC<SubChapterProps> = ({ text }) => {
  return (
    <div className="flex justify-between items-center my-6">
      <div className="mr-3">
        <div className="border-4 w-16 h-16 rounded-full overflow-hidden">
          <div className="p-3">
            <img src={image} className="object-cover" />
          </div>
        </div>
      </div>
      <div className="flex-1 border-2 p-4 rounded-lg shadow-md">
        <p className="font-bold">{text}</p>
      </div>
    </div>
  );
};

export default SubChapter;
