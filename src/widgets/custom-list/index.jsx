import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import ErrorBoundary from "./components/errorBoundary";
import "./styles.scss";

const root = document.getElementById("custom_list");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App root={root} />
    </ErrorBoundary>
  </React.StrictMode>
);
