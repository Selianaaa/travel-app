var path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');
const dotenv = require('dotenv');
const { services } = require('./_services.js');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/proxy', proxy()));
app.use(cors({ credentials: true }));
app.use(express.static('dist'));

app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/get_location_info', async (req, res) => {
  let locationData = {
    city: req.query.location,
    departing: req.query.departing,
    id: req.query.id,
  };

  await services
    .getGeonames(req.query.location)
    .then((res) => {
      const { lat, lng, toponymName, countryName } = res.data.geonames[0];
      locationData = {
        ...locationData,
        city: toponymName,
        countryName,
        lat,
        lng,
      };
      console.log(locationData);
    })
    .catch((error) => {
      console.log('error: ', error.message);
      return res.status(400).send({
        message: error.message,
      });
    });

  await services
    .getWeather(locationData.lat, locationData.lng)
    .then((res) => {
      const { temp, weather } = res.data.data[0];
      locationData = {
        ...locationData,
        temp,
        weather,
        // ...res.data.data[0],
      };
    })
    .catch((error) => {
      console.log('error: ', error.message);
      return res.status(400).send({
        message: error.message,
      });
    });

  await services
    .getPicture(locationData.city)
    .then((res) => {
      locationData = {
        ...locationData,
        photo: res.data.photos[0].src.medium,
      };
    })
    .catch((error) => {
      console.log('error: ', error.message);
      return res.status(400).send({
        message: error.message,
      });
    });

  res.status(200).send(locationData);
});
