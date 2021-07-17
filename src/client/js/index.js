import '../styles/index.scss';
import { displayLsTrips, openModal, closeModal, handleSubmit } from './helpers';

displayLsTrips();

document
  .querySelector('.desktop_header_button')
  .addEventListener('click', openModal);
document
  .querySelector('.mobile_header_button')
  .addEventListener('click', openModal);

document.querySelector('#modal_close').addEventListener('click', closeModal);

handleSubmit();
