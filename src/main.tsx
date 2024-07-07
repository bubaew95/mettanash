import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import "./index.css";
import { QuestionsProvider } from "./Context/QuestionsContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QuestionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QuestionsProvider>
  </React.StrictMode>
);
