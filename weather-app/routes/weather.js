// routes/weather.js
const express = require('express');
const router = express.Router();
const { createWeather, getWeather, updateWeather, deleteWeather, getWeatherDetails } = require('../controllers/weatherController');

// CRUD routes
router.post('/', createWeather);
router.get('/', getWeather);
router.get('/:id', getWeatherDetails);  // Details Page for a specific weather record
router.put('/:id', updateWeather);
router.delete('/:id', deleteWeather);

module.exports = router;
