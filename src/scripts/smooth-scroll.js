import fullpage from "fullpage.js";
// import debounce from "./tools/debounce";
// import {
//   elementInView,
//   elementOutofView,
//   displayScrollElement,
//   hideScrollElement,
//   handleScrollAnimation,
// } from "./scroll";

// const scrollElements = document.querySelectorAll(".list_item");
// const preloader = document.querySelector("#preloader");
// const fullpageBtns = document.querySelectorAll(".fullpage-go-to");

new fullpage("#smooth_scroll", {
  licenseKey: 'C7F41B00-5E824594-9A5EFB99-B556A3D5',

  // licenseKey: "GPLv3",
  // anchors: ["main", "rent-page", "sell-page", "about", "contacts"],
  // menu: "#menu",
  // navigation: true,
  // showActiveTooltip: true,
  // slidesNavigation: true,
  // slidesNavPosition: "bottom",

  // css3: true,
  scrollingSpeed: 1000,
  scrollOverflow: true,

  easing: "easeInOutCubic",

  // onScrollOverflow: () => {
  //   if (window.screen.width <= 520) {
  //     handleScrollAnimation();
  //   }
  // },
});

// const switchWithEffect = debounce((switchTo, duration = 0.3) => {
//   const switchToElement = switchTo;
//   preloader.classList.remove("hide");

//   setTimeout(() => {
//     fullpage_api.silentMoveTo(switchToElement);
//   }, duration * 1000);

//   setTimeout(() => {
//     preloader.classList.add("hide");
//   }, duration * 2 * 1000);
// }, 300);

// const handleButtonClick = (event) => {
//   const target = event.currentTarget.dataset.target;
//   switchWithEffect(target);
// };

// fullpageBtns.forEach((btn) => btn.addEventListener("click", handleButtonClick));