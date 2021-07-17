const serverUrl = 'http://localhost:8081';
export const getLocationInfo = (location, departing) => {
  const id = new Date().getTime();
  fetch(
    `${serverUrl}/get_location_info?location=${location}&departing=${departing}&id=${id}`
  )
    .then((res) => res.json())
    .then(function (res) {
      console.log('getLocationInfo', res);
      addTrip(res);
    });
};

export const removeTrip = () => {};

export const addTrip = (data) => {
  const { id, city, countryName, temp, weather, departing } = data;
  const tripsSection = document.querySelector('#trips');

  const tripCard = document.createElement('div');
  tripCard.className = 'trip';
  tripCard.id = id;
  tripsSection.appendChild(tripCard);

  const cancelButton = document.createElement('div');
  cancelButton.className = 'cancel_button';
  cancelButton.addEventListener('click', (e) => {
    console.log('cancelButton', e.target.parentNode);
    e.target.parentNode.remove();
  });
  tripCard.appendChild(cancelButton);

  const tripLocation = document.createElement('div');
  tripLocation.className = 'trip_location';
  tripLocation.textContent = `${city}, ${countryName}`;
  tripCard.appendChild(tripLocation);

  const tripContent = document.createElement('div');
  tripContent.className = 'trip_content';
  tripCard.appendChild(tripContent);

  const currentWeather = document.createElement('div');
  currentWeather.className = 'trip_weather';
  currentWeather.textContent = `${temp}°C, ${weather.description}`;
  tripCard.appendChild(currentWeather);

  const leftContent = document.createElement('div');
  leftContent.className = 'left_content';
  tripContent.appendChild(leftContent);

  const rightContent = document.createElement('div');
  rightContent.className = 'right_content';
  tripContent.appendChild(rightContent);

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

// export const showPreloader = () => {
//   document.querySelector('#preloader').style.display = 'block';
//   document.getElementById('results').style.display = 'none';
// };

// export const showResult = () => {
//   document.querySelector('#preloader').style.display = 'none';
//   document.getElementById('results').style.display = 'block';
// };
