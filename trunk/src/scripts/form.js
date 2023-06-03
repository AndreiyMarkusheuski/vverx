const inputs = document.querySelectorAll(".form_field_input");
const submitBtn = document.querySelector('#form_btn-submit');
const form = document.querySelector('#contact_form');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	form.submit();
	form.reset()
})

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});