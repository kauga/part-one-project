import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/aboutUs.css";
import "./pages/aboutUs.js";
import "./pages/education.js";
import "./pages/education.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
