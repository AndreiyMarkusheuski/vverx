import fullpage from "fullpage.js";

const scrollElements = document.querySelectorAll(".list_item");
const contactsBtn = document.querySelector("#fullpage-go-to-contacts");

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

contactsBtn.addEventListener("click", () => {
  fullpage_api.silentMoveTo("contacts");
});

const main = () => {};

export default main;
