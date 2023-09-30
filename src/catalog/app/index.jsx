import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("catalog")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
