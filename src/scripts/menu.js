const burgerButton = document.querySelector("#button_burger_id");
const bgButton = document.querySelector("#button_bg_action_id");
const header = document.querySelector("#header");
const actionButtons = document.querySelectorAll(".header-nav-link");
const body = document.body;

const handleMenuToggle = () => {
  header.classList.toggle("active");
  body.classList.toggle("stop-scroll")
  burgerButton.classList.toggle("open");
};

const handleMenuClose = () => {
  header.classList.remove("active");
  body.classList.remove("stop-scroll")
  burgerButton.classList.remove("open");
};

burgerButton.addEventListener("click", handleMenuToggle);
bgButton.addEventListener("click", handleMenuClose);
actionButtons.forEach((actionButton) =>
  actionButton.addEventListener("click", handleMenuClose)
);