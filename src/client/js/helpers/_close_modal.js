/**
 * Add trip (open modal)
 */
export const closeModal = (event) => {
  event.preventDefault();

  document.getElementById('location').value = '';
  document.getElementById('departing').value = '';

  document.getElementById('add_modal').style.display = 'none';
};
