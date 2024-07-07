import Main from "../Screens/Main";
import Quiz from "../Screens/Quiz";

const Routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz/:id",
    element: <Quiz />,
  },
];
