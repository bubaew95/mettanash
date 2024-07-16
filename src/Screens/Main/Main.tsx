import React, { useContext } from "react";
import Header from "../../Components/Main/Header";
import MainBanner from "../../Components/Main/MainBanner";
import Content from "./Content";
import { ThemeContext } from "../../Context/ThemeContext";
import classNames from "classnames";

const Main: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={classNames(
        "px-4",
        theme === "dark" ? "bg-gray-900" : "bg-white"
      )}
    >
      <Header />
      <MainBanner />
      <Content />
    </div>
  );
};

export default Main;
