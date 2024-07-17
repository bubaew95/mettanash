import React, { PropsWithChildren } from "react";

import classes from "./Button.module.css";
import classNames from "classnames";

interface ButtonInterface
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<PropsWithChildren<ButtonInterface>> = (props) => {
  return (
    <button
      {...props}
      className={classNames(
        classes.button,
        props.className &&
          props.className.split(" ").map((item: string) => classes[item] ?? "")
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
