const openModal = (modal) => {
  modal.classList.add('show');
  modal.style.display = 'inline-block'; // eslint-disable-line
};

const closeModal = (modal) => {
  modal.classList.remove('show');
  modal.style.display = 'none'; // eslint-disable-line
};

export default () => {
  const btnOpenModal = document.querySelector('[data-toggle="modal"]');

  btnOpenModal.addEventListener('click', () => {
    const id = btnOpenModal.getAttribute('data-target');
    const modal = document.querySelector(id);
    openModal(modal);
    const closeButton = modal.querySelector('[data-dismiss="modal"]');
    closeButton.addEventListener('click', () => closeModal(modal));
  });
};
