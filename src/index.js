import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./pages/aboutUs.css";
import "./pages/aboutUs.js";
import "./pages/education.js";
import "./pages/education.css";
import "./pages/donate.js";
import "./pages/donate.css";
import "./pages/contact.js";
import "./pages/contact.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
