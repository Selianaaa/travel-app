const BASE_URLS = require('./constants/_urls.js');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

/**
 * Get geo data from Geonames Api
 * @param {string} city - city name
 */
const getGeonames = async (city) => {
  return await axios({
    method: 'get',
    url: BASE_URLS.geonames,
    params: {
      name: city,
      maxRows: 1,
      username: process.env.GEONAMES_API_KEY,
    },
  });
};

/**
 * Get weather from WeatherBit Api
 * @param {number} lat - latitude
 * @param {number} lon - longitutte
 */
const getWeather = (lat, lon) => {
  return axios({
    method: 'get',
    url: BASE_URLS.weatherbit,
    params: {
      lat,
      lon,
      key: process.env.WEATHERBIT_API_KEY,
    },
  });
};

/**
 * Get picture from Pexels Api
 * @param {string} queryName
 */
const getPicture = async (queryName) => {
  return await axios({
    method: 'get',
    url: BASE_URLS.pexels,
    headers: {
      Authorization: process.env.PEXELS_API_KEY,
    },
    params: {
      query: queryName,
      per_page: '1',
      orientation: 'landscape',
      size: 'medium',
      key: process.env.PIXABAY_API_KEY,
    },
  });
};

exports.services = {
  getGeonames,
  getWeather,
  getPicture,
};
