import { useContext, useEffect } from "react";
import "./App.css";
import Header from "../Header";
import { QuestionsContext } from "../../Context/QuestionsContext";

function App() {
  const [questions, setQuestions] = useContext(QuestionsContext);

  useEffect(() => {
    if (null === questions) {
      return;
    }
    console.log("questions", questions);
  }, [questions]);

  return (
    <div className="container px-4">
      <Header />

      <button onClick={() => setQuestions("test")}>Добавить</button>
    </div>
  );
}

export default App;
