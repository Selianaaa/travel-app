/**
 * Handle submit
 */
export const handleSubmit = (event) => {
  event.preventDefault();

  const location = document.getElementById('location').value.toLowerCase();
  const departing = document.getElementById('departing').value;

  const locationIsValid = TravelClient.locationIsValid(location);
  const dateIsValid = TravelClient.dateIsValid(departing);

  if (locationIsValid && dateIsValid) {
    TravelClient.getLocationInfo(location, departing);
  }
};
