import classNames from "classnames";
import React from "react";

interface ButtonProps {
  text: string;
  style: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, style, onClick = () => {} }) => {
  return (
    <button
      className={classNames("px-4 py-2 rounded", style)}
      onClick={onClick}
    >
      <p className="text-white">{text}</p>
    </button>
  );
};

export default Button;
