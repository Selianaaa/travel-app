const BASE_URLS = require('./constants/_urls.js');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// only for Udacity review
const WEATHERBIT_API_KEY = '7c071ce6f7c546a7b4c807d5603a6ffc';
const GEONAMES_API_KEY = 'selianaaaaa';
const PEXELS_API_KEY =
  '563492ad6f917000010000013ab331ed91d24002bd8cef8ace2f25e9';

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
      username: GEONAMES_API_KEY,
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
      key: WEATHERBIT_API_KEY,
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
      Authorization: PEXELS_API_KEY,
    },
    params: {
      query: queryName,
      per_page: '1',
      orientation: 'landscape',
      size: 'medium',
    },
  });
};

exports.services = {
  getGeonames,
  getWeather,
  getPicture,
};
