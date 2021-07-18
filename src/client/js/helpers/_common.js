import moment from 'moment';
import { LSActions, displayTrip, openModal } from '../helpers';
import { serverUrl } from '../../constants';

/**
 * Add trip
 * @param {string} location - location
 * @param {string} departing - dedepartue date
 */
export const getLocationInfo = (location, departing) => {
  const id = new Date().getTime();
  showPreloader();
  fetch(
    `${serverUrl}/get_location_info?location=${location}&departing=${departing}&id=${id}`
  )
    .then((res) => res.json())
    .then(function (res) {
      res.dayDifference = getDayDifference(res.departing);
      displayTrip(res);
      addTripToLS(res);
      hidePreloader();
    });
};

/**
 * Add trip to local storage
 * @param {Object} data - trip data
 */
export const displayLsTrips = () => {
  const lsTrips = LSActions.getByKey('trips');

  if (!lsTrips || !Array.isArray(lsTrips)) {
    localStorage.clear();
    return openModal();
  }

  const newLsTrips = lsTrips.slice();

  localStorage.clear();

  newLsTrips.forEach((trip) => getLocationInfo(trip.city, trip.departing));
};

/**
 * Add trip to local storage
 * @param {Object} data - trip data
 */
export const addTripToLS = (data) => {
  const lsTrips = LSActions.getByKey('trips');

  if (!lsTrips) {
    const trips = [{ ...data }];
    return LSActions.saveByKey('trips', trips);
  }

  const newLsTrips = lsTrips.slice();

  newLsTrips.push({ ...data });
  LSActions.saveByKey('trips', newLsTrips);
};

/**
 * Remove trip from local storage
 * @param {string} elementId - element id to remove
 */
export const removeTripFromLS = (elementId) => {
  const lsTrips = LSActions.getByKey('trips');
  const newLsTrips = lsTrips.slice();

  const elementIndex = newLsTrips.findIndex((trip) => trip.id === elementId);

  if (elementIndex > -1) {
    newLsTrips.splice(elementIndex, 1);
    LSActions.saveByKey('trips', newLsTrips);
  }
};

/**
 * Get days difference
 */
export const getDayDifference = (date) => {
  const currentMoment = moment();
  const tripMoment = moment(date);
  const momentDifference = moment.duration(tripMoment.diff(currentMoment));

  const daysDifference = Math.floor(momentDifference.asDays());

  return daysDifference;
};

export const showPreloader = () => {
  document.querySelector('#preloader').style.display = 'flex';
};

export const hidePreloader = () => {
  document.querySelector('#preloader').style.display = 'none';
};
