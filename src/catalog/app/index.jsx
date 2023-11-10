import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import ErrorBoundary from "./components/errorBoundary";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("catalog")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
