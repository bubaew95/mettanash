import { Route, Routes } from "react-router-dom";
import Main from "../../Screens/Main/Main";
import Quiz from "../../Screens/Quiz";
import "./App.css";
import PageNotFound from "../../Screens/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="mx-auto container lg:w-5/12 h-dvh">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
