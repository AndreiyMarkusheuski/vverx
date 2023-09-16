const inputs = document.querySelectorAll(".form-field-input");
const submitBtn = document.querySelector("#form_btn-submit");
const form = document.querySelector("#contact_form");

const checkRequiredField = (field: any) => {
  if (!field.value) {
    field.closest(".form-field").classList.add("warning");
    return false;
  }
  field.closest(".form-field").classList.remove("warning");
  return true;
};

const isAllRequiredFieldsDone = () => {
    // @ts-ignore 
  const nameField = document.forms["contact_form"]["name"];
  // @ts-ignore 
  const phoneField = document.forms["contact_form"]["phone"];

  const isNameDone = checkRequiredField(nameField);
  const isPhoneDone = checkRequiredField(phoneField);

  return isNameDone && isPhoneDone;
};

const addInputFocus = (e: any) => {
  const parent = e.target.parentNode.parentNode;
  parent.classList.add("focus");
};

const removeInputFocus = (e: any) => {
  const parent = e.target.parentNode.parentNode;
  if (e.target.value === "") {
    parent.classList.remove("focus");
  }
};

const handleSubmitForm = (e: any) => {
  e.preventDefault();

  if (isAllRequiredFieldsDone() && form !== undefined && form !== null) {
    // @ts-ignore 
    form.submit();
    // @ts-ignore 
    form.reset();
  }
};
// @ts-ignore 
submitBtn.addEventListener("click", handleSubmitForm);
inputs.forEach((input) => {
  input.addEventListener("focus", addInputFocus);
  input.addEventListener("blur", removeInputFocus);
});