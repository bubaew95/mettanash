import React from "react";
import { ItemsInterface } from "../../../Interfaces/Chapter.interface";

import classes from "./ChapterItems.module.css";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

interface ItemInterface {
  item: ItemsInterface;
}

const Item: React.FC<ItemInterface> = ({ item }) => {
  const onDeleteHandler = (id: string) => {
    alert(id);
  };

  return (
    <div className={classes.item_block}>
      <Link to={`../question/${item.id}`} className="block flex-1 p-3">
        {item.text}
      </Link>

      <Button
        className={"warning button-sm"}
        onClick={() => onDeleteHandler(item.id)}
      >
        Удалить
      </Button>
    </div>
  );
};

export default Item;
