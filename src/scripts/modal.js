const myModal = document.querySelector("#myModal");
const modalWrapper = document.querySelector(".modal");
const openModalBtn = document.querySelector("#openModal");
const body = document.body;

openModalBtn.addEventListener("click", () => {
  myModal.classList.add("active");
  body.classList.add("stop_scroll");
});

document.querySelector("#closeModal").addEventListener("click", () =>  {
    myModal.classList.remove("active");
    body.classList.remove("stop_scroll");
});

modalWrapper.addEventListener("click", (event) => {
  if (event.target == modalWrapper) {
    myModal.classList.remove("active");
    body.classList.remove("stop_scroll");
  }
});
