import classNames from "classnames";
import React from "react";

interface ButtonProps {
  text: string;
  style: string;
}

const Button: React.FC<ButtonProps> = ({ text, style }) => {
  return (
    <button className={classNames("px-4 py-2 rounded", style)}>
      <p className="text-white">{text}</p>
    </button>
  );
};

export default Button;
