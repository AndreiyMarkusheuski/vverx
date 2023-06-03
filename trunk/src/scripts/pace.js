const preloader = document.querySelector("#preloader");
const scrollElements = document.querySelectorAll(".js-scroll");
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

console.log('here')
Pace.on("done", function () {
  console.log('here')
  preloader.classList.add("hide");
  scrollElements.forEach((el) => {
    displayScrollElement(el);
  });
});
