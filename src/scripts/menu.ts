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
  // @ts-ignore 
  header.classList.toggle("active");
  // @ts-ignore 
  burgerButton.classList.toggle("open");
};

const handleMenuClose = () => {
  closeAllDropdowns();
  // @ts-ignore 
  header.classList.remove("active");
  // @ts-ignore 
  burgerButton.classList.remove("open");
};

const handleDropdownToggle = (dropdownContainer: any) => {
  closeAllDropdowns();
  // @ts-ignore 
  dropdownContainer.currentTarget.classList.toggle("active");
};

    // @ts-ignore 
burgerButton.addEventListener("click", handleMenuToggle);
// @ts-ignore 
bgButton.addEventListener("click", handleMenuClose);
actionButtons.forEach((actionButton) =>
  actionButton.addEventListener("click", handleMenuClose)
);
dropdownContainers.forEach((dropdownContainer) =>
  dropdownContainer.addEventListener("click", handleDropdownToggle)
);