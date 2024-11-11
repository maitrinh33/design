const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rectangleRoutes = require('./routes/rectangleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Explicitly set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', rectangleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
