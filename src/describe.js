const refs = {
  openModalBtn: document.querySelector('[describe-open]'),
  closeModalBtn: document.querySelector('[describe-close]'),
  modal: document.querySelector('[describe]'),
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.modal.addEventListener('click', logModalClick);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function logModalClick() {
  console.log('Это клик в бекдроп');
}
