import React from "react";
import ReactDOM from "react-dom/client";
import AboutUsSwiper from "./swiper.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("about_us-cards")!).render(
  <React.StrictMode>
    <AboutUsSwiper />
  </React.StrictMode>
);
