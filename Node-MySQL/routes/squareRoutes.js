// routes/squareRoutes.js
const express = require('express');
const router = express.Router();
const squareController = require('../controllers/squareController');

// Route to display form
router.get('/', squareController.showForm);

// Route to calculate and save square data
router.post('/', squareController.calculateSquare);

module.exports = router;
