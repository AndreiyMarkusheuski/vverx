const burgerButton = document.querySelector("#button_burger_id");
const bgButton = document.querySelector("#button_bg_action_id");
const header = document.querySelector("#header");
const actionButtons = document.querySelectorAll(".header-nav-link");
const body = document.body;
const dropdownButton = document.getElementById("header-dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

const toggleMenuDropDown = () => {
  dropdownMenu.classList.toggle("show");
  dropdownButton.classList.toggle("show");

  actionButtons.forEach((actionButton) =>
    actionButton.classList.toggle("show")
  );
};

const closeMenuDropDown = () => {
  dropdownMenu.classList.remove("show");
  dropdownButton.classList.remove("show");
  actionButtons.forEach((actionButton) =>
    actionButton.classList.remove("show")
  );
}

const handleMenuToggle = () => {
  header.classList.toggle("active");
  body.classList.toggle("stop_scroll");
  burgerButton.classList.toggle("open");
  closeMenuDropDown();
};

const handleMenuClose = () => {
  header.classList.remove("active");
  body.classList.remove("stop_scroll");
  burgerButton.classList.remove("open");
  closeMenuDropDown()
};

burgerButton.addEventListener("click", handleMenuToggle);
bgButton.addEventListener("click", handleMenuClose);
actionButtons.forEach((actionButton) =>
  actionButton.addEventListener("click", handleMenuClose)
);

dropdownButton.addEventListener("click", toggleMenuDropDown);
