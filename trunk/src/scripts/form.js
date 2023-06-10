const inputs = document.querySelectorAll(".form_field_input");
const submitBtn = document.querySelector("#form_btn-submit");
const form = document.querySelector("#contact_form");

const checkRequiredField = (field) => {
  if (!field.value) {
    field.closest(".form_input-div").classList.add("warning");
    return false;
  }
  field.closest(".form_input-div").classList.remove("warning");
  return true;
};

const isAllRequiredFieldsDone = () => {
  const nameField = document.forms["contact_form"]["name"];
  const phoneField = document.forms["contact_form"]["phone"];

  const isNameDone = checkRequiredField(nameField);
  const isPhoneDone = checkRequiredField(phoneField);

  return isNameDone && isPhoneDone;
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  if (isAllRequiredFieldsDone()) {
    form.submit();
    form.reset();
  }
};

const addInputFocus = (e) => {
  const parent = e.target.parentNode.parentNode;
  parent.classList.add("focus");
};

const removeInputFocus = (e) => {
  const parent = e.target.parentNode.parentNode;
  if (e.target.value == "") {
    parent.classList.remove("focus");
  }
};

submitBtn.addEventListener("click", handleSubmitForm);
inputs.forEach((input) => {
  input.addEventListener("focus", addInputFocus);
  input.addEventListener("blur", removeInputFocus);
});
