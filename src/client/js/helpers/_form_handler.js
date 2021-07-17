import { dateIsValid, getLocationInfo, closeModal } from '../helpers';

/**
 * Handle submit trip data
 */
export const handleSubmit = () => {
  document.querySelector('#submit').addEventListener('click', function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value.toLowerCase();
    const departing = document.getElementById('departing').value;

    const dateValid = dateIsValid(departing);

    if (dateValid) {
      getLocationInfo(location, departing);
      closeModal();
    }
  });
};
