import React, { useEffect } from "react";

import classes from "./Question.module.css";
import Button from "../../../Components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../Store";
import { fetchQuestionsByChapterId } from "./Question.slice";
import { useParams } from "react-router-dom";

const Question: React.FC = () => {
  const { id } = useParams<string>();

  const questions = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestionsByChapterId(id));
  }, []);

  useEffect(() => {
    console.log("questions", questions);
  }, [questions]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold ">Вопросы</h1>
        <Button className="primary" onClick={() => {}}>
          Добавить вопрос
        </Button>
      </div>
    </div>
  );
};

export default Question;
