import { getLocationInfo, closeModal } from '../helpers';

/**
 * Handle submit trip data
 */
export const handleSubmit = () => {
  document.querySelector('#submit').addEventListener('click', function (event) {
    event.preventDefault();

    const location = document.getElementById('location').value.toLowerCase();
    const departing = document.getElementById('departing').value;

    if (location.length > 0 && departing.length > 0) {
      getLocationInfo(location, departing);
      closeModal();
    } else {
      alert('Select departue date and write location');
    }
  });
};
