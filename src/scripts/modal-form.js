const inputs = document.querySelectorAll(".modal-form-field-input");
const modalSubmitBtn = document.querySelector("#modal-form_btn-submit");
const modalForm = document.querySelector("#modal_form");

const checkRequiredField = (field) => {
  if (!field.value) {
    field.closest(".modal-form-field").classList.add("warning");
    return false;
  }
  field.closest(".modal-form-field").classList.remove("warning");
  return true;
};

const isAllRequiredFieldsDone = () => {
  const nameField = document.forms["modal_form"]["Имя"];
  const phoneField = document.forms["modal_form"]["Телефон"];

  const isNameDone = checkRequiredField(nameField);
  const isPhoneDone = checkRequiredField(phoneField);

  return isNameDone && isPhoneDone;
};

const addInputFocus = (e) => {
  const parent = e.target.parentNode.parentNode;
  parent.classList.add("focus");
};

const removeInputFocus = (e) => {
  const parent = e.target.parentNode.parentNode;
  if (e.target.value === "") {
    parent.classList.remove("focus");
  }
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  if (
    isAllRequiredFieldsDone() &&
    modalForm !== undefined &&
    modalForm !== null
  ) {
    modalForm.submit();
    modalForm.reset();
  }
};

modalSubmitBtn.addEventListener("click", handleSubmitForm);
modalSubmitBtn.addEventListener("click", handleSubmitForm);
inputs.forEach((input) => {
  input.addEventListener("focus", addInputFocus);
  input.addEventListener("blur", removeInputFocus);
});
