const burgerButton = document.querySelector("#button_burger_id");
const bgButton = document.querySelector("#button-bg-action_id");
const header = document.querySelector("#header_id");

const handleClickToggle = (e) => {
  header.classList.toggle("active");
  burgerButton.classList.toggle("open");
};

const handleClickClose = (e) => {
  header.classList.remove("active");
  burgerButton.classList.remove("open");
};

burgerButton.addEventListener("click", handleClickToggle);

bgButton.addEventListener("click", handleClickClose);
