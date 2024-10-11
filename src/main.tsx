import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import WelcomePage from "./pages";
import { DefaultTemplate } from "components/default-template/DefaultTemplate";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <DefaultTemplate />
    </Router>
  </React.StrictMode>
);
