import React, { useEffect } from "react";
import Chapter from "../../Components/Main/Chapter";
import Header from "../../Components/Main/Header";
import MainBanner from "../../Components/Main/MainBanner";
import SubChapter from "../../Components/Main/SubChapter";
import { observer } from "mobx-react-lite";

import ChapterApi from "../../State/Chapters";

const Main: React.FC = observer(() => {
  useEffect(() => {
    ChapterApi.getChapters();
  }, []);

  console.log("ChapterApi.chapters", ChapterApi.chapters);

  return (
    <div className="px-4">
      <Header />
      <MainBanner />
      <Chapter
        title="Chapter 1"
        text="Unclock All Courses & Premium Contents!"
        percent={10}
      />
      <SubChapter text="Text 1" />
      <SubChapter text="Text 2" />
      <SubChapter text="Text 3" />
      <Chapter
        title="Chapter 1"
        text="Unclock All Courses & Premium Contents!"
        percent={10}
      />
      <SubChapter text="Text 1" />
      <SubChapter text="Text 2" />
      <SubChapter text="Text 3" />
      <Chapter
        title="Chapter 1"
        text="Unclock All Courses & Premium Contents!"
        percent={10}
      />
      <SubChapter text="Text 1" />
      <SubChapter text="Text 2" />
      <SubChapter text="Text 3" />
    </div>
  );
});

export default Main;
