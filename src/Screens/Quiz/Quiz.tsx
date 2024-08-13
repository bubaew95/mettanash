import React, { useEffect } from "react";
import "./Quiz.css";
import Header from "../../Components/Quiz/Header";
import Question from "../../Components/Quiz/Question/Question";
import Conversation from "../../Components/Quiz/Conversation/Conversation";
import QuestionButtons from "../../Components/Quiz/QuestionButtons/QuestionButtons";
import { useAppDispatch } from "../../Store";
import { findQuizByIds } from "./quiz.slice";
import { useParams } from "react-router-dom";

const Quiz: React.FC = () => {
  const { parentId, id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(findQuizByIds({ parentId, id }));
  }, []);

  return (
    <div className="full relative h-dvh bg-slate-100">
      <Header />

      <div className="px-4">
        <Question text="Hiiii how are you" />

        <Conversation items={["i", "love", "you"]} />
      </div>

      <div className="absolute bottom-0 block w-full">
        <QuestionButtons items={["i", "love", "you"]} />

        <button className="bg-green-500 w-full p-5 text-white font-bold hover:opacity-80">
          Далее
        </button>
      </div>
    </div>
  );
};

export default Quiz;
