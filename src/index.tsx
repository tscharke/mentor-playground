import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index";

// The React.18-Approach
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
