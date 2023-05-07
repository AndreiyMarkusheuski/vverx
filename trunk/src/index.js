import './styles/index.scss';
import './scripts';

import fullpage from 'fullpage.js'

const scrollElements = document.querySelectorAll(".list_item");

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

  menu: "#menu",
  navigation: true,
  showActiveTooltip: true,
  slidesNavigation: true,
  slidesNavPosition: "bottom",

  //css
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

const main = () => {};

export default main