import React, { useEffect } from "react";
import Chapter from "../../Components/Main/Chapter";
import SubChapter from "../../Components/Main/SubChapter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store";
import { getChapters, loading, setError } from "./main-slice";
import { getChaptersApi } from "../../FireBase/FirebaseApi";

const ChapterBody: React.FC = () => {
  const chapters = useSelector((state: RootState) => state.chapters.items);
  const isLoading = useSelector((state: RootState) => state.chapters.isLoading);
  const errors = useSelector((state: RootState) => state.chapters.errors);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadChapters = async () => {
      try {
        dispatch(loading(true));
        const data = await getChaptersApi("che");
        dispatch(getChapters(data));
      } catch (error: any) {
        dispatch(setError(error.message));
      } finally {
        dispatch(loading(false));
      }
    };

    loadChapters();
  }, []);

  if (true === isLoading) {
    return <div>Loading...</div>;
  }

  if (null !== errors) {
    return <p>{errors}</p>;
  }

  return (
    <>
      {chapters &&
        chapters.map((item: any) => {
          return (
            <div key={item.id}>
              <Chapter
                title={item.title}
                text="Unclock All Courses & Premium Contents!"
                percent={10}
              />
              {chapters.map((sItem: any) => (
                <SubChapter key={sItem.id} text={sItem.title} />
              ))}
            </div>
          );
        })}
    </>
  );
};

export default ChapterBody;
