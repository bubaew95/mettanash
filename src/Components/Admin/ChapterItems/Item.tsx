import React from "react";
import { ItemsInterface } from "../../../Interfaces/Chapter.interface";

import classes from "./ChapterItems.module.css";
import { Link } from "react-router-dom";

interface ItemInterface {
  item: ItemsInterface;
}

const Item: React.FC<ItemInterface> = ({ item }) => {
  return (
    <div className={classes.item_block}>
      <Link to={`../chapter/item/${item.id}`} className="block flex-1 p-3">
        {item.text}
      </Link>
      <button className={classes.button}>Удалить</button>
    </div>
  );
};

export default Item;
