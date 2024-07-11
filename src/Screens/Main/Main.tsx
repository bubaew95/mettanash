import React, { useEffect } from "react";
import Header from "../../Components/Main/Header";
import MainBanner from "../../Components/Main/MainBanner";
import ChapterBody from "./Chapter-body";

const Main: React.FC = () => {
  return (
    <div className="px-4">
      <Header />
      <MainBanner />
      <ChapterBody />
    </div>
  );
};

export default Main;
