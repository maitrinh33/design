const express = require('express');
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

// Route to render the main form page with an initial value for `perimeter`
router.get('/', (req, res) => {
  res.render('index', { perimeter: null });
});

// Route to calculate the perimeter
router.post('/calculate', rectangleController.calculatePerimeter);

module.exports = router;
