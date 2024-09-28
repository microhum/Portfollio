import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultPage from "./pages/DefaultPage";
import WelcomePage from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <WelcomePage />
    </Router>
  </React.StrictMode>
);
