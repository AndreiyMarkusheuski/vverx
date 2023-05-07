const preloader = document.querySelector("#preloader");
const scrollElements = document.querySelectorAll(".js-scroll");
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

Pace.on("done", function () {
  preloader.classList.add("hide");
  scrollElements.forEach((el) => {
    displayScrollElement(el);
  });
});
