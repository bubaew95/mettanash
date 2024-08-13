import { Route, Routes } from "react-router-dom";
import Main from "../../Screens/Main/Main";
import Quiz from "../../Screens/Quiz";
import "./App.css";
import IndexScreen from "../../Screens/Admin/Index/Index";
import AdminLayout from "../../Screens/Admin/Layout/AdminLayout";
import DetailsScreen from "../../Screens/Admin/Chapter/Details";
import PageNotFound from "../../Screens/Admin/PageNotFound/PageNotFound";
import Question from "../../Screens/Admin/Question/Question";
function App() {
  return (
    <div className="mx-auto container lg:w-5/12 h-dvh">
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/quiz/:parentId/:id" element={<Quiz />} />
          <Route element={<PageNotFound />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<IndexScreen />} />
          <Route path="chapter/:id" element={<DetailsScreen />} />
          <Route path="question/:id" element={<Question />} />
          <Route path="chapter/create" element={<IndexScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
