/* eslint-disable */
const preloader = document.querySelector("#preloader");

Pace.options = {
  ajax: false
}

Pace.on("done", function () {
  preloader.classList.add("hide");
  // window.scrollTo(0,0);
});