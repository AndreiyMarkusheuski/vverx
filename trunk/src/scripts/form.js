const inputs = document.querySelectorAll(".form_field_input");
const submitBtn = document.querySelector("#form_btn-submit");
const form = document.querySelector("#contact_form");

const checkField = (field) => {
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

  const isNameDone = checkField(nameField);
  const isPhoneDone = checkField(phoneField);

  return isNameDone && isPhoneDone;
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  if (isAllRequiredFieldsDone()) {
    console.log("submit");
    // form.submit();
    // form.reset()
  }
};

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

submitBtn.addEventListener("click", handleSubmitForm);
inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});
