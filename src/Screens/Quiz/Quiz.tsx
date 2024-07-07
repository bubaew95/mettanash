import React from "react";
import "./Quiz.css";
import Header from "../../Components/Quiz/Header";
import Button from "../../Components/Quiz/Button";

const Quiz: React.FC = () => {
  return (
    <div className="full relative h-dvh bg-green-400">
      <Header />

      <div className="px-4">
        <div className="min-h-28 mt-10 bg-green-500 border-2 rounded flex items-center justify-center">
          <p className="text-white font-bold">texst</p>
        </div>

        <div className="buttons mt-6 grid-container grid grid-cols-5 gap-4">
          <Button text="I" style="bg-orange-400 hover:bg-orange-500" />
          <Button text="Love" style="bg-orange-400 hover:bg-orange-500" />
          <Button text="You" style="bg-orange-400 hover:bg-orange-500" />
        </div>
      </div>

      <div className="absolute bottom-0 block w-full">
        <div className="px-4 buttons mb-6 grid-container grid grid-cols-5 gap-4 ">
          <Button text="I" style="bg-slate-100 hover:bg-slate-200" />
          <Button text="Love" style="bg-slate-100 hover:bg-slate-200" />
          <Button text="You" style="bg-slate-100 hover:bg-slate-200" />
        </div>

        <button className="bg-green-500 w-full p-5 text-white font-bold hover:opacity-80">
          Далее
        </button>
      </div>
    </div>
  );
};

export default Quiz;
