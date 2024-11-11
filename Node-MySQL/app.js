require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const squareRoutes = require('./routes/squareRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/', squareRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});