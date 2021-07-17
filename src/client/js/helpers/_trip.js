/**
 * Add trip
 * @param {Object} data - trip data
 */
export const addTrip = (data) => {
  const { id, city, countryName, temp, weather, departing } = data;

  const tripsSection = document.querySelector('#trips');

  const tripCard = addTripCard(tripsSection, id);

  addCancelButton(tripCard);
  addLocation(tripCard, city, countryName);

  const tripContent = addTripContent(tripCard);

  addLeftContent(tripContent);

  const rightContent = addRightContent(tripContent);
  addRigthCardContent(rightContent, departing);

  addWeatherContent(tripCard, temp, weather.description);
};

/**
 * Add trip card
 * @param {HTMLSectionElement} tripsSection - tripsSection element
 * @param {string} id - trip card id
 */
export const addTripCard = (tripsSection, id) => {
  const tripCard = document.createElement('div');
  tripCard.className = 'trip';
  tripCard.id = id;
  tripsSection.appendChild(tripCard);

  return tripCard;
};

/**
 * Add remove trip button in trip card
 * @param {HTMLDivElement} tripCard - tripCard element in trip card
 */
export const addCancelButton = (tripCard) => {
  const cancelButton = document.createElement('div');
  cancelButton.className = 'cancel_button';

  cancelButton.addEventListener('click', (e) => {
    console.log('cancelButton', e.target.parentNode);
    e.target.parentNode.remove();
  });

  tripCard.appendChild(cancelButton);
};

/**
 * Add trip card content element
 * @param {HTMLDivElement} tripCard - tripCard element in trip card
 */
export const addTripContent = (tripCard) => {
  const tripContent = document.createElement('div');
  tripContent.className = 'trip_content';
  tripCard.appendChild(tripContent);

  return tripContent;
};

/**
 * Add trip card left content element
 * @param {HTMLDivElement} tripCard - tripContent element in trip card
 */
export const addLeftContent = (tripContent) => {
  const leftContent = document.createElement('div');
  leftContent.className = 'left_content';
  tripContent.appendChild(leftContent);
};

/**
 * Add trip card right content element
 * @param {HTMLDivElement} tripContent - tripContent element in trip card
 */
export const addRightContent = (tripContent) => {
  const rightContent = document.createElement('div');
  rightContent.className = 'right_content';
  tripContent.appendChild(rightContent);

  return rightContent;
};

/**
 * Add location info in trip card
 * @param {HTMLDivElement} tripCard - tripCard element in trip card
 * @param {string} city - city name
 * @param {string} countryName - country name
 */
export const addLocation = (tripCard, city, countryName) => {
  const tripLocation = document.createElement('div');

  tripLocation.className = 'trip_location';
  tripLocation.textContent = `${city}, ${countryName}`;

  tripCard.appendChild(tripLocation);
};

/**
 * Add right content in trip card
 * @param {HTMLDivElement} rightContent - rightContent element in trip card
 * @param {string} departing - date of departue
 */
export const addRigthCardContent = (rightContent, departing) => {
  const departingElement = document.createElement('div');
  departingElement.className = 'trip_departing';
  departingElement.textContent = 'Departing: ';
  rightContent.appendChild(departingElement);

  const departingDate = document.createElement('span');
  departingDate.textContent = departing;
  departingElement.appendChild(departingDate);

  const daysBeforeTrip = document.createElement('div');
  daysBeforeTrip.className = 'trip_days_amount';
  daysBeforeTrip.textContent = 'Days before trip: ';
  rightContent.appendChild(daysBeforeTrip);

  // write funct to count days / if < 0 then opacity on card
  const days = document.createElement('span');
  days.textContent = 35;
  daysBeforeTrip.appendChild(days);
};

/**
 * Add weather content in trip card
 * @param {HTMLDivElement} tripCard - tripCard element in trip card
 * @param {number} temp - current temperature
 * @param {string} description - weather description
 */
export const addWeatherContent = (tripCard, temp, description) => {
  const currentWeather = document.createElement('div');
  currentWeather.className = 'trip_weather';
  currentWeather.textContent = 'Current Weather: ';
  tripCard.appendChild(currentWeather);

  const weatherData = document.createElement('span');
  weatherData.textContent = `${temp}°C, ${description}`;
  currentWeather.appendChild(weatherData);
};
