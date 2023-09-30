const burgerButton = document.querySelector("#button_burger_id");
const bgButton = document.querySelector("#button_bg_action_id");
const header = document.querySelector("#header");
const actionButtons = document.querySelectorAll(".nav_button");
const dropdownContainers = document.querySelectorAll(".dropdown");

const closeAllDropdowns = () => {
  dropdownContainers.forEach((dropdownContainer) => {
    dropdownContainer.classList.remove("active");
  });
};

const handleMenuToggle = () => {
  closeAllDropdowns();
  header.classList.toggle("active");
  burgerButton.classList.toggle("open");
};

const handleMenuClose = () => {
  closeAllDropdowns();
  header.classList.remove("active");
  burgerButton.classList.remove("open");
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