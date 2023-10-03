/* eslint-disable */
const preloader = document.querySelector("#preloader");

Pace.on("done", function () {
  preloader.classList.add("hide");
  window.scrollTo(0,0)
});