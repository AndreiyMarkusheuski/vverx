const firstRentItem = document.querySelector(".swiper-slide-rent");
const firstSellItem = document.querySelector(".swiper-slide-sell");

const sellNodes = {
  rentNodeItems: document.querySelectorAll(".list_item-rent"),
  sellNodeItems: document.querySelectorAll(".list_item-sell"),
};

const setActiveItem = (activeSlide, nodeItems) => {
  console.log(sellNodes.sellNodeItems)
  const { id } = activeSlide;

  nodeItems.forEach((nodeItem) => {
    if (nodeItem.id === id) nodeItem.classList.add("active");
    else nodeItem.classList.remove("active");
  });
};

const swiperInit = [
  { name: "swiper-rent", listName: "rentNodeItems" },
  { name: "swiper-sell", listName: "sellNodeItems" },
];

swiperInit.forEach((swiperName) => {
  const swiper = new Swiper(`.${swiperName.name}`, {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  swiper.on("slideChangeTransitionEnd", (e) => {
    const { activeIndex, slides } = swiper;
    setActiveItem(slides[activeIndex], sellNodes[swiperName.listName]);
  });
});

setActiveItem(firstRentItem, sellNodes.rentNodeItems);
setActiveItem(firstSellItem, sellNodes.sellNodeItems);
