import fullpage from "fullpage.js";
import debounce from "./tools/debounce";

const scrollElements = document.querySelectorAll(".list_item");
const preloader = document.querySelector("#preloader");

const fullpageBtns = document.querySelectorAll(".fullpage-go-to");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled", "active");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled", "active");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

new fullpage("#container", {
  licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
  anchors: ["main", "rent-page", "sell-page", "about", "contacts"],
  menu: "#menu",
  navigation: true,
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  css3: true,
  scrollingSpeed: 700,
  scrollOverflow: true,

  easing: "easeInOutCubic",

  onScrollOverflow: () => {
    if (window.screen.width <= 520) {
      handleScrollAnimation();
    }
  },
});

const switchWithEffect = debounce((switchTo, duration = 0.3) => {
  const switchToElement = switchTo;
  preloader.classList.remove("hide");

  setTimeout(() => {
    fullpage_api.silentMoveTo(switchToElement);
  }, duration * 1000);

  setTimeout(() => {
    preloader.classList.add("hide");
  }, duration * 2 * 1000);
}, 300);

const handleButtonClick = (event) => {
  const target = event.currentTarget.dataset.target;
  switchWithEffect(target);
};

fullpageBtns.forEach((btn) => btn.addEventListener("click", handleButtonClick));
