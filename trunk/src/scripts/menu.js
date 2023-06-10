const burgerButton = document.querySelector("#button_burger_id");
const bgButton = document.querySelector("#button-bg-action_id");
const header = document.querySelector("#header_id");
const actionButtons = document.querySelectorAll(".nav_button");
const dropdownContainers = document.querySelectorAll(".dropdown");
let isScrollEnable = true;

const closeAllDropdowns = () => {
  dropdownContainers.forEach((dropdownContainer) => {
    dropdownContainer.classList.remove("active");
  });
};

const setAllowScrolling = () => fullpage_api.setAllowScrolling(isScrollEnable);

const handleMenuToggle = () => {
  closeAllDropdowns();
  header.classList.toggle("active");
  burgerButton.classList.toggle("open");
  isScrollEnable = !isScrollEnable;
  setAllowScrolling();
};

const handleMenuClose = () => {
  closeAllDropdowns();
  header.classList.remove("active");
  burgerButton.classList.remove("open");
  isScrollEnable = true;
  setAllowScrolling();
};

const handleDropdownToggle = (dropdownContainer) => {
  closeAllDropdowns();
  dropdownContainer.currentTarget.classList.toggle("active");
};

burgerButton.addEventListener("click", handleMenuToggle);
bgButton.addEventListener("click", handleMenuClose);
actionButtons.forEach((actionButton) =>
  actionButton.addEventListener("click", handleMenuClose)
);
dropdownContainers.forEach((dropdownContainer) =>
  dropdownContainer.addEventListener("click", handleDropdownToggle)
);
