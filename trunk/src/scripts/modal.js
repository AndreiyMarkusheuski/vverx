const openModalBtns = document.querySelectorAll('.open-modal-btn');
const modalBlock = document.querySelector('.modal');
const modalBgBtn = document.querySelector('.modal_bg');
const submitBtn = document.querySelector('#form_btn-submit');
const form = document.querySelector('#contact_form');

const handleOpenModal = () => {
    modalBlock.classList.add('open')
}

const handleCloseModal = (e) => {
    e.preventDefault()
    modalBlock.classList.remove('open')
}


openModalBtns.forEach(openModalBtn => {
    openModalBtn.addEventListener('click', handleOpenModal)
})

modalBgBtn.addEventListener('click', handleCloseModal);