import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../../../Store";
import { fetchChapterById } from "./Details.slice";
import { ItemsInterface } from "../../../Interfaces/Chapter.interface";
import classes from "./Chapter.module.css";
import Item from "../../../Components/Admin/ChapterItems/Item";
import PageNotFound from "../PageNotFound/PageNotFound";

const DetailsScreen: React.FC = () => {
  const { id } = useParams<string>();

  const dispatch = useAppDispatch();

  const chapter = useAppSelector((state: RootState) => state.adminChapter.item);
  const isLoading = useAppSelector(
    (state: RootState) => state.adminChapter.isLoading
  );
  const errors = useAppSelector((state: RootState) => state.chapters.error);

  useEffect(() => {
    dispatch(fetchChapterById(id));
  }, [dispatch]);

  if (isLoading) {
    return <div className={classes.loading}>Loading...</div>;
  }

  if (errors) {
    return <div className={classes.error}>{errors}</div>;
  }

  if (null === chapter) {
    return <PageNotFound />;
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
          {chapter!.items &&
            chapter!.items.map((item: ItemsInterface) => (
              <Item key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;
