import { displayLsTrips, openModal, closeModal, watchSubmit } from '../helpers';

/**
 * Initialize app
 */
export const appInitialization = () => {
  displayLsTrips();

  document
    .querySelector('.desktop_header_button')
    .addEventListener('click', openModal);
  document
    .querySelector('.mobile_header_button')
    .addEventListener('click', openModal);

  document.querySelector('#modal_close').addEventListener('click', closeModal);

  watchSubmit();
};
