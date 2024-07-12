import React, { useEffect } from "react";
import Header from "../../Components/Main/Header";
import MainBanner from "../../Components/Main/MainBanner";
import Content from "./Content";

const Main: React.FC = () => {
  return (
    <div className="px-4">
      <Header />
      <MainBanner />
      <Content />
    </div>
  );
};

export default Main;
