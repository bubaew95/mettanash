import React from "react";
import Button from "../Button";

interface QuestionButtonsProps {
  items: string[];
}

const QuestionButtons: React.FC<QuestionButtonsProps> = ({ items }) => {
  return (
    <div className="px-4 buttons mb-6 grid-container grid grid-cols-5 gap-4 ">
      {items &&
        items.map((item) => (
          <Button
            key={item}
            text={item}
            style="bg-green-500 hover:bg-green-600"
          />
        ))}
    </div>
  );
};

export default QuestionButtons;
