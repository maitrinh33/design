const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./configs/database");
const orderRouter = require("./routers/order.router");
const foodRouter = require('./routers/food.router');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
connectDB();

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to the FOODORDER API!"); // This sends a message when visiting '/'
});

// Register the routers
app.use('/foods', foodRouter); 
app.use("/orders", orderRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});