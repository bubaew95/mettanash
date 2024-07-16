import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../../Store";
import { getChapterById, loading, setError } from "./Details.slice";
import { getChapterByIdApi } from "../../../FireBase/FirebaseApi";
import {
  ChapterItemInterface,
  ItemsInterface,
} from "../../../Interfaces/Chapter.interface";
import classes from "./Chapter.module.css";
import Item from "../../../Components/Admin/ChapterItems/Item";

const DetailsScreen: React.FC = () => {
  const { id } = useParams<string>();

  const chapter = useAppSelector((state: RootState) => state.adminChapter.item);
  const isLoading = useAppSelector(
    (state: RootState) => state.adminChapter.isLoading
  );
  const errors = useAppSelector((state: RootState) => state.chapters.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadChapters = async () => {
      dispatch(loading());
      try {
        const data = await getChapterByIdApi(id as string);
        dispatch(getChapterById(data as ChapterItemInterface));
      } catch (error: any) {
        dispatch(setError(error.message));
      }
    };

    if (!isLoading) {
      loadChapters();
    }
  }, [dispatch]);

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }

  if (errors) {
    return <div className={classes.error}>{errors}</div>;
  }

  return (
    <div className="mt-10">
      <h1 className={classes.title}>{chapter.title}</h1>
      <div className="mt-3">
        <p>Id: {chapter.id}</p>
        <p>Текст: {chapter.text}</p>
        <p>Язык: {chapter.language}</p>
      </div>

      <div className=" mt-10 ">
        <h1 className={classes.title}>Подглавы</h1>

        <div className="mt-5">
          {chapter.items &&
            chapter.items.map((item: ItemsInterface) => (
              <Item key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
