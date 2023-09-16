import React from "react";
import ReactDOM from "react-dom/client";
import ProductsSwiper from "./swiper.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("products_swiper")!).render(
  <React.StrictMode>
    <ProductsSwiper />
  </React.StrictMode>
);
