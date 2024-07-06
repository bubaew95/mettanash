import Chapter from "../../Components/Chapter";
import Header from "../../Components/Header";
import MainBanner from "../../Components/MainBanner";

export default function () {
  return (
    <>
      <Header />
      <MainBanner />
      <Chapter
        title="Chapter 1"
        text="Unclock All Courses & Premium Contents!"
        percent={10}
      />
    </>
  );
}
