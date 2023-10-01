/* eslint-disable */
const preloader = document.querySelector("#preloader");

Pace.on("done", function () {
  preloader.classList.add("hide");
});