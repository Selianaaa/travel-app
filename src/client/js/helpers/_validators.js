/**
 * Check if date is valid
 * @param {string} date -date
 */
export const dateIsValid = (date) => {
  return true;
};

/**
 * Check if location is valid
 * @param {string} location -location
 */
export const locationIsValid = (location) => {
  const locationRegex = /^[A-Za-z]+$/;

  console.log(location);
  const isValid = locationRegex.test(location);

  if (!isValid) {
    alert('use only latin letters');
    document.getElementById('location').value = '';
  }

  return isValid;
};
