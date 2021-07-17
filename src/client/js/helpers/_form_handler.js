import { dateIsValid, getLocationInfo } from '../helpers';

/**
 * Handle submit trip data
 */
export const handleSubmit = (event) => {
  event.preventDefault();

  const location = document.getElementById('location').value.toLowerCase();
  const departing = document.getElementById('departing').value;

  const dateValid = dateIsValid(departing);

  if (dateValid) {
    getLocationInfo(location, departing);
    closeModal();
  }
};
