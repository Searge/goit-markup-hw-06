const refs = {
  openModalBtn: document.querySelector('[data-open-modal]'),
  closeModalBtn: document.querySelector('[data-close-modal]'),
  backdrop: document.querySelector('[data-backdrop]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', tongleModal);
refs.closeModalBtn.addEventListener('click', tongleModal);

function tongleModal() {
  refs.backdrop.classList.toggle('is-hidden');
  refs.modal.classList.toggle('active');
}
