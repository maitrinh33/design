// controllers/squareController.js
const squareModel = require('../models/square');

// Controller to render the form
const showForm = (req, res) => {
  res.render('index', { perimeter: null, area: null });
};

// Controller to calculate perimeter and area, then save to MySQL
const calculateSquare = async (req, res) => {
  const { sideLength } = req.body;

  const perimeter = 4 * sideLength;
  const area = sideLength * sideLength;

  try {
    await squareModel.saveSquareData(sideLength, perimeter, area);
    res.render('index', { perimeter, area });
  } catch (error) {
    console.error('Error saving to database', error);
    res.status(500).send('Server Error');
  }
};

// Export both controllers
module.exports = { showForm, calculateSquare };
