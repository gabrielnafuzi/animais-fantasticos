export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalContainer = document.querySelector(modalContainer);

    // bind this to callback to
    // reference to class object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.outsideModalClick = this.outsideModalClick.bind(this);
  }

  // open or close modal
  toggleModal() {
    this.modalContainer.classList.toggle('active');
  }

  // add toggle event to modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // close modal when click outside
  outsideModalClick(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal();
    }
  }

  // add events to modal elements
  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.outsideModalClick);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvents();
    }

    return this;
  }
}
