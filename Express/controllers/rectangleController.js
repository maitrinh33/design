// controllers/rectangleController.js

const Rectangle = require('../models/rectangle');

// Controller để tính và trả về chu vi

exports.calculatePerimeter = (req, res) => {
  const width = parseFloat(req.body.width);
  const height = parseFloat(req.body.height);
  const perimeter = 2 * (width + height);

  res.render('index', { perimeter });
};
