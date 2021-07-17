const BASE_URLS = require('./constants/_urls.js');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

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
 * @param {number} lat
 * @param {number} lon
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

// const getPicture = async (city, country) => {
const getPicture = async (city) => {
  return await axios({
    method: 'get',
    url: BASE_URLS.pixabay,
    params: {
      q: city,
      per_page: '1',
      category: 'travel',
      orientation: 'horizontal',
      image_type: 'photo',
      key: process.env.PIXABAY_API_KEY,
    },
  });
};

exports.services = {
  getGeonames,
  getWeather,
  getPicture,
};
