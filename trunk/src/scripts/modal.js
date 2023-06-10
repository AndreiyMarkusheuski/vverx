const openModalBtns = document.querySelectorAll(".open-modal-btn");
const closeModalBtn = document.querySelector("#close-modal-btn");

const modalBlock = document.querySelector(".modal");
const modalBgBtn = document.querySelector(".modal_bg");

const form = document.querySelector("#contact_form");

const inputs = document.querySelectorAll(".form_field_input");

const setAdditionalFieldValue = (additionalData) => {
  document.getElementById("additionalField").value = additionalData;
};

const removeInputFocus = (input) => {
  const parent = input.parentNode.parentNode;
  parent.classList.remove("focus");
};

const handleOpenModal = (e) => {
  setAdditionalFieldValue(e.target.dataset.target);
  modalBlock.classList.add("open");
};

const handleCloseModal = (e) => {
  e.preventDefault();
  form.reset();
  inputs.forEach((item) => removeInputFocus(item));
  modalBlock.classList.remove("open");
};

openModalBtns.forEach((openModalBtn) => {
  openModalBtn.addEventListener("click", handleOpenModal);
});

modalBgBtn.addEventListener("click", handleCloseModal);
closeModalBtn.addEventListener("click", handleCloseModal);
