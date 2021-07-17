const BASE_URLS = {
  pixabay: 'https://pixabay.com/api/',
  weatherbit: 'https://api.weatherbit.io/v2.0/current',
  geonames: 'http://api.geonames.org/searchJSON',
};

module.exports = BASE_URLS;
// pixabay:  https://pixabay.com/api/?key=API_KEY&q=moscow&image_type=photo
// weatherbit:  https://api.weatherbit.io/v2.0/history/daily?&lat=38.123&lon=-78.543&start_date=2021-07-12&end_date=2021-07-13&key=API_KEY
// geonames: http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=API_KEY

// http://api.geonames.org/citiesJSON?lat=35.7727&lon=-78.6324&lang=de&username=selianaaaaa
// lat: 35.7727
// lon: -78.6324

//  http://api.geonames.org/gtopo30JSON?lat=35.7727&lng=-78.6324&username=selianaaaaa
//  http://api.geonames.org/findNearbyJSON?lat=35.7727&lng=-78.6324&username=selianaaaaa
