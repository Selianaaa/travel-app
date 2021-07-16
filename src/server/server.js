var path = require('path');
const express = require('express');
const cors = require('cors');
const mockAPIResponse = require('./_mock_api.js');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();
const apiKey = process.env.API_KEY;
const baseApiUrl = 'https://api.meaningcloud.com/sentiment-2.1';

console.log(`Your API key is ${process.env.API_KEY}`);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.get('/check_article', async (req, res) => {
  console.log(req.query);
  try {
    const apiResponce = await fetch(
      `${baseApiUrl}?key=${apiKey}&url=${req.query.articleUrl}&lang=en`
    );
    const apiData = await apiResponce.json();

    res.status(200).send(apiData);
  } catch (error) {
    console.log('error', error);
  }
});
