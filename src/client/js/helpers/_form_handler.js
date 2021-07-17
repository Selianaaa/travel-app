/**
 * Handle submit
 */
export const handleSubmit = (event) => {
  event.preventDefault();

  const location = document.getElementById('location').value.toLowerCase();
  const departing = document.getElementById('departing').value;

  const dateIsValid = TravelClient.dateIsValid(departing);

  if (dateIsValid) {
    TravelClient.getLocationInfo(location, departing);
    TravelClient.closeModal();
  }
};
