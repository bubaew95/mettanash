import React, { useEffect } from "react";
import Chapter from "../../Components/Main/Chapter";
import SubChapter from "../../Components/Main/SubChapter";
import { RootState, useAppDispatch, useAppSelector } from "../../Store";
import { getChapters, loading, setError } from "./main-slice";
import { getChaptersApi } from "../../FireBase/FirebaseApi";

const Content: React.FC = () => {
  const chapters = useAppSelector((state: RootState) => state.chapters.items);
  const isLoading = useAppSelector(
    (state: RootState) => state.chapters.isLoading
  );
  const errors = useAppSelector((state: RootState) => state.chapters.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadChapters = async () => {
      dispatch(loading());
      try {
        const data = await getChaptersApi("che");
        dispatch(getChapters(data));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };

    if (!isLoading && chapters.length === 0) {
      loadChapters();
    }
  }, [dispatch]);

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
              {item?.items &&
                item.items.map((sItem: any) => (
                  <SubChapter key={sItem.id} parentId={item.id} {...sItem} />
                ))}
            </div>
          );
        })}
    </>
  );
};

export default Content;
