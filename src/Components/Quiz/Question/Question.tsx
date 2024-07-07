import React from "react";

interface QuestionProps {
  text: string;
}

const Question: React.FC<QuestionProps> = ({ text }) => {
  return (
    <div className="min-h-28 mt-10 bg-white border-2 rounded flex items-center justify-center">
      <div className="text-slate-600 font-bold">{text}</div>
    </div>
  );
};

export default Question;
