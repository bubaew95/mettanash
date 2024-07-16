import React from "react";
import classes from "./ChapterItems.module.css";
import { Link } from "react-router-dom";
import { ChapterItemInterface } from "../../../Interfaces/Chapter.interface";

interface ChapterItemsInterface {
  items: ChapterItemInterface[];
}

const ChapterItems: React.FC<ChapterItemsInterface> = ({ items }) => {
  return (
    <div className="mt-10">
      {items &&
        items.map((item: ChapterItemInterface) => (
          <Link
            to={`chapter/${item.id}`}
            key={item.id}
            className={classes.chapter_item}
          >
            <div className="">{item.title}</div>
            <div className="">{item.text}</div>
          </Link>
        ))}
    </div>
  );
};

export default ChapterItems;
