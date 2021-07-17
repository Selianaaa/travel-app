/**
 * Open modal window
 */
export const openModal = () => {
  document.getElementById('modal').style.display = 'block';
};

/**
 * Close modal window
 */
export const closeModal = () => {
  document.getElementById('location').value = '';
  document.getElementById('departing').value = '';

  document.getElementById('modal').style.display = 'none';
};
