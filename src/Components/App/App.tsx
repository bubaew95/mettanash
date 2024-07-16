import { Route, Routes } from "react-router-dom";
import Main from "../../Screens/Main/Main";
import Quiz from "../../Screens/Quiz";
import "./App.css";
import PageNotFound from "../../Screens/PageNotFound/PageNotFound";
import IndexScreen from "../../Screens/Admin/Index/Index";
import AdminLayout from "../../Screens/Admin/Layout/AdminLayout";
import DetailsScreen from "../../Screens/Admin/Chapter/Details";
function App() {
  return (
    <div className="mx-auto container lg:w-5/12 h-dvh">
      <Routes>
        <Route path="/">
          <Route index element={<Main />} />
          <Route path="/quiz/:id" element={<Quiz />} />
          <Route element={<PageNotFound />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<IndexScreen />} />
          <Route path="chapter/:id" element={<DetailsScreen />} />
          <Route path="chapter/create" element={<IndexScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
