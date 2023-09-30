const inputs = document.querySelectorAll(".form-field-input");
const submitBtn = document.querySelector("#form_btn-submit");
const form = document.querySelector("#contact_form");

const checkRequiredField = (field) => {
  if (!field.value) {
    field.closest(".form-field").classList.add("warning");
    return false;
  }
  field.closest(".form-field").classList.remove("warning");
  return true;
};

const isAllRequiredFieldsDone = () => {
  const nameField = document.forms["contact_form"]["name"];
  const phoneField = document.forms["contact_form"]["phone"];

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

  if (isAllRequiredFieldsDone() && form !== undefined && form !== null) {
    form.submit();
    form.reset();
  }
};
// @ts-ignore 
submitBtn.addEventListener("click", handleSubmitForm);
inputs.forEach((input) => {
  input.addEventListener("focus", addInputFocus);
  input.addEventListener("blur", removeInputFocus);
});